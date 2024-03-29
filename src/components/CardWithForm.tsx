import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function CardWithForm({
  title,
  description,
  form,
  nextDiscription,
  link,
}: any) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{form}</CardContent>
      <CardFooter>
        <div className="pl-2 m-0 lowercase justify-center">
          <small>
            {nextDiscription}
            <Link href={`/${link}`} className="pl-2 text-blue-500 underline">
              {link}
            </Link>
          </small>
        </div>
      </CardFooter>
    </Card>
  );
}
