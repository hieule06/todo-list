import { Typography } from "@material-tailwind/react";

const HeaderTable = () => {
  const TABLE_HEAD = [
    "STT",
    "Member",
    "Function",
    "Status",
    "Employed",
    "Action"
  ];
  return (
    <thead>
      <tr>
        {TABLE_HEAD.map((head) => (
          <th
            key={head}
            className="border-y border-blue-gray-100 bg-[#f5f7f8] p-4"
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="text-base font-bold leading-none opacity-70"
            >
              {head}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default HeaderTable;
