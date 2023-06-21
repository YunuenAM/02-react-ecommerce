import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home () {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>

      Home
      <div className='container text-center'>
        <div className='row gap-4 mx-md-auto m-2 '>
          {
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      }

        </div>
      </div>
      <ProductDetail />
    </Layout>
  )
}
export default Home
