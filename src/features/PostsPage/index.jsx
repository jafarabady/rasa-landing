import { useEffect, useRef, useState, useCallback } from 'react'
import PageMetadata from '../../components/PageMetadata'
import DataGrid from '../../components/DataGrid'
import { getPostColumns } from './PostColumn'
import usePostStore from '../../store/postStore'
import CommentsModal from './CommentsModal'
import { DeleteModal } from './DeleteModal'
import EditModal from './EditModal'

const MODAL_TYPES = {
  COMMENTS: 'comments',
  EDIT: 'edit',
  DELETE: 'delete',
}

function PostsPage() {
  const [modalState, setModalState] = useState({ type: null, data: null })
  const searchInputRef = useRef(null)
  const { posts, loading, getPosts, getPostsComments } = usePostStore()

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    if (modalState.type === MODAL_TYPES.COMMENTS && modalState.data?.id) {
      getPostsComments(modalState.data.id)
    }
  }, [modalState])

  const onAction = useCallback((type, row) => {
    setModalState({ type, data: row })
  }, [])

  const handleCloseModal = useCallback(() => {
    setModalState({ type: null, data: null })
  }, [])

  const columns = getPostColumns({ searchInputRef, onAction })

  return (
    <>
      <PageMetadata
        title="صفحه پست | پروژه"
        description="صفحه لیست پست‌های پروژه"
        keywords="پست, برنامه نویسی"
      />

      <DataGrid
        exportable
        rowKey={(item) => item.id}
        selectRow
        pagination
        isLoading={loading}
        dataSource={posts}
        columns={columns}
      />

      <CommentsModal open={modalState.type === MODAL_TYPES.COMMENTS} onClose={handleCloseModal} />

      <DeleteModal
        postId={modalState.type === MODAL_TYPES.DELETE ? modalState.data?.id : null}
        open={modalState.type === MODAL_TYPES.DELETE}
        onClose={handleCloseModal}
      />

      <EditModal
        initialData={modalState.type === MODAL_TYPES.EDIT ? modalState.data : {}}
        open={modalState.type === MODAL_TYPES.EDIT}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default PostsPage
