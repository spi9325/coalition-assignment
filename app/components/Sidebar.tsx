"use client"
import Image from 'next/image'
import { useState } from 'react'

export const Sidebar = () => {
    const [users, setUsers] = useState([
        {
            username: "Emily Williams",
            profile: "/user1.png",
            gender: "female",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Ryan Johnson",
            profile: "/user2.png",
            gender: "male",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Brandon Mitchell",
            profile: "/user3.png",
            gender: "male",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Samantha Johnson",
            profile: "/user4.png",
            gender: "female",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Jessica Taylor",
            profile: "/user5.png",
            gender: "female",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Ashley Martinez",
            profile: "/user6.png",
            gender: "female",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Olivia Brown",
            profile: "/user7.png",
            gender: "female",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Tyler Davis",
            profile: "/user8.png",
            gender: "male",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Kevin Anderson",
            profile: "/user9.png",
            gender: "male",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Dylan Thompson",
            profile: "/user10.png",
            gender: "male",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Nathan Evans",
            profile: "/user11.png",
            gender: "male",
            age: 22,
            more: "/more_horizontal.png"
        },
        {
            username: "Mike Nolan",
            profile: "/user12.png",
            gender: "male",
            age: 22,
            more: "/more_horizontal.png"
        },
    ])
    const [active, setActive]=useState("")
    return (
        <section className='relative rounded-[16px] bg-[#FFFFFF] p-[20px] w-[367px] h-[87vh] flex flex-col'>
            <div className="flex justify-between items-center shrink-0">
                <p className="font-extrabold text-[#072635] w-[100px] h-[33px] text-2xl">Patients</p>
                <Image
                    src={"/search.png"}
                    alt='search icon'
                    width={18}
                    height={18}
                />
            </div>

            <div className=" overflow-y-auto flex-1 min-h-0 mt-5 custom-scrollbar">
                {
                    users.map((user, index) => (
                        <div onClick={()=>{
                            setActive(user.username)
                        }} key={index} className={` w-[300px] h-[80px] flex gap-x-2 justify-between overflow-visible p-4 transition-colors duration-300 ease-in-out hover:bg-[#D8FCF7]/50 ${user.username == active ? "transition-colors duration-300 ease-in-out bg-[#D8FCF7]" : ""}`}>
                            <Image
                                src={user.profile}
                                alt='user profile'
                                width={48}
                                height={48}
                            />

                            <div className=" flex flex-col flex-1">
                                <p className="font-bold text-[14px] text-[#072635]">{user.username}</p>
                                <p className="">{user.gender}, {user.age}</p>
                            </div>

                            <div className="relative flex justify-center items-center ">
                                <Image
                                    src={user.more}
                                    alt='user profile'
                                    width={18}
                                    height={4}
                                    className='bg-no-repeat'
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
