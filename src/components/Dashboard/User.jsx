import React from "react";
import main from "../../assets/images/Ellipse 16.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const User = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-[80%] ml-60 mb-12">
      <div className="w-full flex flex-col gap-7 mt-12 bg-[#F8F8F8] p-4 rounded-2xl">
        <h1 className=" text-[22px] font-bold">All User</h1>

        <table className="relative bg-white w-full mx-auto rounded-2xl">
          <tr>
            <th className=" text-[#949494] text-[14px] font-normal">Name</th>
            <th className=" text-[#949494] text-[14px] font-normal">Number</th>
            <th className=" text-[#949494] text-[14px] font-normal">Address</th>
            <th className=" text-[#949494] text-[14px] font-normal">Actions</th>
          </tr>
          <tr className=" hover:bg-[#f4eeea94]">
            <td className=" flex gap-4 items-center">
              <img src={main} alt="" />
              Albert Flores{" "}
            </td>
            <td>+9921487982487</td>
            <td>curtis.weaver@example.com</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>

          <tr className=" hover:bg-[#f4eeea94]">
            <td className=" flex gap-4 items-center">
              <img src={main} alt="" />
              Albert Flores{" "}
            </td>
            <td>+9921487982487</td>
            <td>curtis.weaver@example.com</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>

          <tr className=" hover:bg-[#f4eeea94]">
            <td className=" flex gap-4 items-center">
              <img src={main} alt="" />
              Albert Flores{" "}
            </td>
            <td>+9921487982487</td>
            <td>curtis.weaver@example.com</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>

          <tr className=" hover:bg-[#f4eeea94]">
            <td className=" flex gap-4 items-center">
              <img src={main} alt="" />
              Albert Flores{" "}
            </td>
            <td>+9921487982487</td>
            <td>curtis.weaver@example.com</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>
        </table>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default User;
