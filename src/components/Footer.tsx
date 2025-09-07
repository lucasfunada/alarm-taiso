import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="text-center p-4 flex justify-center items-center gap-6">
        <Button className="bg-transparent hover:bg-transparent cursor-pointer p-0 h-5" onClick={() => setOpen(true)}>
          <p className="font-normal text-muted-foreground hover:underline">Credits</p>
        </Button>
        <a
          href="https://github.com/lucasfunada/alarm-taiso"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:underline text-sm block h-5"
        >
          GitHub
        </a>
      </footer>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Credits</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-6 max-h-96 overflow-y-auto">
            <div>
              <h3 className="font-semibold text-lg mb-2">Developed by</h3>
              <a
                href="https://github.com/lucasfunada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Lucas Funada
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Icons & Graphics</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Page Icon by{" "}
                  <a
                    href="https://www.flaticon.com/authors/7am"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    7AM
                  </a>
                  {" - "}
                  <a
                    href="https://www.flaticon.com/free-icon/sunrise_2584049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Flaticon
                  </a>
                </p>
                <p>Header Image by <a href="https://www.irasutoya.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Irasutoya</a></p>
                <p>Icons by <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lucide</a></p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Alarm Sounds</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <a
                    href="https://pixabay.com/users/freesound_community-46691455"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    freesound_community
                  </a>{", "}
                  <a
                    href="https://pixabay.com/users/universfield-28281460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Universfield
                  </a>{", "}
                  <a
                    href="https://pixabay.com/users/alexis_gaming_cam-50011695"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    ALEXIS_GAMING_CAM
                  </a>{" "}
                  from{" "}
                  <a
                    href="https://pixabay.com/sound-effects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Pixabay
                  </a>
                </p>
                <p>
                  <a
                    href="https://dova-s.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    DOVA-SYNDROME
                  </a>
                </p>
                <p>
                  <a
                    href="https://youtu.be/nRpSRP0l4bo?si=IehGL-NBkiQzat2d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GIRakaCHEEZER
                  </a>
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}