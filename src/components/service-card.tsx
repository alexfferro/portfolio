import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesCardsProps {
  title: string;
  description: string;
}

export function ServicesCard({ description, title }: ServicesCardsProps) {
  return (
    <Card
      className="w-full rounded-xl pt-14 pb-8 text-center
     sm:h-[400px] sm:w-[330px] sm:pb-16 sm:pt-8"
    >
      <CardHeader>
        <CardTitle className="text-2xl font-medium md:text-3xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-lg font-normal sm:text-left">
        {description}
      </CardContent>
    </Card>
  );
}
