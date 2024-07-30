import React from 'react'
import { GrDocument } from 'react-icons/gr'
import { IoMdStar } from 'react-icons/io'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md'
import { RiInboxFill } from 'react-icons/ri'
import { TbSend2 } from 'react-icons/tb'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setOpen } from '../redux/appSlice'
// import { setOpen } from './appSlice';
const sidebarItems = [
    {
        icon: <RiInboxFill size={"20px"} />,
        text: 'Inbox'
    },
    {
        icon: <IoMdStar size={"20px"} />,
        text: 'Starred'
    },
    {
        icon: <MdOutlineWatchLater size={"20px"} />,
        text: 'Snoozed'
    },
    {
        icon: <TbSend2 size={"20px"} />,
        text: 'Sent'
    },
    {
        icon: <GrDocument size={"20px"} />,
        text: 'Drafts'
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
        text: 'More'
    }

]
const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <div className='w-[15%]'>
            <div  className='p-3'>
                <button onClick={()=>dispatch(setOpen(true))} className='flex items-center p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF] gap-2'>
                    <LuPencil size={"24px"} />
                    Compose
                </button>
            </div>
            <div className='text-gray-500'>
                {
                sidebarItems.map((items, index) => {
                    return (
                        <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200'>
                            {items.icon}
                            <p>{items.text}</p>
                        </div>
                    )
                })
                }

            </div>
        </div >
    )
}
export default Sidebar
