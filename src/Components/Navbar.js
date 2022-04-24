import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';


function Navbar() {
    const [click,setclick]=useState(false);
    const handleClick = () => setclick(!click);
    const closeMobileMenu = () => setclick (false);

  return (
    <>
       <nav className='navbar'>
          <div className='navbar-container'>
           <Link to='\' className='navbar-logo'>
               travl
           </Link>
           
           <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'fas fa-times':'fas fa-bars'}/>
           </div>
           
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='menu-item'>
                   <Link to='/' className="nav-Links" onClick={closeMobileMenu}>
                       Home
                   </Link>
               </li>

               <li className='menu-item'>
                   <Link to='/Services' className="nav-Links" onClick={closeMobileMenu}>
                       Services
                   </Link>
               </li>

               <li className='menu-item'>
                   <Link to='/Products' className="nav-Links" onClick={closeMobileMenu}>
                       Products
                   </Link>
               </li>

               <li className='menu-item'>
                   <Link to='/Sign-up' className="nav-Links-mobile" onClick={closeMobileMenu}>
                        Sign-up
                   </Link>
               </li>
           </ul>
            
            {Button && <Button buttonStyle="btn--outline" >SignUp</Button>}

          </div>

       </nav>



    </>
  )
}

export default Navbar
