"use client"
import Image from 'next/image'
import React, { MouseEventHandler, useState } from 'react'

export const Header = () => {
    const [menus,setMenues] = useState([{
        image:"/home.svg",
        name:"Overview",
    },
    {
        image:"/group.svg",
        name:"Patients",
    },
    {
        image:"/calendar.svg",
        name:"Schedule",
    },
    {
        image:"/chat.svg",
        name:"Message",
    },
    {
        image:"/credit.svg",
        name:"Transactions",
    }
    ])
    const [active,setActive] =useState("");
  return (
    <header className=' bg-[#FFFFFF] h-[72px] mt-[18px] rounded-[70px] text-black flex justify-between items-center px-[32px]'>
        <Image
            src={"/TestLogo.svg"}
            alt='logo svg'
            width={211}
            height={48}
        />

        <div className='w-[663px] h-[63px] flex justify-between items-center'>
            {
                menus.map((cur,index)=>(
                    <div key={index} onClick={(e)=>{
                        setActive(cur.name)
                    }} className={` ${cur.name == active ? "bg-[#01F0D0]" : "bg-white"} w-[122px] h-[41px] flex justify-center items-center gap-2 rounded-[41px] cursor-pointer`}>
                        <Image
                            src={cur.image}
                            alt='menu images'
                            width={16}
                            height={17}
                        />
                        <p className="">{cur.name}</p>
                    </div>
                ))
            }
        </div>

        <div className=" w-[241px] h-[44px] flex items-center">
            <div className=" w-[181px] h-[44px] flex gap-1">
                <Image
                    id='profile'
                    src={"/profile.png"}
                    alt='profile image'
                    width={44}
                    height={44}
                    />
                <div className='w-[119px] h-[19px] '>
                    <p id='profile_name' className="font-bold">Dr. Jose Simmons</p>
                    <p id='role' className="">General Practitioner</p>
                </div>
            </div>
            <div className="flex  mx-auto gap-5">
                <div id="settings"></div>
                <div id='more'></div>
            </div>
        </div>    
    </header>
  )
}
