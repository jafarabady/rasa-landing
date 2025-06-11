import { Divider, Flex, Skeleton } from 'antd'

function CommentsCardSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="w-full bg-gray-200 h-[200px] min-h-[200px] p-4 rounded overflow-hidden">
          <div className="flex justify-end items-center gap-4 ">
            <span className="font-bold text-left truncate">
              <Skeleton.Input active size="small" />
            </span>

            <Skeleton.Avatar active shape="circle" />
          </div>
          <Divider />
          <div className="text-left text-black/80">
            <Flex vertical gap={8}>
              <Skeleton.Input active size="small" block />
              <Skeleton.Input active size="small" block />
              <Skeleton.Input active size="small" block />
            </Flex>
          </div>
        </div>
      ))}
    </>
  )
}

export default CommentsCardSkeleton
