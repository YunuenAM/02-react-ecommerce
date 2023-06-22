import logo from '@/img/logo.jpg'
import '@/styles/form.css'
import Layout from '../../Components/Layout'

const SignUp = () => {
  return (
    <Layout>
      <main className='form-signin w-100 m-auto'>
        <form>
          <img className='mb-4  align-items-center ' src={logo} alt='' width='200' height='200' />
          <h1 className='h3 mb-3 fw-normal '>Please sign up</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='first_name'
              placeholder='John'
              value=''
              onChange={() => {}}
            />
            <label htmlFor='first_name'>First Name</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='last_name'
              placeholder='Doe'
              value=''
              onChange={() => {}}
            />
            <label htmlFor='last_name'>Password</label>
          </div>

          <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
              value=''
              onChange={() => {}}
            >
              <option value=''>Choose...</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
              <option value='NB'>Non-binary</option>
            </select>
            <label htmlFor='gender'>Gender</label>
          </div>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value=''
              onChange={() => {}}
              placeholder='name@example.com'
            />
            <label htmlFor='email'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value=''
              onChange={() => {}}
              placeholder='Password'
            />
            <label htmlFor='password'>Password</label>
          </div>

          <button className='btn btn-pink w-100 py-2' type='submit'>Sign up</button>
          <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
        </form>
      </main>
    </Layout>
  )
}
export default SignUp
