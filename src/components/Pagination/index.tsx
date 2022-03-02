import './styles.css'

interface Props {
  currentPage: number
  totalPages: number
  loading: boolean
  onPageChange: (page: number) => void
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  loading,
  onPageChange,
}) => {
  return (
    <>
      {!loading && (
        <section className='pagination'>
          {currentPage !== 1 && (
            <button
              type='button'
              className='pagination__item sides'
              onClick={() => onPageChange(currentPage - 1)}
            >
              &lt;
            </button>
          )}

          <button
            type='button'
            className={`pagination__item ${currentPage === 1 && 'active'}`}
            onClick={() => onPageChange(1)}
          >
            1
          </button>

          {currentPage > 3 && <div className='separator'>...</div>}

          {currentPage === totalPages && totalPages > 3 && (
            <button
              type='button'
              className='pagination__item'
              onClick={() => onPageChange(totalPages - 2)}
            >
              {totalPages - 2}
            </button>
          )}

          {currentPage > 2 && (
            <button
              type='button'
              className='pagination__item'
              onClick={() => onPageChange(currentPage - 1)}
            >
              {currentPage - 1}
            </button>
          )}

          {currentPage !== 1 && currentPage !== totalPages && (
            <button
              type='button'
              className='pagination__item active'
              onClick={() => onPageChange(currentPage)}
            >
              {currentPage}
            </button>
          )}

          {currentPage < totalPages - 1 && (
            <button
              type='button'
              className='pagination__item'
              onClick={() => onPageChange(currentPage + 1)}
            >
              {currentPage + 1}
            </button>
          )}

          {currentPage === 1 && totalPages > 3 && (
            <button
              type='button'
              className='pagination__item'
              onClick={() => onPageChange(currentPage + 2)}
            >
              {currentPage + 2}
            </button>
          )}

          {currentPage < totalPages - 2 && <div className='separator'>...</div>}

          <button
            type='button'
            className={`pagination__item ${
              currentPage === totalPages && 'active'
            }`}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>

          {currentPage !== totalPages && (
            <button
              type='button'
              className='pagination__item sides'
              onClick={() => onPageChange(currentPage + 1)}
            >
              &gt;
            </button>
          )}
        </section>
      )}
    </>
  )
}
