import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

type Program = {
  title: string;
  description: string;
  description_2: string;
};

export const Modal: React.FC<Program> = ({
  title,
  description,
  description_2,
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          More Info <ArrowUpRight className="ml-1" size="16" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen sm:w-full">
        <DialogTitle className="text-center">{title}</DialogTitle>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">{description}</div>
          <div className="w-full sm:w-1/2">{description_2}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
