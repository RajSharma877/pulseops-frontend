import { logs } from '@/lib/dummy_data'

export default function LogsPanel() {
  return (
    <div className="bg-[#161A23] rounded-2xl p-5 border border-white/5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">Logs (Live)</h2>

        <button className="text-violet-400 text-sm">View logs</button>
      </div>

      <div className="space-y-4 font-mono text-sm">
        {logs.map((log, index) => (
          <div key={index} className="text-gray-300">
            {log}
          </div>
        ))}
      </div>
    </div>
  )
}