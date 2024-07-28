import React from "react";

import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

export function TriviaCard() {
  return (
    <Card className="w-[400px]">
      <div className="p-4 bg-card rounded-lg mb-4 relative">
        <Badge className="absolute top-2 left-2">categoria</Badge>
        <div
          className="
        before:content-['']
        before:absolute
        before:bottom-0
        before:left-1/2 before:w-[60%]
        before:h-[5px]
        before:bg-muted
        before:transform
        before:-translate-x-1/2
        before:rounded-full"
        >
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold text-card-foreground">
              Trivia Question
            </CardTitle>
          </CardHeader>
        </div>
      </div>
      <CardContent className="grid grid-cols-2 gap-4">
        <Button variant="ghost">Trivia Answer 1</Button>
        <Button variant="ghost">Trivia Answer 3</Button>
        <Button variant="ghost">Trivia Answer 2</Button>
        <Button variant="ghost">Trivia Answer 4</Button>
      </CardContent>
    </Card>
  );
}
