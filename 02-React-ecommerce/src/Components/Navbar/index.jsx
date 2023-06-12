import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline'
  }

  return (
    <nav className='d-flex justify-content-between items-center fixed-top z-10 w-full py-5 px-8 text-md'>
      <ul className='d-flex items-center text-decoration-none list-unstyled list-inline  gap-3'>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >
            Jolietify
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes'>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics'>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures'>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/books'>
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to='/others'>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='d-flex items-center list-unstyled list inline text-decoration-none gap-3'>
        <li>
          <NavLink to='/my-orders'>
            Created by Yunuen AM
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/signIn'>
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
