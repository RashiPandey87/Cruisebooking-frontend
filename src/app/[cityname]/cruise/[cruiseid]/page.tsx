"use client"
import React from 'react'
import { BsShare } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs';
import './cruisepage.css';
import CruiseCarousel from '@/components/CruiseCarousel/CruiseCarousel';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard';
import { usePathname,useParams  } from 'next/navigation';
import Link from 'next/link';


const CruisePage = () => {
    const pathname = usePathname()
    const { cruiseid } = useParams()
    
    const [cruise, setCruise] = React.useState<any>(null)
    console.log("$$$$$$",cruiseid);

    const getCruise = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/cruise/cruises/${cruiseid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await response.json();
            console.log("Full API Response:", data); // Log the full response
            if (data.ok) {
                console.log("Setting cruise data:", data.data);
                setCruise(data.data);
            } else {
                console.error("API Error:", data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };
    
    
   

    React.useEffect(() => {
        console.log("Cruise state updated:", cruise);
    }, [cruise]); // Logs whenever `cruise` state is updated
    
    React.useEffect(() => {
        if (cruiseid) {
            console.log("Fetching cruise data for ID:", cruiseid);
            getCruise(); // Fetch cruise data when `cruiseid` changes
        }
    }, [cruiseid]); // Trigger on `cruiseid` change
    
    
    
        
  return (
    <>
    {
        cruise &&
        <div className='cruisepage'>
      <div className='c1' style={{
        backgroundImage:`url(${cruise.landscapeImgUrl})`
      }}>
        <div className='c11'>
            <div className='left'>
                <div className='cruise_poster'
                style={{
                    backgroundImage:`url(${cruise.portraitImgUrl || 'https://via.placeholder.com/200x300'})`
                }}>
                    <p>In cinemas</p>

                </div>
                <div className='cruise_details'>
                    <p className='title'>
                        {cruise.title}
                    </p>
                    <p className='rating'>
            <BsFillStarFill className='star'/>&nbsp;&nbsp;
            {cruise.rating}/10
        </p>
    
        <p className='duration_type_releasedat'>
                                        <span className='duration'>
                                            {cruise.duration}
                                        </span>
                                        <span>•</span>
                                        <span className='type'>
                                            {cruise.genre.join(', ')}
                                        </span>
                                        </p>
                                    <Link
                                        href={`${pathname}/buytickets`}
                                        className='linkstylenone'
                                    >
                                        <button className='bookbtn'>Book Tickets</button>
                                    </Link>
                </div>
            </div>
            <div className='right'>
                <button className='sharebtn'><BsShare className='shareicon'/>Share</button>
            </div>
        </div>

      </div>
      <div className='c2'>
                        <h1>About the Movie</h1>
                        <p>{cruise.description}</p>
                        {
                            cruise.cast.length>0 &&
                            <div className='circlecardslider'>
                                <div className='line'></div>

                                <h1>Cast</h1>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={1}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        '@0.00': {
                                            slidesPerView: 1,
                                            spaceBetween: 2,
                                        },
                                        '@0.75': {
                                            slidesPerView: 2,
                                            spaceBetween: 2,
                                        },
                                        '@1.00': {
                                            slidesPerView: 3,
                                            spaceBetween: 2,
                                        },
                                        '@1.50': {
                                            slidesPerView: 6,
                                            spaceBetween: 2,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {
                                        cruise.cast.map((cast, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <CelebCard {...cast} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        }
                        {
                            cruise.crew.length>0 &&
                            <div className='circlecardslider'>
                                <div className='line'></div>

                                <h1>Crew</h1>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={1}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        '@0.00': {
                                            slidesPerView: 1,
                                            spaceBetween: 2,
                                        },
                                        '@0.75': {
                                            slidesPerView: 2,
                                            spaceBetween: 2,
                                        },
                                        '@1.00': {
                                            slidesPerView: 3,
                                            spaceBetween: 2,
                                        },
                                        '@1.50': {
                                            slidesPerView: 6,
                                            spaceBetween: 2,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {
                                        cruise.crew.map((cast, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <CelebCard {...cast} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        }
                        <div className='line'></div>
                        <h1>Your might also like</h1>
                        <CruiseCarousel />
                    </div>

    </div>
    }
    </>
  )
}


export default CruisePage
