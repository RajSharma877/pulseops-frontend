interface Props {
  title: string
  value: string
  increase: string
}

export default function StatsCard({
  title,
  value,
  increase,
}: Props) {
  return (
    <div className="bg-[#161A23] rounded-2xl p-5 border border-white/5">
      <p className="text-gray-400 text-sm">{title}</p>

      <h2 className="text-4xl font-bold mt-3">{value}</h2>

      <p className="text-violet-400 text-sm mt-2">
        ↑ {increase} vs last hour
      </p>
    </div>
  )
}