import { NavLink } from 'react-router-dom'
import jolitifyLogo from '@/img/Jolitify.jpg'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = {
    textDecoration: 'underline'
  }

  return (
    <nav className='d-flex justify-content-between items-center  top-0 z-10 w-full py-2 px-8 text-md'>
      <ul className='d-flex items-center  list-unstyled list-inline text-black   gap-3'>
        <li>
          <NavLink
            to='/' className='text-decoration-none text-black'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >
            <img className='m-4 d-flex justify-content-center ' src={jolitifyLogo} alt='Logo' style={{ maxWidth: '100px' }} />
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className='text-decoration-none text-black'>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' className='text-decoration-none text-black'>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className='text-decoration-none text-black'>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures' className='text-decoration-none text-black'>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/books' className='text-decoration-none text-black'>
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' className='text-decoration-none text-black'>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='d-flex items-center list-unstyled list inline text-decoration-none gap-3'>
        <li>
          <NavLink to='/my-orders' className='text-decoration-none text-black'>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className='text-decoration-none text-black'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className='text-decoration-none text-black'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/signIn' className='text-decoration-none text-black'>
            SignIn
          </NavLink>
        </li>
        <li>
          🛒{context.count}
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
