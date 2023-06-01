import React from "react";
import { Card } from "./ui/Card";
import { Table } from "./ui/Table";
import { Title } from "./ui/Title";
import { GrStackOverflow } from "react-icons/gr";

export const Stack = (props: {}) => {
  let stack = [{ offset: 1, value: "3" }];

  return (
    <Card>
      <Title>
        <GrStackOverflow size={20} className="mr-1" /> Stack
      </Title>
      <Table rows={stack} />
    </Card>
  );
};
