import PageMetadata from '../../components/PageMetadata'
import MonitorSlider from './MonitorSlider'

function Dashboard() {
  return (
    <>
      <PageMetadata
        title="صفحه اصلی | پروژه"
        description="صفحه اصلی پروژه="
        keywords="پروژه, برنامه نویسی"
      />
      <MonitorSlider />
    </>
  )
}

export default Dashboard
