import { useNavigate } from 'react-router-dom'
import i from "../assets/4.svg"
const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <section className='bg-white '>
      
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
          <p className='p-3 text-sm font-medium text-primary rounded-full bg-secondary bg-opacity-30 '>
          <img src={i} alt="" />
          
          </p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
            Something Went Wrong!
          </h1>
        

          <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
            <button
              onClick={() => navigate(-1 || '/')}
              className='flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100 '
            >
             

              <span>Go back</span>
            </button>

            <button onClick={() => navigate('/')}>Take Me Home</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
