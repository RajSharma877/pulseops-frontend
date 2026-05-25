export const chartData = [
  { time: '14:00', cpu: 40, memory: 20, latency: 10 },
  { time: '14:10', cpu: 60, memory: 25, latency: 15 },
  { time: '14:20', cpu: 45, memory: 35, latency: 20 },
  { time: '14:30', cpu: 55, memory: 28, latency: 32 },
  { time: '14:40', cpu: 58, memory: 40, latency: 22 },
  { time: '14:50', cpu: 78, memory: 62, latency: 35 },
]

export const alerts = [
  'High memory usage detected',
  'Database connection timeout',
  'API latency above threshold',
  'Deployment payment-service v2.4',
]

export const logs = [
  'ERROR Database connection timeout',
  'WARN Memory usage is 92%',
  'ERROR API response time 340ms',
  'INFO Deployment successful v2.4',
]