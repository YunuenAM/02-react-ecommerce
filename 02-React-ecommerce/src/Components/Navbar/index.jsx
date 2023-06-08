import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>
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
      <ul>
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
