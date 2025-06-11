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

const lineData = [
  { name: 'فروردین', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'اردیبهشت', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'خرداد', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'تیر', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'مرداد', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'شهریور', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'مهر', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'آبان', uv: 3000, pv: 4000, amt: 2600 },
  { name: 'آذر', uv: 1425, pv: 3548, amt: 2542 },
  { name: 'دی', uv: 3453, pv: 7288, amt: 4385 },
  { name: 'بهمن', uv: 2453, pv: 6763, amt: 1425 },
  { name: 'اسفند', uv: 3453, pv: 1457, amt: 3753 },
]
export const CustomLineChart = () => {
  return (
    <div className="w-full">
      <h2 style={{ textAlign: 'center' }}>تحلیل بازدید پست‌ها در سال 1404</h2>
      <div style={{ width: '100%', height: 400 }}>
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
