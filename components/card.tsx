import * as React from "react";

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
  color?: string;
};

export const CardWithForm: React.FC<CardContent> = ({ title, link, color }) => {
  return (
    <Card
      className="w-full text-center my-2"
      style={{ backgroundColor: color ? color : "inherit" }}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <a href={link} target="_blank">
          Daftar Sekarang
        </a>
      </CardContent>
    </Card>
  );
};
