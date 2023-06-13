const Card = () => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src='https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img-top' alt='' />
      <div className='card-body'>
        <h5 className='card-title'>Headphones</h5>
        <p className='card-text'>$700</p>
      </div>
    </div>
  )
}
export default Card
