import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)
  return (
    <div
      className='card mx-auto' style={{ width: '18rem' }} onClick={() => context.openProductDetail()}
    >
      <div className='position-relative'>
        <span className='fw-bold position-absolute bg-light rounded-5 m-2 p-1'>{data.data.category.category}</span>
        <img src={data.data.image} className='card-img-top' alt={data.data.title} />
        <div className='position-absolute top-0 end-0 p-2'>
          <div className='bg-pink text-white rounded-3 p-2'>
            <span
              className='fw-bold p-2 bg-pink' onClick={() => context.setCount(context.count + 1)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{data.data.title}</h5>
        <p className='card-text'>${data.data.price}</p>
      </div>
    </div>
  )
}
export default Card
