import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
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
          <DialogDescription className="w-full sm:w-1/2">
            {description}
          </DialogDescription>
          <DialogDescription className="w-full sm:w-1/2">
            {description_2}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};
