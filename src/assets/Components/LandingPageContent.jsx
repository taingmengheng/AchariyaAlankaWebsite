import React, { useContext, useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { IconButton, Button, Card, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import FadeInSection from "../Animaton/FadeInSection";
import { AppContext } from "../../Context/AppContext";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
  backgroundPosition: "center",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1599458349289-18f0ee82e6ed?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url: "https://images.unsplash.com/photo-1621334119886-cbc9e36fcf7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1569388330338-53ecda03dfa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const categories = [
  {
    id: 1,
    title: 'Ring',
    src: 'Ring (2).jpg'
  },
  {
    id: 2,
    title: 'Bracelet',
    src: 'Bracelet.jpg'
  },
  {
    id: 3,
    title: 'Necklace',
    src: 'Necklace.jpg'
  },
  {
    id: 4,
    title: 'Charm',
    src: 'Charm.jpg'
  },
  {
    id: 5,
    title: 'Earing',
    src: 'Earing.jpg'
  },
]

const properties = {
  prevArrow: (
    <IconButton>
      <ArrowBackIosOutlinedIcon color="white" sx={{ ml: "8px" }} />
    </IconButton>
  ),
  nextArrow: (
    <IconButton>
      <ArrowForwardIosOutlinedIcon color="white" sx={{ mr: "8px" }} />
    </IconButton>
  ),
};

const LandingPageContent = () => {
  const { jewelry, setJewelry } = useContext(AppContext)

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="slide-container">
      <div>
        <Slide {...properties} duration={3000}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                {/* <span>Hii</span> */}
              </div>
            </div>
          ))}
        </Slide>
        <div className="px-4 py-4 flex justify-center">
          <p className=" text-reddish font-elegant font-bold text-xl">
            Jewelry is a way of keeping memories alive.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-around pt-32 pb-4 px-4">
        <div className="max-w-96">
          <FadeInSection translateType="X" translateValue="-100px">
            <img loading="lazy" src="GroupPicture.png" alt="GroupPicture" />
          </FadeInSection>
        </div>
        <div className="w-6/12">
          <FadeInSection translateType="X" translateValue="100px">
            <p className="font-elegant text-5xl font-semibold ">
              Explore The Beauty Of
            </p>
            <p className="font-elegant text-5xl font-semibold text-reddish mt-2">
              Achariya Alanka
            </p>
            <div className="my-12">
              <p className="text-serif text-gray.dark">
                Indulge in the exquisite allure of Achariya Alanka's jewelry
                collection. Discover a world where craftsmanship meets elegance,
                where each piece tells a story of timeless beauty. From dazzling
                diamonds to lustrous pearls, immerse yourself in a realm of
                sophistication and style. Explore the artistry of Achariya
                Alanka and adorn yourself with the epitome of luxury.
              </p>
            </div>
            <Button variant="text" color="reddish">
              <p className="capitalize font-elegant text-lg font-bold">
                Explore All
              </p>
              <EastIcon sx={{ fontSize: "18px", ml: "6px" }} />
            </Button>
          </FadeInSection>
        </div>
      </div>

      <div className="pt-32 pb-32 px-4">
        <FadeInSection translateType="Y" translateValue="20px">
          <p className="font-elegant text-5xl font-semibold text-center mb-12">
            Explore By Category
          </p>
        </FadeInSection>
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {
            categories.map((categry, idx) => (
              <Grid item key={categry.id} lg={2}>
                <FadeInSection  delay={idx * 50} translateType="Y" translateValue="150px">
                  <StyledCategoryItem src={categry.src} title={categry.title} />
                </FadeInSection>
              </Grid>
            ))
          }
        </Grid>
        <div className="flex justify-center mt-12">
          <FadeInSection translateType="Y" translateValue="20px">
            <Button variant="text" color="reddish">
              <p className="capitalize font-elegant text-lg font-bold">
                Explore All
              </p>
              <EastIcon sx={{ fontSize: "18px", ml: "6px" }} />
            </Button>
          </FadeInSection>
        </div>
      </div>

      <div className="w-full">
        <img loading="lazy" src="Banner (2).jpg" alt="Banner.png" width="100%" />
      </div>

      <div className="pt-32 pb-32 px-4">
        <FadeInSection translateType="Y" translateValue="20px">
          <p className="font-elegant text-5xl font-semibold text-center mb-12">
            New Arrivals
          </p>
        </FadeInSection>

        <Grid container spacing={4}>
          <Grid item lg={4}>
            <FadeInSection translateType="Y" translateValue="150px">
              <div className="cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                  loading="lazy"
                  src="18k Jewelry/Necklace/Necklace (1).JPG" 
                  alt="Golden Necklace" 
                  className="transition-transform duration-500 transform-gpu hover:scale-110"
                  />
                </div>
                <p className="mt-2 text-md text-gray-dark">
                  Gold Necklace
                </p>
                <div className="flex items-center gap-4">
                  {/* <p className="font-semibold"v
                    ${jewelry.discountedPrice}
                  </p> */}
                  <p className="font-semibold text-lg">
                    $999.99
                  </p>
                </div>
              </div>
            </FadeInSection>
          </Grid>
          <Grid container item lg={8} spacing={2}>
            {
              jewelry.slice(0, 8).map((jewelry, idx) => (
                <Grid key={jewelry.id} item lg={3}>
                  <FadeInSection  delay={idx * 50} translateType="Y" translateValue="100px">
                    <div className="cursor-pointer">
                      <div className="relative overflow-hidden">  
                        <img 
                        loading="lazy"
                        src={jewelry.images[0]} 
                        alt={jewelry.images[0]}
                        className="transition-transform duration-500 transform-gpu hover:scale-110"
                        />  
                      </div>
                      <p className="mt-2 text-sm text-gray-dark">
                        {jewelry.name}
                      </p>
                      <div className="flex items-center gap-4">
                        {/* <p className="font-semibold"v
                          ${jewelry.discountedPrice}
                        </p> */}
                        <p className="mt-1 font-semibold">
                          ${jewelry.price}
                        </p>
                      </div>
                    </div>
                  </FadeInSection>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </div>

      <div className="flex items-center justify-around pb-32 px-4">
        <div className="w-6/12">
          <FadeInSection translateType="X" translateValue="100px">
            <p className="font-elegant text-5xl font-semibold ">
            Elevating Your Style with
            </p>
            <p className="font-elegant text-5xl font-semibold text-reddish mt-2">
              Achariya Alanka
            </p>
            <div className="my-12">
              <p className="text-serif text-gray.dark">
                Experience uncompromising quality with Achariya Alanka's exquisite jewelry. We are dedicated to delivering superior craftsmanship and exceptional materials, ensuring each piece meets the highest standards of excellence. Elevate your style with our meticulously crafted creations, designed to bring sophistication and beauty to every moment.
              </p>
            </div>
            <Button variant="text" color="reddish">
              <p className="capitalize font-elegant text-lg font-bold">
                Elevate Your Style
              </p>
              <EastIcon sx={{ fontSize: "18px", ml: "6px" }} />
            </Button>
          </FadeInSection>
        </div>

        <div className="max-w-96">
          <FadeInSection translateType="X" translateValue="-100px">
            <img 
            loading="lazy"
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="GroupPicture" />
          </FadeInSection>
        </div>
      </div>

    </div>
  );
};

export default LandingPageContent;

const StyledCategoryItem = ({ src, title }) => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          loading="lazy"
          src={src}
          alt={src}
          className="transition-transform duration-500 transform-gpu hover:scale-110 hover:cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-between px-1 group hover:cursor-pointer">
        <a className="font-elegant text-xl font-semibold mt-2">{title}</a>
        <EastIcon
          className="text-reddish-main text-xl mt-2 cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"
          sx={{
            fontSize: "18px",
            mt: "8px",
            color: "reddish.main",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};
