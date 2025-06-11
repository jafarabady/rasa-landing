import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const pieData = [
  { name: 'اینستاگرام', value: 27 },
  { name: 'تلگرام', value: 25 },
  { name: 'واتساپ', value: 18 },
  { name: 'لینکدین', value: 15 },
  { name: 'فیسبوک', value: 10 },
  { name: 'یوتیوب', value: 5 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FD0', '#FF6666']

export const CustomPieChart = () => {
  return (
    <div className="w-full">
      <h2 style={{ textAlign: 'center' }}>توزیع پست‌ها بر اساس پلتفرم</h2>
      <div style={{ width: '100%', height: 350 }}>
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
