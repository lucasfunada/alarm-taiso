import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

type HeaderProps = {
  setShowRadioTaiso: (show: boolean) => void;
}

export default function Header({ setShowRadioTaiso }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header className="p-4 flex justify-between align-center w-full">
      <div className="flex items-center gap-4">
        <Button onClick={() => setShowRadioTaiso(true)} className="p-0 h-10 w-10 cursor-pointer bg-transparent hover:bg-transparent">
          <img src="taisou_businessman.png" alt="Alarm Taiso Logo" className="h-10 inline-block" />
        </Button>
        <h1 className="text-2xl font-bold">Alarm Taiso</h1>
      </div>
      <div>
        <Button onClick={toggleTheme} variant="ghost" size="icon" className="p-0 h-10 w-10">
          {theme === "light" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  )
}