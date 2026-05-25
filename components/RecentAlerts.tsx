import { alerts } from '@/lib/dummy_data'

export default function RecentAlerts() {
  return (
    <div className="bg-[#161A23] rounded-2xl p-5 border border-white/5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">Recent Alerts</h2>

        <button className="text-violet-400 text-sm">View all</button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-gray-300"
          >
            <div className="w-2 h-2 rounded-full bg-red-500" />

            <p>{alert}</p>
          </div>
        ))}
      </div>
    </div>
  )
}