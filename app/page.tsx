"use client"
import Image from "next/image";
import { Header } from "./components/Header";
import { BloodPressureChart } from "./components/BloodPressureChart";

export default function Home() {
  const diagnoses = [
    {
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
    {
      problem: "Osteoarthritis",
      description: "Degenerative joint disease",
      status: "Under Treatment",
    },
    {
      problem: "Osteoarthritis",
      description: "Degenerative joint disease",
      status: "Under Treatment",
    },
    {
      problem: "Osteoarthritis",
      description: "Degenerative joint disease",
      status: "Under Treatment",
    },
  ]
  return (
    <section className="">
      <div className="w-[766px] h-[673px] p-[20px] border flex flex-col gap-[40px] rounded-[16px] bg-[#FFFFFF]">
        <p className=" h-[33px] font-extrabold text-[24px] border">Diagnosis History</p>
        <BloodPressureChart />

        <div className="border -mt-5 flex justify-between">
          <div className="w-[228px] h-[242px] bg-[#E0F3FA] border p-[16px] rounded-[12px]">
            <Image
              src={"/respiratory_rate.png"}
              alt="respiratory_rate image"
              width={96}
              height={96}
            />
            <div className="flex flex-col -gap-x-1">
              <p className="text-[20px] font-normal text-[#072635] border mt-1">Respiratory Rate</p>
              <p className="font-extrabold text-[41px] -mt-2">20 bpm</p>
            </div>

            <div className="">normal</div>
          </div>

          <div className="w-[228px] h-[242px] bg-[#FFE6E9] border p-[16px] rounded-[12px]">
            <Image
              src={"/temperature.png"}
              alt="temprature image"
              width={96}
              height={96}
            />
            <div className="flex flex-col -gap-x-1">
              <p className="text-[20px] font-normal text-[#072635] border mt-1">temprature</p>
              <p className="font-extrabold text-[41px] -mt-2">98.6°F</p>
            </div>

            <div className="">normal</div>
          </div>

          <div className="w-[228px] h-[242px] bg-[#E0F3FA] border p-[16px] rounded-[12px]">
            <Image
              src={"/HeartBPM.png"}
              alt="HeartBPM image"
              width={96}
              height={96}
            />
            <div className="flex flex-col -gap-x-1">
              <p className="text-[20px] font-normal text-[#072635] border mt-1">Heart BPM</p>
              <p className="font-extrabold text-[41px] -mt-2">78 bpm</p>
            </div>

            <div className="">Lower than Average</div>
          </div>
        </div>
      </div>

      <div className="w-[766px] h-[349px] p-[20px] border mt-[32px] rounded-[16px] bg-[#FFFFFF] overflow-hidden ">
        <p className="text-[24px] font-extrabold mb-[40px]">Diagnostic List</p>

        <div className="w-full max-w-[1080px] bg-white rounded-2xl overflow-y-scroll">
          <div className="grid grid-cols-[1fr_1.6fr_0.7fr] bg-[#F4F6F8] rounded-2xl px-6 py-4">
            <p className="font-bold text-[#0B1F3A] text-[15px]">Problem/Diagnosis</p>
            <p className="font-bold text-[#0B1F3A] text-[15px]">Description</p>
            <p className="font-bold text-[#0B1F3A] text-[15px]">Status</p>
          </div>

          <div className="relative">
            <div className="max-h-[260px] overflow-y-auto pr-3 custom-scrollbar">
              {diagnoses.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-[1fr_1.6fr_0.7fr] px-6 py-5 ${index !== diagnoses.length - 1 ? "border-b border-[#EEF0F3]" : ""
                    }`}
                >
                  <p className="text-[#0B1F3A] text-[15px]">{item.problem}</p>
                  <p className="text-[#0B1F3A] text-[15px]">{item.description}</p>
                  <p className="text-[#5B6B79] text-[15px] leading-tight">{item.status}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
