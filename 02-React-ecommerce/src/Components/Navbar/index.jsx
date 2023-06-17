import { NavLink } from 'react-router-dom'
import logo from '@/img/logo.jpg'
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
            <img className=' d-flex justify-content-center  rounded-3 p-1  ' src={logo} alt='Logo' style={{ maxWidth: '50px' }} />
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
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-cart' viewBox='0 0 16 16'>
            <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
          </svg>{context.count}
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
