const OrderCard = props => {
  const { title, imageUrl, price } = props
  return (
    <div className='d-flex justify-content-between item-center mb-3'>
      <div className='d-flex align-items-center  gap-2'>
        <figure className=' w-25 h-75'>
          <img className=' w-100 h-100 rounded-2  object-fit-cover ' src={imageUrl} alt={title} />
        </figure>
        <p className=' text-sm'>{title}</p>
      </div>
      <div className='d-flex align-items-center  gap-2'>
        <p className=' text-xl-end  '>{price}</p>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' className='bi bi-x-circle  pe-auto ' viewBox='0 0 16 16 '>
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>
      </div>
    </div>
  )
}
export default OrderCard
