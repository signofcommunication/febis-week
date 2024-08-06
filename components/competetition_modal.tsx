import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type CompetitionItems = {
  title: string;
  description: string;
  description_2: string;
  description_3?: string;
  information_description: string;
  slug: string;
  link: string;
};

export const CompetitionModal: React.FC<CompetitionItems> = ({
  title,
  description,
  description_2,
  description_3,
  information_description,
  slug,
  link,
}) => (
  <Dialog>
    <DialogTrigger>
      <Button className="text-center text-black" variant="outline">
        More Info <ArrowUpRight className="ml-1" size="16" />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle className="text-center">{title}</DialogTitle>
      <div className="flex flex-col sm:flex-col">
        <DialogDescription>{description}</DialogDescription>
        <DialogDescription>{description_2}</DialogDescription>
        {description_3 && (
          <DialogDescription>{description_3}</DialogDescription>
        )}
        <p className="text-center font-bold">Information</p>
        <DialogDescription className="text-center text-xs max-w-96 m-auto">
          {information_description}
        </DialogDescription>
        <DialogDescription className="text-center text-xs max-w-96 m-auto">
          {slug}
        </DialogDescription>

        <Link href={link} className="flex justify-center align-center">
          Booklet <ArrowUpRight className="ml-1" size="16" />
        </Link>
      </div>
    </DialogContent>
  </Dialog>
);
