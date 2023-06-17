import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './productdetail.scss'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside
      className={`${context.isProductDetailOpen ? 'd-flex' : 'visually-hidden'} product-detail  flex-column  position-fixed  border border-dark bg-light rounded-2`}
    >
      <div className='d-flex justify-content-between items-center p-5'>
        <h2 className='text-xl'>Detail<i className='bi bi-x-square-fill' /></h2>

        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' className='bi bi-x-circle' viewBox='0 0 16 16'>
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>

      </div>
      <figure>
        <img
          className=' w-75 rounded-2  '
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p>
        <span>  ${context.productToShow.price}  </span>
        <span>  ${context.productToShow.title}  </span>
        <span>  ${context.productToShow.description}  </span>
      </p>
    </aside>
  )
}
export default ProductDetail
