import { Card, CardBody } from "@material-tailwind/react";
import HeaderTable from "./containter/component/ToDoHeader";
import ToDoContainer from "./containter/ToDoContainer";
import AddMember from "./containter/component/AddMember";
import React from "react";

const ToDoList = () => {
  return (
    <React.Fragment>
      <AddMember></AddMember>
      <Card className="h-full w-full rounded-b-2xl">
        <CardBody className="px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <HeaderTable></HeaderTable>
            <ToDoContainer></ToDoContainer>
          </table>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ToDoList;
