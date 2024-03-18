import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Chip,
  IconButton,
  Tooltip,
  Typography
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import "./CardBodyTable.scss";
import { useCardContext } from "../layout/CardProvider";
import dayjs from "dayjs";

const CardBodyTable = () => {
  const TABLE_ROWS = [
    {
      id: 1,
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "John Michael",
      email: "john@creative-tim.com",
      job: "Manager",
      org: "Organization",
      status: true,
      date: "2023/04/18"
    },
    {
      id: 2,
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      job: "Programator",
      org: "Developer",
      status: false,
      date: "2023/04/18"
    },
    {
      id: 3,
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      job: "Executive",
      org: "Projects",
      status: false,
      date: "2019/09/17"
    },
    {
      id: 4,
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      job: "Programator",
      org: "Developer",
      status: true,
      date: "2024/12/08"
    },
    {
      id: 5,
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      job: "Manager",
      org: "Executive",
      status: false,
      date: "2004/10/21"
    }
  ];

  const { cardData, handleIsOpenModal, updateCardData, handleIsEdit } =
    useCardContext();

  const [listMember, setListMember] = useState(TABLE_ROWS);

  const handleEditInfo = (infoMember) => {
    updateCardData(infoMember);
    handleIsEdit(true);
    handleIsOpenModal();
  };

  const handleDeleteMember = (idMember) => {
    const listMemberNew = listMember.filter((item) => item.id !== idMember);

    setListMember(listMemberNew);
  };

  useEffect(() => {
    if (cardData && cardData.name) {
      if (cardData.date) {
        cardData.date = dayjs(cardData.date).format("YYYY/MM/DD");
      }
      if (cardData.id) {
        const updateListMember = listMember.map((item) =>
          item.id === cardData.id ? cardData : item
        );
        setListMember(updateListMember);
      } else {
        cardData["id"] = listMember.length + 1;
        setListMember([...listMember, cardData]);
      }
    }
  }, [cardData]);

  return (
    <tbody>
      {listMember.map((item, index) => {
        const isLast = index === listMember.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={item.name}>
            <td className={classes}>
              <div className="w-max">{index}</div>
            </td>
            <td className={classes}>
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal opacity-70"
                  >
                    {item.email}
                  </Typography>
                </div>
              </div>
            </td>
            <td className={classes}>
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {item.job}
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70"
                >
                  {item.org}
                </Typography>
              </div>
            </td>
            <td className={classes}>
              <div className="w-max">
                <Chip
                  variant="ghost"
                  size="sm"
                  value={
                    item.status || item.status === "true" ? "online" : "offline"
                  }
                  className={`text-base font-medium bg-[#e9e9e9] ${
                    item.status || item.status === "true"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                />
              </div>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {item.date}
              </Typography>
            </td>
            <td className={classes}>
              <Tooltip>
                <IconButton className="wrapper-action flex" variant="text">
                  <button
                    className="mr-2 p-2 bg-white border-[1px] border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:border-blue-500"
                    onClick={() => handleEditInfo(item)}
                  >
                    <PencilIcon className="inline-block h-4" />
                  </button>
                  <button
                    className="p-2 bg-white border-[1px] border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white hover:border-red-500"
                    onClick={() => handleDeleteMember(item.id)}
                  >
                    <TrashIcon className="inline-block h-4" />
                  </button>
                </IconButton>
              </Tooltip>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default CardBodyTable;
