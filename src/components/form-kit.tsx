import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";

/**
 * Shared form pieces for the tour, enrollment, contact and careers forms.
 *
 * The forms used to lean on the browser's own validation bubbles. Those appear
 * in the *browser's* language rather than the page's (English bubbles on a
 * Spanish page), vanish on the next keystroke, and are announced inconsistently
 * by screen readers. Here the form sets `noValidate`, the Constraint Validation
 * API still does the checking, and each problem is written under its field,
 * tied to it with `aria-describedby`, with focus moved to the first one
 * (WCAG 3.3.1, 3.3.3).
 */

type Errors = Record<string, string>;

const ErrorsContext = createContext<{ errors: Errors; clear: (name: string) => void }>({
  errors: {},
  clear: () => {},
});

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function isControl(el: Element): el is Control {
  return (
    el instanceof HTMLInputElement ||
    el instanceof HTMLSelectElement ||
    el instanceof HTMLTextAreaElement
  );
}

export function ValidatedForm({
  onValidSubmit,
  className,
  children,
}: {
  onValidSubmit: (data: FormData) => void | Promise<void>;
  className?: string;
  children: ReactNode;
}) {
  const c = useContent();
  const [errors, setErrors] = useState<Errors>({});

  function messageFor(el: Control) {
    if (el.validity.valueMissing) return c.forms.required;
    if (el.validity.typeMismatch && el.type === "email") return c.forms.email;
    return c.forms.invalid;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const next: Errors = {};
    let first: Control | null = null;
    for (const el of Array.from(form.elements)) {
      if (!isControl(el) || !el.name || el.validity.valid) continue;
      next[el.name] = messageFor(el);
      first ??= el;
    }
    setErrors(next);
    if (first) {
      first.focus();
      return;
    }
    void onValidSubmit(new FormData(form));
  }

  function clear(name: string) {
    setErrors((prev) => {
      if (!(name in prev)) return prev;
      const rest = { ...prev };
      delete rest[name];
      return rest;
    });
  }

  return (
    <ErrorsContext.Provider value={{ errors, clear }}>
      <form noValidate className={className} onSubmit={onSubmit}>
        <p className="col-span-full text-[13px] text-muted">{c.forms.requiredNote}</p>
        {children}
      </form>
    </ErrorsContext.Provider>
  );
}

function useField(name: string) {
  const { errors, clear } = useContext(ErrorsContext);
  const error = errors[name];
  const errorId = `${name}-error`;
  return {
    error,
    errorId,
    clear: () => clear(name),
    aria: {
      "aria-invalid": error ? (true as const) : undefined,
      "aria-describedby": error ? errorId : undefined,
    },
  };
}

type FieldBase = {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
};

function FieldShell({
  name,
  label,
  required,
  className,
  error,
  errorId,
  children,
}: FieldBase & { error?: string; errorId: string; children: ReactNode }) {
  return (
    // min-w-0 so a long option or value can never widen the grid column and
    // push the page sideways at 320px (WCAG 1.4.10). content-start so that
    // when a neighbour in the same row shows an error and the row grows, this
    // field's label and input stay put instead of spreading apart.
    <div className={cn("grid min-w-0 content-start gap-1.5", className)}>
      <Label htmlFor={name}>
        {label}
        {/* Visual marker only; the `required` attribute tells assistive tech. */}
        {required ? (
          <span aria-hidden className="ml-0.5 text-destructive">
            *
          </span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p id={errorId} className="text-[13px] font-semibold text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  type = "text",
  autoComplete,
  placeholder,
  ...base
}: FieldBase & { type?: string; autoComplete?: string; placeholder?: string }) {
  const f = useField(base.name);
  return (
    <FieldShell {...base} error={f.error} errorId={f.errorId}>
      <Input
        id={base.name}
        name={base.name}
        type={type}
        required={base.required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={f.clear}
        {...f.aria}
      />
    </FieldShell>
  );
}

export function TextAreaField({ placeholder, ...base }: FieldBase & { placeholder?: string }) {
  const f = useField(base.name);
  return (
    <FieldShell {...base} error={f.error} errorId={f.errorId}>
      <Textarea
        id={base.name}
        name={base.name}
        required={base.required}
        placeholder={placeholder}
        onChange={f.clear}
        {...f.aria}
      />
    </FieldShell>
  );
}

export function SelectField({
  defaultValue,
  children,
  ...base
}: FieldBase & { defaultValue?: string; children: ReactNode }) {
  const f = useField(base.name);
  return (
    <FieldShell {...base} error={f.error} errorId={f.errorId}>
      <select
        id={base.name}
        name={base.name}
        required={base.required}
        defaultValue={defaultValue}
        onChange={f.clear}
        className="h-11 w-full min-w-0 rounded-md border border-input bg-paper px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        {...f.aria}
      >
        {children}
      </select>
    </FieldShell>
  );
}

/**
 * A send failure, kept on screen. It used to be a toast that disappeared after
 * about four seconds, taking the fallback phone number with it. `role="alert"`
 * announces it once; it then stays until the next attempt.
 */
export function FormFailure({
  template,
  phone,
  phoneHref,
}: {
  template: string;
  phone: string;
  phoneHref: string;
}) {
  const [before, after = ""] = template.split("{phone}");
  return (
    <p
      role="alert"
      className="col-span-full rounded-2xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm font-semibold text-destructive"
    >
      {before}
      <a href={phoneHref} className="underline underline-offset-2">
        {phone}
      </a>
      {after}
    </p>
  );
}

/**
 * The confirmation that replaces a sent form. The form unmounts on success,
 * which used to drop keyboard focus to <body>; this takes focus on mount, so a
 * screen reader reads the confirmation and a keyboard user carries on from here.
 */
export function FormDone({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div ref={ref} tabIndex={-1} className={cn("outline-none", className)}>
      {children}
    </div>
  );
}
