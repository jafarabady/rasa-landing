import { Button } from 'antd'
import { useEffect, useRef } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { downloadChartAsPDF } from '../../../utils/chart-downloader'

const pieData = [
  { name: 'ایران', value: 27 },
  { name: 'ترکیه', value: 25 },
  { name: 'روسیه', value: 18 },
  { name: 'آلمان', value: 15 },
  { name: 'امارات', value: 10 },
  { name: 'آمریکا', value: 5 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FD0', '#FF6666']

export const CustomPieChart = () => {
  const chartRef = useRef(null)

  return (
    <div className="w-full">
      <Button className='mb-4' onClick={() => downloadChartAsPDF(chartRef, { title: 'توزیع پست‌ها بر اساس کشورها' })}>دانلود PDF نمودار دایره ای</Button>
      <h2 style={{ textAlign: 'center' }}>توزیع پست‌ها بر اساس کشورها</h2>
      <div ref={chartRef} style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent, cx, cy, midAngle, innerRadius, outerRadius }) => {
                const RADIAN = Math.PI / 180
                const radius = innerRadius + (outerRadius - innerRadius) / 2
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#fff"
                    textAnchor="middle"
                    dominantBaseline="central"
                    style={{ fontSize: 12 }}
                  >
                    {(percent * 100).toFixed(0)}%
                  </text>
                )
              }}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Legend
              wrapperStyle={{
                paddingTop: '60px',
              }}
              formatter={(value) => <span>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
