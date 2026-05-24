'use client'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

import { chartData } from '@/lib/dummy_data'

export default function SystemOverview() {
  return (
    <div className="bg-[#161A23] rounded-2xl p-5 border border-white/5">
      <h2 className="text-xl font-semibold mb-5">System Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="time" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#7C3AED"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="memory"
            stroke="#22D3EE"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="latency"
            stroke="#F97316"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}