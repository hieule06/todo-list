import { Button, CardFooter, Typography } from "@material-tailwind/react";

const CardFooterTable = () => {
  return (
    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4 rounded-b-2xl">
      <Typography variant="small" color="blue-gray" className="font-normal">
        Page 1 of 10
      </Typography>
      <div className="flex gap-2">
        <Button
          className="text-base font-bold hover:bg-sky-700 hover:text-white px-[10px] py-1 cursor-pointer rounded-lg ml-2 border-solid border-[1px] border-black"
          variant="outlined"
          size="sm"
        >
          Previous
        </Button>
        <Button
          className="text-base font-bold hover:bg-sky-700 hover:text-white px-[10px] py-1 cursor-pointer rounded-lg ml-2 border-solid border-[1px] border-black"
          variant="outlined"
          size="sm"
        >
          Next
        </Button>
      </div>
    </CardFooter>
  );
};

export default CardFooterTable;
