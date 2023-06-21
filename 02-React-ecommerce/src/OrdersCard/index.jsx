const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  let renderXMarkIcon

  return (
    <div className='d-flex justify-content-between item-center mb-3 border border-black '>

      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>

    </div>

  )
}
export default OrdersCard
