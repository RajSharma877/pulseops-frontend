import {
  LayoutDashboard,
  AlertTriangle,
  Brain,
  Bell,
  Server,
  Activity,
  FileText,
  Clock,
  Plug,
  Settings,
} from 'lucide-react'

const items = [
  { icon: LayoutDashboard, label: 'Overview' },
  { icon: AlertTriangle, label: 'Incidents' },
  { icon: Brain, label: 'AI Analysis' },
  { icon: Bell, label: 'Alerts' },
  { icon: Server, label: 'Services' },
  { icon: Activity, label: 'Metrics' },
  { icon: FileText, label: 'Logs' },
  { icon: Clock, label: 'Timeline' },
  { icon: Plug, label: 'Integrations' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <div className="w-[240px] bg-[#161A23] border-r border-white/5 h-screen p-4">
      <div className="text-2xl font-bold mb-10 text-violet-500">
        PulseOps
      </div>

      <div className="space-y-2">
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                index === 0
                  ? 'bg-violet-600/20 text-violet-400'
                  : 'hover:bg-white/5 text-gray-400'
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}