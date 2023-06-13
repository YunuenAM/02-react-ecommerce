const Card = () => {
  return (
    <div className='bg-light w-56 h-60' role='button'>
      <figure className='position-relative mb-2' style='width:100% hight:75%'>
        <span className='position-absolute'>Electronics</span>
        <img src='' alt='headphones' />
        <div
          className='position-absolute sticky-sm-top d-flex justify-content-center items-center bg-light rounded-circle'
          style='width: 100% hight:75%'
        >+
        </div>
      </figure>
      <p>
        <span>Headphones</span>
        <span>$300</span>
      </p>
    </div>
  )
}
export default Card
