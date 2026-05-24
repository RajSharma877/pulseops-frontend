export default function Timeline() {
  return (
    <div className="bg-[#161A23] rounded-2xl p-5 border border-white/5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">Incident Timeline</h2>

        <button className="text-violet-400 text-sm">
          View timeline
        </button>
      </div>

      <div className="space-y-5">
        <div className="flex gap-4">
          <div className="w-3 h-3 rounded-full bg-red-500 mt-2" />

          <div>
            <p className="font-semibold">16:02 High Risk Detected</p>
            <p className="text-gray-400 text-sm">
              AI predicted outage possibility
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2" />

          <div>
            <p className="font-semibold">15:55 Memory Usage Spiked</p>
            <p className="text-gray-400 text-sm">
              RAM crossed 90%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}