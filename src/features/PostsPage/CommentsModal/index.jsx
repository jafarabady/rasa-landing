import { Modal } from 'antd'
import CommentsCard from './CommentsCard'
import CommentsCardSkeleton from './CommentsCardSkeleton'
import usePostStore from '../../../store/postStore'

function CommentsModal({ open = false, onClose = () => {} }) {
  const { comments, commentsLoading } = usePostStore()

  return (
    <Modal
      open={open}
      onCancel={onClose}
      title="لیست نظرات"
      style={{ top: 20 }}
      width={900}
      footer={null}
    >
      <div className="flex flex-wrap justify-center gap-4 pt-4 overflow-y-scroll h-[800px]">
        {commentsLoading ? (
          <CommentsCardSkeleton />
        ) : (
          comments &&
          comments.map((comment) => <CommentsCard name={comment.name} body={comment.body} />)
        )}
      </div>
    </Modal>
  )
}

export default CommentsModal
