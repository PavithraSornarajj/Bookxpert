import React, {useEffect} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'

import logo1 from '../../assests/logo1.png'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
  const dispatch = useDispatch()
  var User= useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()

  const handleLogout= () => {
    dispatch({ type:"LOGOUT"});
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
},[dispatch])

  return (
    <nav>
      
      <div className='navbar'>
      <Link to='/' className='nav-item nav-logo'>
        <img src={ logo1 } alt='logo' width='150px'/>
       
      </Link>
     <Link to='/about' className='nav-item nav-btn'>About</Link>
     <Link to='/Blogs' className='nav-item nav-btn'>Blogs</Link>
     <Link to='/Services' className='nav-item nav-btn'>Services</Link>
      
     {User===null? 
     <Link to='/Auth' className='nav-item nav-links'>Log In</Link>:
     <>
     
     <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
     </>}
     </div>
     
    </nav>
  )
}

export default Navbar
