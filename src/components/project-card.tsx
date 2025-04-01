import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ImageIcon } from "lucide-react";
import Link from "next/link";

interface ProjectsCardsProps {
  title: string;
  description: string;
  url: string;
  thumb_url: string;
}

export function ProjectsCard({
  description,
  title,
  url,
  thumb_url,
}: ProjectsCardsProps) {
  return (
    <Card
      className="w-full rounded-xl pt-14 pb-8 text-center
    sm:h-[260px] sm:w-[450px] sm:pb-16 sm:pt-8"
    >
      <CardHeader>
        <CardTitle className="md:hidden">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 items-center justify-center">
        <p className="md:hidden">{description}</p>
        <ImageIcon className="md:hidden" />
        <div className={`bg-[url(${thumb_url})] hidden md:flex`}></div>
      </CardContent>
      <CardFooter className="flex items-center justify-center md:hidden">
        <Link href={url}>
          <Button className="rounded-full" size="lg">
            See Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
