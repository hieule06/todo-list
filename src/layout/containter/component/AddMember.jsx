import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { useToDoContext } from "../../TodoProvider";

const AddMember = () => {
  const { handleUpdateCardData, handleIsOpenModal } = useToDoContext();

  const handleOpenModal = () => {
    handleUpdateCardData({});
    handleIsOpenModal();
  };

  return (
    <div className="float-right	pr-6 mt-5 mb-2">
      <Button
        className="flex items-center gap-2 text-base cursor-pointer bg-white border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white hover:border-blue-500"
        size="sm"
        onClick={() => handleOpenModal()}
      >
        <UserPlusIcon strokeWidth={2} className="h-6 w-6" /> Add member
      </Button>
    </div>
  );
};

export default AddMember;
