import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function MainAvatar({
  src,
  fallback,
  className,
  fallbackStyles,
}: {
  src?: string;
  fallback?: string;
  className?: string;
  fallbackStyles?: string;
}) {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={src} alt="@shadcn" />
      <AvatarFallback className={cn(fallbackStyles)}>{fallback}</AvatarFallback>
    </Avatar>
  );
}
