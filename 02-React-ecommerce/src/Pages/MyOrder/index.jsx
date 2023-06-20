import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
const MyOrder = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      MyOrder
      <div className='d flex-column w-50 '>
        {
        context.order?.slice(-1)[0].products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}

          />
        ))
      }
      </div>
    </Layout>
  )
}
export default MyOrder
