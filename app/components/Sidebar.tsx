"use client"
import axios from 'axios'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface usersType {
    name: string,
    profile_picture: string,
    gender: string,
    age: number,
    more: string,
    date_of_birth: string
}
export const Sidebar = () => {
    const [users, setUsers] = useState<usersType[]>([])
    const [active, setActive] = useState("");
    const router = useRouter()
   

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const auth = btoa(`${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`)

                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
                    {
                        headers: {
                            Authorization: `Basic ${auth}`,
                        },
                    }
                )

                const formattedUsers = response.data.map((cur: any) => ({
                    name: cur.name,
                    gender: cur.gender,
                    age: cur.age,
                    profile_picture: cur.profile_picture,
                    more: "/more_horizontal.png",
                }))

                setUsers(formattedUsers)
            } catch (error) {
                console.warn(error)
            }
        }

        fetchUsers()
    }, [])

    const handleClick = (username: string) => {
        router.push(`/?name=${encodeURIComponent(username)}`)
    }

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
                        <div onClick={() => {
                            setActive(user.name);
                            handleClick(user.name)
                        }} key={index} className={` w-[300px] h-[80px] flex gap-x-2 justify-between overflow-visible p-4 transition-colors duration-300 ease-in-out hover:bg-[#D8FCF7]/50 ${user.name == active ? "transition-colors duration-300 ease-in-out bg-[#D8FCF7]" : ""}`}>
                            <Image
                                src={user.profile_picture}
                                alt='user profile'
                                width={48}
                                height={48}
                            />

                            <div className=" flex flex-col flex-1">
                                <p className="font-bold text-[14px] text-[#072635]">{user.name}</p>
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
