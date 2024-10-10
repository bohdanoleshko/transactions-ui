import { cn } from "@/lib/utils";
import Items from "./ui/items";
import { MainAvatar } from "@/components/atoms/avatar";
import { DropdownMenuNav } from "./ui/drop-down";

export default function NavBar({ className }: { className?: string }) {
  return (
    <>
      <nav
        className={cn(
          className,
          "flex h-14 w-full items-center justify-end px-3 md:py-2 lg:hidden",
        )}
      >
        <DropdownMenuNav
          trigger={
            <MainAvatar src="https://github.com/shadcn.png" fallback="BO" />
          }
        />
      </nav>
      <nav
        className={cn(
          className,
          "hidden h-full w-[20dvw] flex-col items-start gap-2 rounded-l-lg bg-gray-100 py-2 lg:flex",
        )}
      >
        <div className="flex w-full items-center gap-2 px-3 py-2">
          <MainAvatar src="https://github.com/shadcn.png" fallback="BO" />
          <span className="text-lg font-normal">Bohdan Oleshko</span>
        </div>
        <div className="flex w-full flex-col items-start gap-2 py-14 pl-2 lg:pl-4">
          <Items />
        </div>
      </nav>
    </>
  );
}
