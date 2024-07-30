import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { CiCircleQuestion, CiSettings } from 'react-icons/ci';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from 'react-icons/io';
import { PiDot, PiDotsNineBold } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../../redux/appSlice';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../filebase';
const Navbar = () => {

    const [input, setInput] = useState('');
    const [toggle, setToggle] = useState(false);
    const {user} = useSelector(store=>store.appSlice);
    const dispatch = useDispatch();
    const signoutHandler = () => {
        signOut(auth).then(()=>{
            dispatch(setUser(null));
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        dispatch(setSearchText(input));
    },[input])
    const urll = user?.photoURL;
    return (
        <div className='flex items-center justify-between mx-3 h-16'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <GiHamburgerMenu size={"20px"}/>
                    </div>
                    <img className='w-8' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail-logo"/>
                    <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
                </div>
            </div>
            <div className='md:block hidden w-[50%] mr-60'>
                <div className='flex items-center bg-[#EAF1F8] px-2 py-3 rounded-full'>
                    <IoIosSearch size={"24px"} className='text-gray-700'/>
                    <input type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Search mail'
                    className='rounded-full bg-transparent outline-none w-full'
                    />
                </div>
            </div>
            <div className='md:block hidden'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <CiCircleQuestion size={"20px"}/>
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <CiSettings size={"20px"}/>
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <PiDotsNineBold size={"20px"}/>
                    </div>
                    <div className='relative cursor-pointer'>
                        <Avatar onClick={()=>setToggle(!toggle)} src={urll} size='40' round={true}/>
                        <AnimatePresence>
                            {toggle && (
                                <motion.div
                                initial={{opacity:0,scale:0.8}}
                                animate={{opacity:1,scale:1}}
                                exit={{opacity:0,scale:0.8}}
                                transition={{duration:0.1}}
                                className='absolute right-2 z-20 bg-white shadow-lg rounded-md'
                                >
                                <p onClick={signoutHandler} className='p-2 underline'>LogOut</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar