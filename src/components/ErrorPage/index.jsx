import { Button } from 'antd'

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center w-1/2 mx-auto px-4 my-4 py-4 bg-blue-200">
      <h1 className="text-red-600 font-bold text-2xl">خطا!</h1>
      <p className=" text-black/60">متاسفانه مشکلی در بارگذاری صفحه پیش آمده است.</p>
      <div>
        <Button variant="outlined" color="primary" onClick={() => window.location.reload()}>
          تلاش مجدد
        </Button>
      </div>
    </div>
  )
}
