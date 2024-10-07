"use client";
import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { div } from "framer-motion/client";
import { FaCartShopping } from "react-icons/fa6";
import { useAppSelector } from "../redux/hooks";

export default function App() {
  const CartUser = useAppSelector((state) => state.cart);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  console.log(CartUser);
  
  return (
    <div>
      <Navbar maxWidth="full" isBordered>
        <NavbarContent className="justify-end md:hidden">
          <NavbarMenuToggle
            icon={<RxHamburgerMenu color="black" size={25} />}
          />
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex" justify="start">
          <NavbarBrand className="mr-4">
            <Logo />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-10">
            <NavbarItem className=" flex gap-1 ">
              <Link className="font-bold " color="foreground" href="/Detail">
                Home
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="#">
                <div className="flex gap-1 ">
                  <h1>Menu</h1>
                  <div className=" pt-1">
                    <FaAngleDown />
                  </div>
                </div>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Services
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contact us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Shop
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent
          as="div"
          className="flex gap-2 items-center"
          justify="end"
        >
          <div>
            <Link href="/cart">
              <div className=" flex gap-1">
                <div className=" mt-1">
                  <FaCartShopping />
                </div>{" "}
                {CartUser?.cart.length}:
              </div>
            </Link>
          </div>

          <Input
            classNames={{
              base: " bg-[#DBDBDB] rounded-xl  md:flex h-10 w-[200px]   text-[#000000]  ",
              mainWrapper: "h-full",
              input: "text-small ",
              inputWrapper: "h-full  font-normal  text-default-500 ",
            }}
            placeholder="Search something..."
            size="sm"
            startContent={<IoIosSearch className=" text-[#000000]" />}
            type="search"
          />
        </NavbarContent>

        <NavbarMenu className="  pt-10">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
