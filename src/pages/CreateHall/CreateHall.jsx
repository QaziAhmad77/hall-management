import InputFields from "../../components/CreateHall/InputFields";
import Schedule from "../../components/CreateHall/Schedule";

const CreateHall = () => {
  return (
    <div className="flex flex-col w-screen h-screen gap-6">
      <div className="flex gap-4 w-[80%] mt-14 m-auto bg-slate-100 p-8 rounded-[16px]">
        <InputFields />
        <Schedule />
      </div>
    </div>
  );
};

export default CreateHall;
