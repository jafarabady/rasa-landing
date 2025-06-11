import { Divider } from 'antd'
import { UserOutlined } from '@ant-design/icons'

function CommentsCard({ name, body }) {
  return (
    <>
      <div className="w-full bg-gray-100 h-[200px] min-h-[200px] p-4 rounded overflow-y-scroll">
        <div className="flex justify-end items-start gap-4 ">
          <span className="font-bold text-left truncate">{name}</span>

          <div className="rounded-full border border-black w-4 h-4 flex items-center justify-center p-3">
            <UserOutlined />
          </div>
        </div>
        <Divider />
        <div className="text-left text-black/80">{body}</div>
      </div>
    </>
  )
}

export default CommentsCard
