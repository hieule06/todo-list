import { Card, CardBody } from "@material-tailwind/react";
import HeaderTable from "../component/HeaderTable";
import CardBodyTable from "./containter/CardBodyTable";
import AddMember from "../component/AddMember";
import React from "react";

const ToDoList = () => {
  return (
    <React.Fragment>
      <AddMember></AddMember>
      <Card className="h-full w-full rounded-b-2xl">
        <CardBody className="px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <HeaderTable></HeaderTable>
            <CardBodyTable></CardBodyTable>
          </table>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ToDoList;
