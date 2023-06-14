import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline'
  }

  return (
    <nav className='d-flex justify-content-between items-center  top-0 z-10 w-full py-5 px-8 text-md'>
      <ul className='d-flex items-center  list-unstyled list-inline text-black  gap-3'>
        <li>
          <NavLink
            to='/' className='text-decoration-none text-black'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >
            Jolitify
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
          🛒0
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
