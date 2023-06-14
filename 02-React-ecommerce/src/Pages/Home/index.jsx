import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

const Home = () => {
  const [items, setItems] = useState(null)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>

      Home
      <div className='container text-center'>
        <div className='row gap-4 mx-md-auto m-2 '>
          {
        items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      }

        </div>
      </div>

    </Layout>
  )
}
export default Home
