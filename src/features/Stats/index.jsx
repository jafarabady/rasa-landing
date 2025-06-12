import { Card } from 'antd'
import { CustomLineChart } from './LineChart'
import { CustomPieChart } from './PieChart'
import PageMetadata from '../../components/PageMetadata'

function StatsPage() {
  return (
    <>
     <PageMetadata
        title="گزارشات | پروژه"
        description="گزارشات پست "
        keywords="پروژه, برنامه نویسی, گزارشات"
      />
    <Card>
      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        <CustomPieChart />
        <CustomLineChart />
      </div>
    </Card>
    </>

  )
}

export default StatsPage
