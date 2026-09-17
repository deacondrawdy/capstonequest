import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useContent } from "@/lib/locale";

export function VideoModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const c = useContent();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl overflow-hidden p-0 sm:rounded-[28px]">
        <DialogHeader className="px-6 pt-5">
          <DialogTitle>{c.hero.videoTitle}</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-5">
          {/* TODO(a11y): captions. The file has an audio track and no <track>,
              which fails WCAG 1.2.2. Needs someone to watch it and supply what
              is said; then add WebVTT files for EN and ES in public/videos/. */}
          <video
            className="aspect-video w-full rounded-2xl bg-navy-deep object-cover"
            src="/videos/classroom.mp4"
            controls
            playsInline
            autoPlay={open}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
