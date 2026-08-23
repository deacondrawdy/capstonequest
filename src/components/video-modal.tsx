import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function VideoModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl overflow-hidden p-0 sm:rounded-[28px]">
        <DialogHeader className="px-6 pt-5">
          <DialogTitle>A morning at Capstone Quest</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-5">
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
