import React from 'react'
import main from '../../assets/images/Ellipse 16.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const User = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
  return (
    
    <div className=' ml-60 mb-12'>
        <h1 className=' text-[22px] font-bold mt-5'>User</h1>
       <div className=' flex flex-col gap-7 mt-12 bg-[#f8f8f8] rounded-2xl pr-[3.5rem] py-[2.5rem]'>
        <div className=' flex items-center justify-between'>
        <h1 className=' text-[22px] font-bold ml-6'>All User</h1>
        <div className=' flex gap-3 items-center'>
        <button onClick={handleOpen} className=' bg-[#F39D12] text-white py-3 px-6 rounded-[96px]'>Create User +</button>
        </div>
        </div>
       <table className=' relative left-6 bg-white mx-auto rounded-2xl'>
        
    <tr>
    <th className=' text-[#949494] text-[14px] font-normal'>Name</th>
    <th className=' text-[#949494] text-[14px] font-normal'>Number</th>
    <th className=' text-[#949494] text-[14px] font-normal'>Address</th>
    <th className=' text-[#949494] text-[14px] font-normal'>Account</th>
    <th className=' text-[#949494] text-[14px] font-normal'>Actions</th>
    </tr>
     <tr className=' hover:bg-[#f4eeea94]'>
    <td className=' flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
    <td>+9921487982487</td>
    <td>curtis.weaver@example.com</td>
    <td>Free User</td>
    <td><BsThreeDotsVertical /></td>
    </tr>
    
    <tr className=' hover:bg-[#f4eeea94]'>
    <td className=' flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
    <td>+9921487982487</td>
    <td>curtis.weaver@example.com</td>
    <td>Free User</td>
    <td><BsThreeDotsVertical /></td>
    </tr>

    <tr className=' hover:bg-[#f4eeea94]'>
    <td className=' flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
    <td>+9921487982487</td>
    <td>curtis.weaver@example.com</td>
    <td>Free User</td>
    <td><BsThreeDotsVertical /></td>
    </tr>

    <tr className=' hover:bg-[#f4eeea94]'>
    <td className=' flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
    <td>+9921487982487</td>
    <td>curtis.weaver@example.com</td>
    <td>Free User</td>
    <td><BsThreeDotsVertical /></td>
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
  )
}

export default User