const Card = () => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <div className='position-relative'>
        <img src='https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img-top' alt='' />
        <div className='position-absolute top-0 end-0 p-2'>
          <div className='bg-primary text-white rounded-3 p-2'>
            <span className='fw-bold'>+</span>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>Headphones</h5>
        <p className='card-text'>$700</p>
      </div>
    </div>
  )
}
export default Card
