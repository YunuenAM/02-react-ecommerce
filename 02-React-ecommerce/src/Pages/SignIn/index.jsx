import Layout from '../../Components/Layout'
import logo from '@/img/logo.jpg'
import '@/styles/form.css'

const SignIn = () => {
  return (
    <Layout>
      <main className='form-signin w-100 m-auto'>
        <form>
          <img className='mb-4  align-items-center ' src={logo} alt='' width='200' height='200' />
          <h1 className='h3 mb-3 fw-normal '>Please sign in</h1>

          <div className='form-floating'>
            <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
            <label htmlFor='floatingInput'>Email address</label>
          </div>
          <div className='form-floating'>
            <input type='password' className='form-control' id='floatingPassword' placeholder='Password' />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <button className='btn btn-pink w-100 py-2' type='submit'>Sign in</button>
          <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
        </form>
      </main>
    </Layout>
  )
}
export default SignIn
