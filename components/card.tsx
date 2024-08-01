import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardContent = {
  title: string;
  link: string;
};

export const CardWithForm: React.FC<CardContent> = ({ title, link }) => {
  return (
    <Card className="w-full text-center my-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <a href={link}>Click More Info</a>
      </CardContent>
    </Card>
  );
};
