import { Button } from 'antd'
import { useRef } from 'react'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { downloadChartAsPDF } from '../../../utils/chart-downloader'

const lineData = [
  { name: 'شنبه', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'یکشنبه', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'دوشنبه', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'سه شنبه', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'چهارشنبه', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'پنجشنبه', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'جمعه', uv: 3490, pv: 4300, amt: 2100 },
]
export const CustomLineChart = () => {
  const chartRef = useRef(null)
  return (
    <div className="w-full">
       <Button className='mb-4'  onClick={() => downloadChartAsPDF(chartRef, { title: 'توزیع پست‌ها بر اساس کشورها' })}>دانلود PDF نمودار خطی</Button>
      <h2 style={{ textAlign: 'center' }}>تحلیل بازدید پست‌ها در روزهای هفته</h2>
      <div ref={chartRef} style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickMargin={32} tick={{ fontSize: 12, textAnchor: 'end', dx: -5 }} />

            <Tooltip
              contentStyle={{
                direction: 'rtl',
              }}
              formatter={(value) => [value, 'تعداد']}
              labelFormatter={(label) => `ماه: ${label}`}
            />
            <Legend
              wrapperStyle={{
                paddingTop: '20px',
              }}
              formatter={(value) => <span>{value}</span>}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              name="تعداد بازدید"
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" name="کاربران منحصر به فرد" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
