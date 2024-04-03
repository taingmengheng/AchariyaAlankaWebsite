import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Navbar = () => {

  return (
      <div className='sticky top-0 z-50'>
        <div id='sticky' className=' bg-white flex justify-between items-center py-2 px-4 border-b border-border'>
          <div className='w-44'>
            <img src="/OurLogoLetters(1).png" alt="AchariyaAlanakaLogo" />
          </div>
          <div className='flex items-center'>
            <div className='flex items-center w-64 justify-between border-2 border-border py-1.5 px-4 rounded-sm mr-2 hover:shadow-md hover:shadow-reddish/40 hover:border-reddish'>
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
        <div className='flex items-center gap-6 pl-4 bg-white'>
          <SubNavbarItem title="New Arrivals"/>
          <SubNavbarItem title="Best Seller"/>
          <SubNavbarItem title="Trending Items"/>
          <SubNavbarItem title="Rings"/>
          <SubNavbarItem title="Charms & Bracelets"/>
          <SubNavbarItem title="Necklaces"/>
          <SubNavbarItem title="Earings"/>
          <SubNavbarItem title="Collections"/>
          <SubNavbarItem title="All Items"/>
        </div>
      </div>
  )
}

export default Navbar;

const SubNavbarItem = ({title}) => {
  return(
    <div className='flex items-center pt-3 pb-3.5 cursor-pointer'>
      <p className='text-sm font-serif hover:text-reddish hover:font-semibold'>
        {title} 
      </p>
      <KeyboardArrowDownOutlinedIcon fontSize='small' sx={{color: 'reddish.main'}}/>
    </div>
  )
}
