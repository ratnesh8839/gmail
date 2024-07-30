
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Inbox from './components/inbox'
import Mail from './components/mail'
import Navbar from './components/shared/navbar'
import SendMail from './components/SendMail'
import Login from './components/login'
import { useSelector } from 'react-redux'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <Inbox />
        },
        {
          path: '/mail/:id',
          element: <Mail />
        }
      ]
    }
  ]
)
function App() {
  // const user = true;
  const {user}=useSelector(store=>store.appSlice);
  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
      {
        !user ? (<Login />) : <>
          <Navbar />
          <RouterProvider router={router} />
          <div className='absolute w-[30%] bottom-0 right-20 z-20'>
            <SendMail />
          </div>
        </>
      }

    </div>
  )
}

export default App
