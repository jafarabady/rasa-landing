import React from 'react'

const columns = [
  {
    title: 'پلتفرم (PaaS)',
    subtitle: 'رایگان شروع کنید',
    values: [
      { value: 'رایگان', type: 'highlight' },
      { value: 'رایگان', type: 'normal' },
      { value: ['128', 'MB'], type: 'unit' },
      { value: ['0.12', 'CORE'], type: 'unit' },
      { value: 'ندارد', type: 'normal' },
      { value: 'ندارد', type: 'normal' },
    ],
  },
  {
    title: 'پلتفرم (PaaS)',
    subtitle: 'رایگان شروع کنید',
    values: [
      { value: 'رایگان', type: 'highlight' },
      { value: 'رایگان', type: 'normal' },
      { value: ['128', 'MB'], type: 'unit' },
      { value: ['0.12', 'CORE'], type: 'unit' },
      { value: 'ندارد', type: 'normal' },
      { value: 'ندارد', type: 'normal' },
    ],
  },
]

const labels = ['قیمت ماهانه', 'قیمت ساعتی', 'RAM', 'CPU', 'Disk', 'فضای پشتیبان']

const LabelColumn = () => (
  <div className="flex flex-col bg-oddBgBodyTable">
    <div className="h-24 flex flex-col items-center justify-center text-center bg-oddHeaderColumn px-4 py-6">
      <div className="font-bold text-xl">پلتفرم (PaaS)</div>
      <div className="text-sm">رایگان شروع کنید</div>
    </div>
    {labels.map((label, i) => (
      <div key={i} className="px-4 py-4">
        {label}
      </div>
    ))}
  </div>
)

const DataColumn = ({ data }) => (
  <div className="flex flex-col">
    <div className="text-xl font-bold h-24 flex items-center justify-center text-center bg-evenHeaderColumn px-4 py-4">
      {data.title === 'پلتفرم (PaaS)' ? 'رایگان' : data.title}
    </div>
    {data.values.map((item, i) => {
      if (item.type === 'unit') {
        return (
          <div key={i} className="flex items-center justify-center text-center px-4 py-4 gap-[2px]">
            <span className="text-darkgray text-xs">{item.value[1]}</span>
            <span>{item.value[0]}</span>
          </div>
        )
      }

      return (
        <div
          key={i}
          className={`text-center px-4 py-4 font-bold ${
            item.type === 'highlight' ? 'text-primary text-lg' : 'text-darkgray'
          }`}
        >
          {item.value}
        </div>
      )
    })}
  </div>
)

function TableMobile() {
  return (
    <div className="w-full grid grid-cols-2 gap-2 pt-14">
      {columns.map((col, index) => (
        <React.Fragment key={index}>
          <LabelColumn />
          <DataColumn data={col} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default TableMobile
