import React  from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css'
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Customers from './pages/Customer'
import JobCardCreation from './pages/Jobcard'
import Navbar from "./components/Navbar"
const App = () => {
  const activeMenu = true;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className='fixed right-4 bottom-4 z-50'>
          <TooltipComponent content="Setting" postion="Top">
        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl 
         hover:bg-light-gray text-white ' style={{background:"black",borderRadius:"50%",}}>
          <FiSettings/>
        </button>
          </TooltipComponent> 
          </div>
            {activeMenu? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar/>
                </div>
            ) 

          : (
            <div className='w-0  dark:bg-secondary-dark-bg'>
              <Sidebar/>
              </div>
          ) }
          <div className={`dark:bg-main-big bg-main-bg min-h-screen w-full ${activeMenu?'md:ml-72':'flex-2'} `} >
           <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
             <Navbar/>
            </div>
         
          <div>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/Customers' element={<Customers/>}/>
              <Route path='/JobCardCreation' element={<JobCardCreation/>}/>
            </Routes>
          </div>
          </div>
      </div>  
    </BrowserRouter>
  )
}

export default App