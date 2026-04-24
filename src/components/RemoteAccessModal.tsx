import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RemoteAccessModal = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-2 w-16 h-16 rounded-full bg-gradient-blue flex items-center justify-center shadow-glow">
            <MonitorSmartphone className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-center text-xl font-display">Download iniciado</DialogTitle>
          <DialogDescription className="text-center text-base pt-2 leading-relaxed">
            Abra o aplicativo baixado e envie o número que aparece na tela para o técnico acessar sua máquina remotamente.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button variant="hero" size="lg" onClick={() => onOpenChange(false)}>
            Ok, entendi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
