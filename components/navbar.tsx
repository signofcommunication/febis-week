"use client";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Button, buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
      <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black relative  bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Febis Week</SheetTitle>
              <SheetDescription>
                Febis Week 2024 Universitas Matana
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/about">
                  <Button variant="outline" className="w-full">
                    About
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/program">
                  <Button variant="outline" className="w-full">
                    Program
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/blog">
                  <Button variant="outline" className="w-full">
                    Blog
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/registration">
                  <Button variant="outline" className="w-full">
                    Registration
                  </Button>
                </Link>
              </DialogClose>
            </div>
            <hr className="my-4" />
            <SheetFooter>
              <div className="flex flex-col my-3 text-center text-xs">
                <p className="matana-base-color-orange font-bold">
                  Media Partner
                </p>
                <p className="">Yoga (0882-0050-06513)</p>
              </div>
              <div className="flex flex-col justify-end my-3 text-center text-xs">
                <p className="matana-base-color-orange font-bold">
                  Lomba Design Produk
                </p>
                <p className="">Melviana (0822-1374-9305)</p>
              </div>
              <div className="flex flex-col justify-end my-3 text-center text-xs">
                <p className="matana-base-color-orange font-bold">
                  Lomba Essay & Debate
                </p>
                <p className="">Gladys (0855-1199-114)</p>
              </div>
              <div className="flex flex-col justify-end text-center text-xs">
                <p className="matana-base-color-orange font-bold">
                  Lomba Cerdas Cermat
                </p>
                <p className="">Agustin Praba (0896-6861-6466)</p>
              </div>
              <div className="flex flex-col my-3 text-center text-xs">
                <p className="matana-base-color-orange font-bold">
                  Sponsorship
                </p>
                <p>Vallerie (0852-2218-2406)</p>
              </div>
            </SheetFooter>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden">
            <Link href="/" className="pl-2 flex">
              <Image
                src="/logo-matana-febis-week-web.png"
                width={100}
                height={100}
                alt="Logo febis week"
              />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Home
          </Link>
          <Link
            href="/about"
            className={buttonVariants({ variant: "outline" })}
          >
            About
          </Link>
          <Link
            href="/program"
            className={buttonVariants({ variant: "outline" })}
          >
            Program
          </Link>
          <Link href="/blog" className={buttonVariants({ variant: "outline" })}>
            Blog
          </Link>
          <Link
            href="/registration"
            className={buttonVariants({ variant: "outline" })}
          >
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
