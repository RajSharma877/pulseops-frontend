import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import StatsCard from '@/components/StatsCard'
import IncidentAnalysis from '@/components/IncidentsAnalysis'
import SystemOverview from '@/components/SystemOverview'
import RecentAlerts from '@/components/RecentAlerts'
import LogsPanel from '@/components/LogsPanel'
import Timeline from '@/components/Timeline'

export default function Home() {
  return (
    <div className="flex bg-[#0F1117] h-screen text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <Topbar />

        <div className="grid grid-cols-4 gap-6 mb-6">
          <StatsCard
            title="CPU Usage"
            value="72%"
            increase="12%"
          />

          <StatsCard
            title="Memory Usage"
            value="82%"
            increase="18%"
          />

          <StatsCard
            title="API Latency"
            value="340ms"
            increase="210ms"
          />

          <StatsCard
            title="Risk Score"
            value="82%"
            increase="High Risk"
          />
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <IncidentAnalysis />
          </div>

          <SystemOverview />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <Timeline />

          <RecentAlerts />

          <LogsPanel />
        </div>
      </div>
    </div>
  )
}