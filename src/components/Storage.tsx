import React from "react";
import { GrStorage } from "react-icons/gr";
import { Card } from "./ui/Card";
import { Title } from "./ui/Title";

export const Storage = (props: {}) => {
  return (
    <Card>
      <Title>
        <GrStorage size={20} className="mr-1" />
        Storage
      </Title>
    </Card>
  );
};
