import { useEffect, useRef, useState } from 'react';
import AlarmSetter from '@/components/AlarmSetter';
import { Button } from '@/components/ui/button';
import type { alarmInfo } from '@/types/types';
import alarms from '@/constants/alarms.json';
import AlarmDialog from './components/AlarmDialog';
import RadioTaisoDialog from './components/RadioTaisoDialog';


function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour12: false }));
  const [alarmInfo, setAlarmInfo] = useState<alarmInfo | null>(null);
  const [isAlarmActive, setIsAlarmActive] = useState<boolean>(false);
  const [showRadioTaiso, setShowRadioTaiso] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Request notification permission on mount
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour12: false }));
      const currentTime = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
      if (alarmInfo && !isAlarmActive && alarmInfo.time === currentTime) {
        setIsAlarmActive(true);
        audioRef.current = new Audio(alarmInfo.sound);
        audioRef.current.loop = true;
        audioRef.current.volume = alarmInfo.volume;
        audioRef.current.play();
        // Send Windows notification
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Alarm!", {
            body: `Alarm set for ${alarmInfo.time} is ringing!`,
            icon: "/vite.svg"
          });
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [alarmInfo, isAlarmActive]);

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center caret-transparent">
        <h1 className="text-6xl lg:text-9xl font-extrabold font-orbitron">
          {time}
        </h1>
        {alarmInfo && (
          <>
            <h2 className="text-2xl lg:text-4xl mt-8">Alarm set for: {alarmInfo.time}</h2>
            <h2 className="text-2xl lg:text-4xl mt-2">Sound: {alarms.find(alarm => alarm.path === alarmInfo.sound)?.name || 'Unknown'}</h2>
            <Button className="mt-8 p-6 text-xl" onClick={() => setAlarmInfo(null)}>Clear Alarm</Button>
          </>
        )}
        {!alarmInfo && (
          <AlarmSetter setAlarmInfo={setAlarmInfo} />
        )}
      </div>
      {isAlarmActive && (
        <AlarmDialog
          isAlarmActive={isAlarmActive}
          setIsAlarmActive={setIsAlarmActive}
          audioRef={audioRef}
          setAlarmInfo={setAlarmInfo}
          setShowRadioTaiso={setShowRadioTaiso}
        />
      )}
      {showRadioTaiso && (
        <RadioTaisoDialog
          open={showRadioTaiso}
          onClose={() => setShowRadioTaiso(false)}
        />
      )}
    </>
  )
}

export default App
