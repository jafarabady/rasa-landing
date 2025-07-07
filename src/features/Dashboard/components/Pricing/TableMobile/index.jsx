function TableMobile() {
  return (
    <div className="w-full grid grid-cols-2 gap-2 pt-14">
      <div className="flex flex-col bg-[#273140]">
        <div className="h-24 flex flex-col items-center justify-center text-center bg-[#2E3846] px-4 py-6">
          <div className="font-bold text-xl">پلتفرم (PaaS)</div>
          <div className="text-sm">رایگان شروع کنید</div>
        </div>
        <div className="px-4 py-4 ">قیمت ماهانه</div>
        <div className="px-4 py-4 ">قیمت ساعتی</div>
        <div className="px-4 py-4 ">RAM</div>
        <div className="px-4 py-4 ">CPU</div>
        <div className="px-4 py-4 ">Disk</div>
        <div className="px-4 py-4 ">فضای پشتیبان</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold h-24 flex items-center justify-center text-center bg-[#232f3d] px-4 py-4">
          رایگان
        </div>
        <div className="px-4 text-center py-4 text-primary text-lg font-bold">رایگان</div>
        <div className="px-4 text-center py-4 text-[#808592] font-bold">رایگان</div>
        <div className="flex items-center justify-center text-center px-4 py-4 gap-[2px]">
          <span className="text-[#808592] text-xs">MB</span>
          <span>128</span>
        </div>
        <div className="flex items-center justify-center text-center px-4 py-4 gap-[2px]">
          <span className="text-[#808592] text-xs">CORE</span>
          <span>0.12</span>
        </div>
        <div className="px-4 text-center py-4 font-bold">ندارد</div>
        <div className="px-4 text-center py-4 font-bold">ندارد</div>
      </div>
      <div className="flex flex-col bg-[#273140]">
        <div className="h-24 flex-col flex items-center justify-center text-center bg-[#2E3846] px-4 py-6">
          <div className="font-bold text-xl">پلتفرم (PaaS)</div>
          <div className="text-sm">رایگان شروع کنید</div>
        </div>
        <div className="px-4 py-4 ">قیمت ماهانه</div>
        <div className="px-4 py-4 ">قیمت ساعتی</div>
        <div className="px-4 py-4 ">RAM</div>
        <div className="px-4 py-4 ">CPU</div>
        <div className="px-4 py-4 ">Disk</div>
        <div className="px-4 py-4 ">فضای پشتیبان</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold h-24 flex  items-center justify-center text-center bg-[#232f3d] px-4 py-4">
          رایگان
        </div>
        <div className="text-center px-4 py-4 text-primary text-lg font-bold">رایگان</div>
        <div className="text-center px-4 py-4 text-[#808592] font-bold">رایگان</div>
        <div className="flex items-center justify-center text-center px-4 py-4 gap-[2px]">
          <span className="text-[#808592] text-xs">MB</span>
          <span>128</span>
        </div>
        <div className="flex items-center justify-center text-center px-4 py-4 gap-[2px]">
          <span className="text-[#808592] text-xs">CORE</span>
          <span>0.12</span>
        </div>
        <div className="text-center px-4 py-4 font-bold">ندارد</div>
        <div className="text-center px-4 py-4 font-bold">ندارد</div>
      </div>
    </div>
  )
}

export default TableMobile
