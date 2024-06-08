import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <div className='bg-[#F7E6EB] pb-6 pt-12'>
    <div className='flex items-start gap-32 justify-center'>
      <div className='flex flex-col gap-12'>
        <div className='flex items-center justify-center gap-8'>
          <div className='w-96'>
            <p className='font-semibold text-reddish'>
              Get the Latest From <span className=''>Achariya Alanka</span>
            </p>
            <p className='text-sm'>
              Be the first to hear about new arrivals, promotions, style inspiration and exclusive sneak peeks.
            </p>
          </div>
          <div className='flex items-center justify-center hover:shadow-md hover:shadow-black/40'>
            <div className='flex items-center w-64 justify-between py-1.5 px-4  bg-white border-2 border-reddish'>
              <input type="text" className='myCustomInput' placeholder='Enter email address'/>
            </div>
            <div className='bg-reddish flex items-center px-4 py-1.5 cursor-pointer border-2 border-reddish'>
              <p className='text-sm text-white'>
                Sign up
              </p>
            </div>
          </div>
        </div>

        {/* <div className='flex  gap-4'> */}
          <div className='flex gap-4'>
            <InstagramIcon fontSize='medium' sx={{color: 'black.main'}}/>
            <FacebookIcon fontSize='medium' sx={{color: 'black.main'}}/>
            <EmailIcon fontSize='medium' sx={{color: 'black.main'}}/>
            <PhoneIcon fontSize='medium' sx={{color: 'black.main'}}/>
          </div>
          
        {/* </div> */}
      </div>

      <div className=' flex items-start justify-center gap-16'>
        <div>
          <FooterHeader title="Company"/>
          <div className='flex flex-col gap-2 pl-0.5'>
            <FooterSubHeader title="About us"/>
            <FooterSubHeader title="Contact us"/>
          </div>
        </div>

        <div>
          <FooterHeader title="Products"/>
          <div className='flex flex-col gap-2 pl-0.5'>
            <FooterSubHeader title="Rings"/>
            <FooterSubHeader title="Necklace"/>
            <FooterSubHeader title="Earings"/>
            <FooterSubHeader title="Bracelets"/>
            <FooterSubHeader title="Charms"/>
          </div>
        </div>

        <div>
          <FooterHeader title="Customer Service"/>
          <div className='flex flex-col gap-2 pl-0.5'>
            <FooterSubHeader title="Orders"/>
            <FooterSubHeader title="Size Guide"/>
            <FooterSubHeader title="Warranty"/>
            <FooterSubHeader title="FAQs"/>
          </div>
        </div>

      </div>
    </div> 
      <p className='text-center text-sm'>
        © ALL RIGHTS RESERVED. 2024 Achariya Alanka
      </p>
    </div>
  )
}

export default Footer

const FooterHeader = ({ title }) => {

  return(
    <p className='font-semibold mb-2 cursor-pointer'>
      {title}
    </p>
  )
}

const FooterSubHeader = ({ title }) => {
  return(
    <p className='text-sm cursor-pointer'>
      {title}
    </p>
  )
}
