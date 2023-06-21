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
      <div className=' mb-4'>

        <h1 className=' text-xxl-center '> Premium Products</h1>
      </div>

      <input
        type='text'
        placeholder='Search a product'
        className='form-control text-center    rounded-3  border border-black w-100    align-items-center   p-3  mb-3  focus-ring-success  '
      />

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
