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
  link: string;
};

export const Modal: React.FC<Program> = ({
  title,
  description,
  description_2,
  link,
}) => {
  return (
    // <AlertDialog>
    //   <AlertDialogTrigger asChild>
    //     <Button variant="outline">
    //       More Info <ArrowUpRight className="ml-1" size="16" />
    //     </Button>
    //   </AlertDialogTrigger>
    //   <AlertDialogContent className="w-[600px]">
    //     <AlertDialogHeader>
    //       <AlertDialogTitle>{title}</AlertDialogTitle>
    //       <div className="flex">
    //         <div className="w-1/2">
    //           <h6>{description}</h6>
    //         </div>
    //         <div className="w-1/2">
    //           <h6>{description_2}</h6>
    //         </div>
    //       </div>
    //     </AlertDialogHeader>
    //   </AlertDialogContent>
    // </AlertDialog>
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          More Info <ArrowUpRight className="ml-1" size="16" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogTitle className="text-center">{title}</DialogTitle>
        <div className="flex">
          <div className="w-1/2">{description}</div>
          <div className="w-1/2">{description_2}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
