import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { IconButton, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
  backgroundPosition: 'center',
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1621334119886-cbc9e36fcf7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1569388330338-53ecda03dfa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1549048799-bf3b582ee17b?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const properties = {
  prevArrow: <IconButton><ArrowBackIosOutlinedIcon color='white' sx={{ml: '8px'}}/></IconButton>,
  nextArrow: <IconButton><ArrowForwardIosOutlinedIcon color='white' sx={{mr: '8px'}}/></IconButton>,
}

const LandingPageContent = () => {

  return (
    <div className="slide-container">
      <Slide {...properties} duration={3000}>
        {slideImages.map((slideImage, index)=> (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`}}>
              {/* <span>Hii</span> */}
            </div>
          </div>
        ))} 
      </Slide>
      <div className='px-4 py-4 flex justify-center'>
        <p className=' text-reddish font-elegant font-bold text-xl'>
          Jewelry is a way of keeping memories alive.
        </p>
      </div>
      <div className='flex items-center pt-32 pb-4 pl-4'>
        <div className='min-w-80'>
          <img src="GroupPicture.png" alt="" />
        </div>
        <div className='w-6/12 mx-auto'>
          <p className='font-elegant text-5xl font-semibold '>
            Explore The Beauty Of
          </p>
          <p className='font-elegant text-5xl font-semibold text-reddish mt-2'>
            Achariya Alanka
          </p>
          <div className='my-12'>
            <p className='text-serif text-gray.dark'>
            Indulge in the exquisite allure of Achariya Alanka's jewelry collection. Discover a world where craftsmanship meets elegance, where each piece tells a story of timeless beauty. From dazzling diamonds to lustrous pearls, immerse yourself in a realm of sophistication and style. Explore the artistry of Achariya Alanka and adorn yourself with the epitome of luxury.
            </p>
          </div>
          <Button variant="text" color="reddish">
            <p className='capitalize font-elegant text-lg font-bold'>
              Explore All
            </p>
            <EastIcon sx={{fontSize: '18px', ml: '6px'}}/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContent;