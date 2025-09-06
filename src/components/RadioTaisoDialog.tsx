import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type RadioTaisoDialogProps = {
  open: boolean;
  onClose: () => void;
}

export default function RadioTaisoDialog({ open, onClose }: RadioTaisoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full sm:max-w-[75vw]" onInteractOutside={e => e.preventDefault()}>
        <h2 className="text-2xl mb-4">Radio Taiso Time!</h2>
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/_YZZfaMGEOU?si=iTPO6ay30spMsxJk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

