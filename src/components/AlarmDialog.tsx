import type { alarmInfo } from "@/types/types";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

type alarmProps = {
  isAlarmActive: boolean;
  setIsAlarmActive: (active: boolean) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  setAlarmInfo: (info: alarmInfo | null) => void;
  setShowRadioTaiso: (show: boolean) => void;
}

export default function AlarmDialog({ isAlarmActive, setIsAlarmActive, audioRef, setAlarmInfo, setShowRadioTaiso }: alarmProps) {
  return (
    <Dialog open={isAlarmActive}>
      <DialogTrigger>
        <Button className="mt-8 p-6 text-xl">Stop Alarm</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="mt-32 lg:mt-40">
        <DialogTitle>Alarm</DialogTitle>
        <DialogDescription>
          The alarm is ringing!
        </DialogDescription>
        <DialogFooter>
          <Button onClick={() => {
            setIsAlarmActive(false);
            if (audioRef.current) {
              audioRef.current.pause();
            }
            setAlarmInfo(null);
            setShowRadioTaiso(true);
          }}>Start Radio Taiso
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}