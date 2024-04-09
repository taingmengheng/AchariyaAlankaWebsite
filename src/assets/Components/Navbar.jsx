import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
      <div className={`sticky z-50 ${visible ? 'top-0' : ''}`}>
        <div id='sticky' className=' bg-white flex justify-between items-center px-4'>
          <div className='w-44 py-4'>
            <img src="/OurLogoLetters(1).png" alt="AchariyaAlanakaLogo" />
          </div>

          <div className='flex items-center bg-white'>
            <SubNavbarItem title="New & Featured"/>
            <SubNavbarItem title="Rings"/>
            <SubNavbarItem title="Charms & Bracelets"/>
            <SubNavbarItem title="Necklaces"/>
            <SubNavbarItem title="Earings"/>
            <SubNavbarItem title="All Items"/>
          </div>

          <div className='flex items-center'>
            <div className='flex items-center w-56 justify-between py-1.5 px-4 border-2 border-border rounded-sm mr-2 hover:shadow-md hover:shadow-reddish/40 hover:border-reddish'>
              <input type="text" className='myCustomInput' placeholder='Search'/>
              <SearchIcon fontSize='small' sx={{color: 'gray.dark',}}/>
            </div>
            <IconButton aria-label="wishlist-button">
              <FavoriteBorderOutlinedIcon 
              sx={{
                color: 'gray.main',
                '&:hover': {
                  color: 'reddish.main'
                }}}/>
            </IconButton>
            <IconButton aria-label="bag-button">
              <ShoppingBagOutlinedIcon 
              sx={{
                color: 'gray.main',
                '&:hover': {
                  color: 'reddish.main'
                }}}
              />
            </IconButton>
            <IconButton aria-label="login-button">
              <PersonOutlineOutlinedIcon 
              sx={{
                color: 'gray.main',
                '&:hover': {
                  color: 'reddish.main'
                }}}
              />
            </IconButton>
          </div>
        </div>
      </div>
  )
}

export default Navbar;

const SubNavbarItem = ({title}) => {
  return(
    // <div className='flex items-center pt-3 pb-3.5 cursor-pointer'>
    //   <p className='text-sm font-serif hover:text-reddish hover:font-semibold'>
    //     {title} 
    //   </p>
    //   <KeyboardArrowDownOutlinedIcon fontSize='small' sx={{color: 'reddish.main'}}/>
    // </div>
    <div className='flex items-center pt-3 pb-3.5 px-3 cursor-pointer hover:border-b-2 border-reddish '>
      <p className='text-sm font-serif font-semibold'>
        {title} 
      </p>
      {/* <KeyboardArrowDownOutlinedIcon fontSize='small' sx={{color: 'reddish.main'}}/> */}
    </div>
  )
}
