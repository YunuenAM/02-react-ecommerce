const Card = (data) => {
  return (
    <div className='card mx-auto' style={{ width: '18rem' }}>
      <div className='position-relative'>
        <span className='fw-bold position-absolute bg-light rounded-5 m-2 p-1'>{data.data.category.name}</span>
        <img src={data.data.images[0]} className='card-img-top' alt={data.data.title} />
        <div className='position-absolute top-0 end-0 p-2'>
          <div className='bg-primary text-white rounded-3 p-2'>
            <span className='fw-bold p-2'>+</span>
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
