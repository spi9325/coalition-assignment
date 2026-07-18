"use client"
import Image from "next/image";
import { BloodPressureChart } from "./components/BloodPressureChart";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Patient } from "./types/patientData";





export default function Home() {
  const searchParams = useSearchParams()
  const selectedUser = searchParams.get("name")
  const [data, setData] = useState<Patient>()


  // const diagnoses = [
  //   {
  //     problem: "Hypertension",
  //     description: "Chronic high blood pressure",
  //     status: "Under Observation",
  //   },
  //   {
  //     problem: "Type 2 Diabetes",
  //     description: "Insulin resistance and elevated blood sugar",
  //     status: "Cured",
  //   },
  //   {
  //     problem: "Asthma",
  //     description: "Recurrent episodes of bronchial constriction",
  //     status: "Inactive",
  //   },
  //   {
  //     problem: "Osteoarthritis",
  //     description: "Degenerative joint disease",
  //     status: "Under Treatment",
  //   },
  //   {
  //     problem: "Osteoarthritis",
  //     description: "Degenerative joint disease",
  //     status: "Under Treatment",
  //   },
  //   {
  //     problem: "Osteoarthritis",
  //     description: "Degenerative joint disease",
  //     status: "Under Treatment",
  //   },
  // ];

  useEffect(() => {
    const fetchPatient = async () => {
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

        const allPatients = response.data

        const jessica =
          allPatients.find(
            (cur: any) => cur.name?.trim().toLowerCase() === selectedUser?.trim().toLowerCase()
          ) || allPatients[0]

        setData(jessica)
        console.log(jessica)
      } catch (error) {
        console.warn(error)
      }
    }

    fetchPatient()
  }, [searchParams])


  return (
    <section className="flex flex-row p-2 gap-4">
      <section className="">
        <div className="w-[766px] h-[673px] p-[20px]  flex flex-col gap-[40px] rounded-[16px] bg-[#FFFFFF]">
          <p className=" h-[33px] font-extrabold text-[24px] ">Diagnosis History</p>

          {data && <BloodPressureChart chartData={data} />}

          <div className=" -mt-5 flex justify-between">
            <div className="w-[228px] h-[242px] bg-[#E0F3FA]  p-[16px] rounded-[12px]">
              <Image
                src={"/respiratory_rate.png"}
                alt="respiratory_rate image"
                width={96}
                height={96}
              />
              <div className="flex flex-col -gap-x-1">
                <p className="text-[20px] font-normal text-[#072635]  mt-1">Respiratory Rate</p>
                <p className="font-extrabold text-[41px] -mt-2">{data?.diagnosis_history[0].respiratory_rate.value.toString()} bpm</p>
              </div>

              <div className="">{data?.diagnosis_history[0].respiratory_rate.levels.toString()}</div>
            </div>

            <div className="w-[228px] h-[242px] bg-[#FFE6E9]  p-[16px] rounded-[12px]">
              <Image
                src={"/temperature.png"}
                alt="temprature image"
                width={96}
                height={96}
              />
              <div className="flex flex-col -gap-x-1">
                <p className="text-[20px] font-normal text-[#072635]  mt-1">temprature</p>
                <p className="font-extrabold text-[41px] -mt-2">{data?.diagnosis_history[0].temperature.value.toString()}°F</p>
              </div>

              <div className="">{data?.diagnosis_history[0].temperature.levels.toString()}</div>
            </div>

            <div className="w-[228px] h-[242px] bg-[#E0F3FA]  p-[16px] rounded-[12px]">
              <Image
                src={"/HeartBPM.png"}
                alt="HeartBPM image"
                width={96}
                height={96}
              />
              <div className="flex flex-col -gap-x-1">
                <p className="text-[20px] font-normal text-[#072635]  mt-1">Heart BPM</p>
                <p className="font-extrabold text-[41px] -mt-2">{data?.diagnosis_history[0].heart_rate.value.toString()} bpm</p>
              </div>

              <div className="">{data?.diagnosis_history[0].heart_rate.levels.toString()}</div>
            </div>
          </div>
        </div>

        <div className="w-[766px] h-[349px] p-[20px]  mt-[32px] rounded-[16px] bg-[#FFFFFF] overflow-hidden ">
          <p className="text-[24px] font-extrabold mb-[40px]">Diagnostic List</p>

          <div className="w-full max-w-[1080px] bg-white rounded-2xl overflow-y-scroll">
            <div className="grid grid-cols-[1fr_1.6fr_0.7fr] bg-[#F4F6F8] rounded-2xl px-6 py-4">
              <p className="font-bold text-[#0B1F3A] text-[15px]">Problem/Diagnosis</p>
              <p className="font-bold text-[#0B1F3A] text-[15px]">Description</p>
              <p className="font-bold text-[#0B1F3A] text-[15px]">Status</p>
            </div>

            <div className="relative">
              <div className="max-h-[200px] overflow-y-auto pr-3 custom-scrollbar">
                {data?.diagnostic_list.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-[1fr_1.6fr_0.7fr] px-6 py-5 ${index !== data.diagnosis_history.length - 1 ? "-b -[#EEF0F3]" : ""
                      }`}
                  >
                    <p className="text-[#0B1F3A] text-[15px]">{item.name}</p>
                    <p className="text-[#0B1F3A] text-[15px]">{item.description}</p>
                    <p className="text-[#5B6B79] text-[15px] leading-tight">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className=" flex flex-col">

        <div className="w-[310px] h-[740px] px-2  bg-[#ffff] rounded-[16px]">
          <div className="flex justify-center items-center flex-col gap-[24px]">
            {
              data?.profile_picture &&
              <Image
              src={data?.profile_picture!}
              alt="patient card image"
              width={200}
              height={200}
              className="mt-[30px]"
            />
            }

            <p className="font-extrabold text-[24px]">{data?.name}</p>
          </div>

          <div className="">
            <div className="flex justify-start gap-3 mt-[30px]  px-3">
              <div className="w-[42px] h-[42px] bg-[#ebe6e6] flex justify-center items-center rounded-full">
                <Image
                  src={"/calendar.svg"}
                  alt="calender image"
                  width={15}
                  height={15}
                />

              </div>
              <div className="">
                <p className="text-[14px]">Date of Birth</p>
                <p className="text-[14px] font-bold">{data?.date_of_birth}</p>
              </div>
            </div>
            <div className="flex justify-start gap-3 mt-[30px]  px-3">
              <div className="w-[42px] h-[42px] bg-[#ebe6e6] flex justify-center items-center rounded-full">
                <Image
                  src={"/FemaleIcon.png"}
                  alt="calender image"
                  width={100}
                  height={15}
                />

              </div>
              <div className="">
                <p className="text-[14px]">Gender</p>
                <p className="text-[14px] font-bold">{data?.gender}</p>
              </div>
            </div>
            <div className="flex justify-start gap-3 mt-[30px]  px-3">
              <div className="w-[42px] h-[42px] bg-[#ebe6e6] flex justify-center items-center rounded-full">
                <Image
                  src={"/PhoneIcon.png"}
                  alt="calender image"
                  width={100}
                  height={15}
                />

              </div>
              <div className="">
                <p className="text-[14px]">Contact Info</p>
                <p className="text-[14px] font-bold">{data?.phone_number}</p>
              </div>
            </div>
            <div className="flex justify-start gap-3 mt-[30px]  px-3">
              <div className="w-[42px] h-[42px] bg-[#ebe6e6] flex justify-center items-center rounded-full">
                <Image
                  src={"/PhoneIcon.png"}
                  alt="calender image"
                  width={100}
                  height={15}
                />

              </div>
              <div className="">
                <p className="text-[14px]">Emergency Contacts</p>
                <p className="text-[14px] font-bold">{data?.emergency_contact}</p>
              </div>
            </div>
            <div className="flex justify-start gap-3 mt-[30px]  px-3">
              <div className="w-[42px] h-[42px] bg-[#ebe6e6] flex justify-center items-center rounded-full">
                <Image
                  src={"/InsuranceIcon.png"}
                  alt="calender image"
                  width={100}
                  height={15}
                />

              </div>
              <div className="">
                <p className="text-[14px]">Insurance Provider</p>
                <p className="text-[14px] font-bold">{data?.insurance_type}</p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-[29px]">
              <button className="px-[40px] py-[11px] mx-auto bg-[#01F0D0] rounded-[41px]">Show All Information</button>
            </div>
          </div>
        </div>

        <div className="w-[310px] h-[296px] p-[20px] mt-[20px]  bg-[#ffff] rounded-[16px] overflow-hidden">
          <p className="text-[24px] font-extrabold">Lab Results</p>

              <div className="mt-[16px] h-[240px] flex gap-5 flex-col  overflow-y-scroll custom-scrollbar px-1">
          {
            data?.lab_results.map((cur,index) => (

                <div key={index} className=" flex justify-between">
                  <p className="overflow-hidden truncate">{cur}</p>
                  <Image
                    src={"/download.png"}
                    alt="download icon"
                    width={20}
                    height={20}
                  />
                </div>
            ))
          }
              </div>
        </div>
      </section>
    </section>
  );
}
