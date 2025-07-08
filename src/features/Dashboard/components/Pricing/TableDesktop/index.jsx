const headColumnColors = [
  'bg-oddHeaderColumn',
  'bg-evenHeaderColumn',
  'bg-oddHeaderColumn',
  'bg-evenHeaderColumn',
  'bg-oddHeaderColumn',
  'bg-evenHeaderColumn',
  'bg-oddHeaderColumn',
  'bg-evenHeaderColumn',
  'bg-oddHeaderColumn',
]

const bodyColumnColors = [
  'bg-oddBgBodyTable',
  'bg-evenBgBodyTable',
  'bg-oddBgBodyTable',
  'bg-evenBgBodyTable',
  'bg-oddBgBodyTable',
  'bg-evenBgBodyTable',
  'bg-oddBgBodyTable',
  'bg-evenBgBodyTable',
  'bg-oddBgBodyTable',
]

const columns = [
  { title: 'پلتفرم (PaaS)' },
  { title: 'رایگان' },
  { title: 'آغازین' },
  { title: 'اقتصادی' },
  { title: 'اقتصادی پلاس' },
  { title: 'استاندارد' },
  { title: 'استاندارد پلاس' },
  { title: 'حرفه‌ای' },
  { title: 'حرفه‌ای پلاس' },
]

const data = [
  ['قیمت ماهانه', 'رایگان', '25', '49', '89', '169', '329', '649', '1.289'],
  [
    'قیمت ساعتی',
    'رایگان',
    '۴۰.۲ تومان',
    '۶۸ تومان',
    '۱۲۳.۶ تومان',
    '۲۳۴.۷ تومان',
    '۴۵۶.۹ تومان',
    '۹۰۱.۳ تومان',
    '۱۷۹۰.۲ تومان',
  ],
  ['RAM', '128', '256', '512', '1', '2', '4', '8', '16'],
  ['CPU', '0.12', '0.25', '0.5', '1', '2', '4', '8', '16'],
  ['Disk', 'ندارد', '5', '10', '20', '40', '80', '160', '320'],
  ['فضای پشتیبان', 'ندارد', '25', '50', '100', '200', '400', '800', '1600'],
]

const getUnit = (rowIdx, colIdx) => {
  if (rowIdx === 5 && colIdx >= 2) return 'GB HDD'
  if (rowIdx === 4 && colIdx >= 2) return 'GB SSD'
  if (rowIdx === 3 && colIdx >= 1) return 'CORE'
  if (rowIdx === 2 && colIdx >= 1 && colIdx <= 3) return 'MB'
  if (rowIdx === 2 && colIdx > 3) return 'GB'
  return ''
}

const TableDesktop = () => {
  return (
    <div className="overflow-auto">
      <table className="min-w-full text-center border-separate border-spacing-0">
        <thead>
          <tr>
            {columns.map((col, i) => {
              const isFirst = i === 0
              const isLast = i === columns.length - 1
              return (
                <th
                  key={i}
                  className={`px-5 py-4 font-semibold text-white ${headColumnColors[i]} ${
                    isFirst ? 'rounded-tr-2xl' : isLast ? 'rounded-tl-2xl' : ''
                  }`}
                >
                  <div>{col.title}</div>
                  {isFirst && <div className="text-xs font-light">رایگان شروع کنید</div>}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIdx) => {
            const isLastRow = rowIdx === data.length - 1
            return (
              <tr key={rowIdx}>
                {row.map((cell, colIdx) => {
                  const isFirst = colIdx === 0
                  const isLast = colIdx === columns.length - 1
                  const unit = getUnit(rowIdx, colIdx)

                  const highlightPrice = rowIdx === 0 && colIdx > 1
                  const isSubtlePrice = rowIdx === 1 && colIdx > 0
                  const isFirstCol = colIdx === 0

                  return (
                    <td
                      key={colIdx}
                      className={`text-sm px-5 py-4 text-white ${bodyColumnColors[colIdx]} ${
                        isFirst && isLastRow
                          ? 'rounded-br-2xl'
                          : isLast && isLastRow
                            ? 'rounded-bl-2xl'
                            : ''
                      }`}
                    >
                      <div className={` ${isFirst ? 'text-start' : 'text-center'}`}>
                        {unit && (
                          <div className="inline-block text-[10px] font-semibold text-unit pl-[2px]">
                            {unit}
                          </div>
                        )}
                        <div
                          className={`${highlightPrice ? 'text-primary font-black' : ''} ${
                            isSubtlePrice ? 'text-darkgray font-medium' : ''
                          } ${isFirstCol ? 'text-xs ' : ''} inline-block`}
                        >
                          {cell}
                          {highlightPrice && <div className="font-medium text-sm">هزار تومان</div>}
                        </div>
                      </div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableDesktop
