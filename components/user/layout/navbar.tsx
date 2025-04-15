"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Button,
  Link,
} from "@heroui/react";
import { LuArrowRight } from "react-icons/lu";
import { Logo } from "@/components/globals/icons";
import { usePathname, useRouter } from "next/navigation";
import { links } from "@/data/links";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => pathname == href;

  return (
    <Navbar
      className="bg-gray-400 shadow-lg"
      maxWidth="2xl"
      position="sticky"
      isMenuOpen={isOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand
          className="gap-3 max-w-fit cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Logo />
          <div className="mt-2 hidden xl:flex">
            <div className="flex flex-col">
              <p className="font-bold text-inherit leading-3 text-2xl text-primary tracking-widest">
                INFINITECH
              </p>
              <p className="text-xs font-semibold text-primary">
                ADVERTISING CORPORATION
              </p>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify="center"
        className="hidden lg:flex gap-8 justify-start ml-2"
      >
        {links.map((link) => (
          <NavbarItem
            key={link.name}
            className={`cursor-pointer ${isActive(link.href) ? "text-primary-light font-semibold" : "text-black"}`}
            onClick={() => router.push(link.href)}
          >
            {link.name}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="gap-2 cursor-pointer">
          <Button
            className="text-sm  bg-primary text-white font-medium hover:bg-primary-light"
            endContent={<LuArrowRight />}
            variant="solid"
            onPress={() => router.push("/quote")}
          >
            Get a Quote
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {links.map((link) => (
            <NavbarMenuItem
              className={`cursor-pointer ${isActive(link.href) ? "text-primary-light" : "text-black"}`}
              key={link.name}
              onClick={() => {
                setIsOpen(false);
                router.push(link.href);
              }}
            >
              {link.name}
            </NavbarMenuItem>
          ))}

          <NavbarMenuItem
            className={`cursor-pointer ${isActive("/quote") ? "text-primary-light" : "text-black"}`}
            onClick={() => {
              setIsOpen(false);
              router.push("/quote");
            }}
          >
            Get a Quote
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
