import { Bell, Search, HelpCircle } from 'lucide-react'

export default function Topbar() {
  return (
    <div className="flex items-center justify-between mb-6">
      {/* Search Input Container */}
      <div className="relative w-[400px]">
        <Search
          className="absolute left-3.5 top-[12px] text-gray-400"
          size={20}
          strokeWidth={1.5}
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-[#161A23] text-[#F8FAFC] placeholder:text-[#64748B] rounded-xl h-11 pl-11 pr-12 outline-none border border-white/5 focus:border-white/10 transition-colors text-sm"
        />

        <div className="absolute right-3.5 top-[10px] flex items-center justify-center bg-white/5 border border-white/10 rounded px-1.5 py-0.5 h-6 text-[10px] text-gray-400 font-mono select-none">
          ⌘K
        </div>
      </div>

      {/* Right Icons Area */}
      <div className="flex items-center gap-4">
        {/* Bell Notification Icon with Badge */}
        <button className="relative p-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors rounded-xl hover:bg-white/5 cursor-pointer">
          <Bell size={20} strokeWidth={1.5} />
          <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#EF4444] text-[9px] font-bold text-white ring-2 ring-[#0F1117]">
            3
          </span>
        </button>

        {/* Help Icon */}
        <button className="p-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors rounded-xl hover:bg-white/5 cursor-pointer">
          <HelpCircle size={20} strokeWidth={1.5} />
        </button>

        {/* User Profile Avatar */}
        <div className="w-10 h-10 rounded-full bg-[#1F2937] border border-white/5 flex items-center justify-center font-medium text-[#F8FAFC] hover:bg-white/10 transition-colors cursor-pointer select-none">
          D
        </div>
      </div>
    </div>
  )
}