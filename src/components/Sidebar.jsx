import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links} from '../data/dummy'
import Logo from '../data/AfLink.png'

const Sidebar = () => {
  const activeMenu =true;
  const activeLink =' flex items-center gap-3 pl-4 pt-3 pb-3 rounded-lg  text-black text-md m-2 bg-gray-200'
  const normalLink =' flex items-center gap-3 pl-4 pt-3 pb-3 rounded-lg  text-md text-gray-500 dark:text-gray-400  hover:text-white hover:bg-red-500 dark:hover:bg-gray-600 m-2';
  return (
    <div className='ml-3 h-screen md:overflow-hidden 
    overflow-auto md:hover:overflow-auto pb-10'
    >
      {activeMenu &&(<><div className='flex flex-col justify-between items-center'>
     <Link to="/" onClick={()=>{}} className=' items-center gap-' >
        <img src={Logo} alt="logo" className='w-40 h-40'/> 
      </Link>
      <TooltipComponent content='Menu' position='BottomCenter'>
        <button type='button' onClick={()=>{}} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
          <MdOutlineCancel/>
        </button>
      </TooltipComponent>
      <div className='mt-2 '>
        {links.map((items)=>(
          <div key={items.title}>
            <p className='text-gray-400 m-3 mt-4 uppercase'>{items.title}</p>
            {items.links.map((link)=>(
              <NavLink key={link.name} to={`/${link.name.replace(/ /g,'')}`} onClick={()=>{}}
              className={({isActive})=> isActive ? activeLink:normalLink } >
                {link.icon}
                <span className='capitalize'>{link.name}</span>
              </NavLink>
            ))}
             </div>
        )
          
        )}

      </div>
      </div>
      </>)}
      
    </div>
  )
}

export default Sidebar