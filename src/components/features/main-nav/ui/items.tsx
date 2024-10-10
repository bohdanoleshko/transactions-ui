"use client";
import React from "react";
import { ArrowLeftRightIcon, LayoutDashboardIcon, Undo } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const navItems = [
  { name: "Dashboard", icon: LayoutDashboardIcon },
  { name: "Transaction", icon: ArrowLeftRightIcon },
  { name: "Transfer", icon: Undo },
];

export default function Items() {
  const pathname = usePathname();

  const stylesIfPathIncludeName = (name: string) => {
    const path = pathname.split("/").filter((p) => p !== "");
    const lowerCaseName = name.toLowerCase();
    const isInclude = path.includes(lowerCaseName);

    if (path.length === 0 && lowerCaseName === "dashboard") {
      return "text-black";
    }
    if (isInclude) {
      return "text-black";
    }

    return "text-gray-400";
  };

  return (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.name}
            className={cn(
              "flex items-center gap-2",
              stylesIfPathIncludeName(item.name),
            )}
          >
            <Icon className="size-5" />
            <span className="text-lg font-medium">{item.name}</span>
          </div>
        );
      })}
    </>
  );
}
