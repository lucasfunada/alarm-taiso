import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import alarms from "@/constants/alarms.json";
import { Button } from "./button";
import { Pause, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type SelectSoundProps = {
  defaultValue: string
  setSound: (sound: string) => void
  volume?: number
}

export default function SelectSound({ defaultValue, setSound, volume = 1 }: SelectSoundProps) {
  const [selectedSound, setSelectedSound] = useState(defaultValue);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSoundChange = (sound: string) => {
    setSelectedSound(sound);
    setSound(sound);
    setIsPlaying(false);
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio instance only when sound changes
  useEffect(() => {
    audioRef.current = new Audio(selectedSound);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [selectedSound]);

  // Update volume on existing audio element when volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="flex items-center">
      <Select
        defaultValue={defaultValue}
        onValueChange={handleSoundChange}
      >
        <SelectTrigger className="caret-transparent rounded-r-none border-r-0 w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="caret-transparent">
          {alarms.map((alarm) => (
            <SelectItem key={alarm.name} value={alarm.path}>
              {alarm.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
        <Button
          type="button"
          className="rounded-l-none border-l-0 px-3"
          onClick={() => {
            if (!audioRef.current) return;
            if (isPlaying) {
              audioRef.current.pause();
              setIsPlaying(false);
            } else {
              audioRef.current.currentTime = 0;
              audioRef.current.play();
              setIsPlaying(true);
            }
          }}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
    </div>
  )
}