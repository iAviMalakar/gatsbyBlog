import * as React from "react"
import { Link } from "gatsby"
import {menu} from '../data/Menu'
import './Header.css'



const Header = () => {
  return(
    <div className='Nav'>
      <Link to="/" className='NavLink'>WANDERLUST</Link>
      <div className='NavMenu'>
        {menu.map((item, index)=>(
          <Link className='NavLink' to={item.link} key={index}>
            {item.title}
          </Link>
          
        ))}
      </div>
    </div>
  )
}


export default Header



