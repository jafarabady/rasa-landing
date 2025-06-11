import { Card, Flex } from 'antd'
import { CustomLineChart } from './LineChart'
import { CustomPieChart } from './PieChart'

function StatsPage() {
  return (
    <Card>
      <Flex className="flex-col lg:flex-row" gap={24} justify="space-between">
        <CustomPieChart />
        <CustomLineChart />
      </Flex>
    </Card>
  )
}

export default StatsPage
