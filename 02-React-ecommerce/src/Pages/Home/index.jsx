import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

const Home = () => {
  const [items, setItems] = useState(null)
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>

      Home
      <div className='container text-center'>
        <div className='row gap-4 mx-md-auto '>
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
