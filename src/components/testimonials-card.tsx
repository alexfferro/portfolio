import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialsCardsProps {
  avatar_url: string;
  post: string;
  name: string;
  origin: string;
}

export function TestimonialsCards({
  avatar_url,
  name,
  origin,
  post,
}: TestimonialsCardsProps) {
  return (
    <Card className="w-full rounded-xl py-8 text-center sm:h-[260px] sm:w-[655px]">
      <CardContent className="flex flex-col gap-3 items-center text-left">
        {`${post}`}
      </CardContent>
      <CardFooter className="flex items-center justify-left w-full gap-12">
        <Avatar className="size-20">
          <AvatarImage src={avatar_url} />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-3 items-start">
          <span>{name}</span>
          <span className="text-muted-foreground">{origin}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
