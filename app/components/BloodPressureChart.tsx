"use client"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Dot,
} from "recharts"
import { ChevronDown } from "lucide-react"

const data = [
  { month: "Oct, 2023", systolic: 120, diastolic: 108 },
  { month: "Nov, 2023", systolic: 116, diastolic: 65 },
  { month: "Dec, 2023", systolic: 160, diastolic: 108 },
  { month: "Jan, 2024", systolic: 112, diastolic: 90 },
  { month: "Feb, 2024", systolic: 148, diastolic: 71 },
  { month: "Mar, 2024", systolic: 157, diastolic: 76 },
]

export const BloodPressureChart = () => {
  return (
    <div className="bg-[#fd8fd5] border border-[#EDEDF2] p-5 w-full max-w-[720px] max-h-[298px] flex gap-8">
      {/* Left: chart */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-[#0B1F3A] text-[18px]">Blood Pressure</h2>
          <button className="flex items-center gap-1 text-sm text-[#5B6B79]">
            Last 6 months <ChevronDown size={16} />
          </button>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#F0F0F5" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9AA5B1" }}
            />
            <YAxis
              domain={[60, 180]}
              ticks={[60, 80, 100, 120, 140, 160, 180]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9AA5B1" }}
            />
            <Line
              type="monotone"
              dataKey="systolic"
              stroke="#EC4899"
              strokeWidth={3}
              dot={{ r: 5, fill: "#EC4899", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="#7C7FE0"
              strokeWidth={3}
              dot={{ r: 5, fill: "#7C7FE0", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
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
          <p className="text-3xl font-bold text-[#0B1F3A] mt-1">160</p>
          <p className="text-xs text-[#9AA5B1] mt-1 flex items-center gap-1">
            ▲ Higher than Average
          </p>
        </div>

        <div className="border-t border-[#EDEDF2]" />

        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7C7FE0]" />
            <p className="font-bold text-[#0B1F3A] text-sm">Diastolic</p>
          </div>
          <p className="text-3xl font-bold text-[#0B1F3A] mt-1">78</p>
          <p className="text-xs text-[#9AA5B1] mt-1 flex items-center gap-1">
            ▼ Lower than Average
          </p>
        </div>
      </div>
    </div>
  )
}