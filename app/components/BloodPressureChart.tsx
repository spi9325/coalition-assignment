"use client"
import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { ChevronDown } from "lucide-react"
import { Patient } from "../types/patientData"

const RANGE_OPTIONS = [
  { label: "Last 6 months", value: 6 },
  { label: "Last 12 months", value: 12 },
  { label: "Last 24 months", value: 24 },
]

export const BloodPressureChart = ({ chartData }: { chartData: Patient }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRange, setSelectedRange] = useState(RANGE_OPTIONS[0])

  const rangedMonths = chartData.diagnosis_history.slice(0, selectedRange.value).reverse()

  const data = rangedMonths.map((entry) => ({
    month: `${entry.month.slice(0, 3)}, ${entry.year}`,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }))

  const latest = chartData.diagnosis_history[0]

  const levelSystolic = latest.blood_pressure.systolic.levels === "Higher than Average" ? "▲" : "▼"
  const levelDiastolic = latest.blood_pressure.diastolic.levels === "Higher than Average" ? "▲" : "▼"

  return (
    <div className="bg-whit border border-[#EDEDF2] p-5 w-full max-w-[720px] max-h-[298px] flex gap-8 rounded-2xl bg-[#F4F0FE]">
      {/* Left: chart */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4 relative">
          <h2 className="font-bold text-[#0B1F3A] text-[18px]">Blood Pressure</h2>

          <div className="relative">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center gap-1 text-sm text-[#5B6B79] cursor-pointer"
            >
              {selectedRange.label} <ChevronDown size={16} />
            </button>

            {isOpen && (
              <div className="absolute right-0 top-[28px] bg-white border border-[#EDEDF2] rounded-lg shadow-md z-10 w-[160px]">
                {RANGE_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => {
                      setSelectedRange(option)
                      setIsOpen(false)
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#F4F6F8] ${
                      option.value === selectedRange.value ? "text-[#01F0D0] font-bold" : "text-[#5B6B79]"
                    }`}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#F0F0F5" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9AA5B1" }} />
            <YAxis domain={[60, 180]} ticks={[60, 80, 100, 120, 140, 160, 180]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9AA5B1" }} />
            <Line type="monotone" dataKey="systolic" stroke="#EC4899" strokeWidth={3} dot={{ r: 5, fill: "#EC4899", strokeWidth: 0 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="diastolic" stroke="#7C7FE0" strokeWidth={3} dot={{ r: 5, fill: "#7C7FE0", strokeWidth: 0 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Right: stats legend */}
      <div className="w-[180px] flex flex-col gap-6 pt-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899]" />
            <p className="font-bold text-[#0B1F3A] text-sm">Systolic</p>
          </div>
          <p className="text-3xl font-bold text-[#0B1F3A] mt-1">{latest.blood_pressure.systolic.value}</p>
          <p className="text-xs text-[#9AA5B1] mt-1 flex items-center gap-1">
            {levelSystolic} {latest.blood_pressure.systolic.levels}
          </p>
        </div>

        <div className="border-t border-[#EDEDF2]" />

        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7C7FE0]" />
            <p className="font-bold text-[#0B1F3A] text-sm">Diastolic</p>
          </div>
          <p className="text-3xl font-bold text-[#0B1F3A] mt-1">{latest.blood_pressure.diastolic.value}</p>
          <p className="text-xs text-[#9AA5B1] mt-1 flex items-center gap-1">
            {levelDiastolic} {latest.blood_pressure.diastolic.levels}
          </p>
        </div>
      </div>
    </div>
  )
}