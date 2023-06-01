import React from "react";
import { GrTapeOption } from "react-icons/gr";
import { Card } from "./ui/Card";
import { Title } from "./ui/Title";

export const Environment = (props: {}) => {
  return (
    <Card>
      <Title>
        <GrTapeOption size={20} className="mr-1" />
        Enviroment
      </Title>
    </Card>
  );
};
