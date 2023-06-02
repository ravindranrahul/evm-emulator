import React, { useContext } from "react";
import { Card } from "./ui/Card";
import { Table } from "./ui/Table";
import { Title } from "./ui/Title";
import { GrStackOverflow } from "react-icons/gr";
import { useAppSelector } from "../store";

export const Stack = () => {
  const stackValues = useAppSelector(store=>store.stack)

  return (
    <Card>
      <Title>
        <GrStackOverflow size={20} className="mr-1" /> Stack
      </Title>
      <Table rows={stackValues} />
    </Card>
  );
};
