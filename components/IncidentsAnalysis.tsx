'use client'

import { useEffect, useState } from 'react'
import API from '@/lib/api'

export default function IncidentAnalysis() {
  const [analysis, setAnalysis] = useState('Loading AI analysis...')
  const [loading, setLoading] = useState(true)

  const logs = `
ERROR Database connection timeout
WARN Memory usage is 92%
ERROR API response time 340ms
INFO Deployment successful v2.4
`

  useEffect(() => {
    analyzeLogs()
  }, [])

  const analyzeLogs = async () => {
    try {
      const response = await API.post('/analyze', {
        logs,
      })

      setAnalysis(response.data.analysis)
    } catch (error) {
      setAnalysis('Failed to analyze logs')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#161A23] rounded-2xl border border-white/5 p-6 h-full shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          AI Incident Analysis
        </h2>

        <div className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-lg text-sm">
          AI Powered
        </div>
      </div>

      <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-xl inline-block mb-6">
        High Risk Incident Detected
      </div>

      {loading ? (
        <div className="text-gray-400">
          Analyzing logs with AI...
        </div>
      ) : (
        <div className="whitespace-pre-wrap text-gray-300 leading-8">
          {analysis}
        </div>
      )}
    </div>
  )
}