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
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const CruisePage = () => {
    const pathname = usePathname()

    const cruise={
        wideposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/pushpa-the-rule--part-2-et00356724-1729771762.jpg",
        portraitposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa-the-rule--part-2-et00356724-1729771762.jpg",
        title:"",
        rating:8.5,
        halls:["2D","3D"],
        languages:['Tamil','Telugu','Hindi'],
       duration:'2h 15m',
       type:'Action/Thriller',
       releasedate:'Dec 3 2024',
       cast:[
        {
            _id:"1",
            name:'Allu Arjun',
            role:'Actor',
            imageUrl:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg'


        },
        {
            _id:"1",
            name:'Allu Arjun',
            role:'Actor',
            imageUrl:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg'


        },
        {
            _id:"1",
            name:'Allu Arjun',
            role:'Actor',
            imageUrl:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg'


        },
        {
            _id:"1",
            name:'Allu Arjun',
            role:'Actor',
            imageUrl:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg'


        },
        {
            _id:"1",
            name:'Allu Arjun',
            role:'Actor',
            imageUrl:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg'


        },
        {
            _id:"1",
            name:'Allu Arjun',
            role:'Actor',
            imageUrl:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg'


        },
       ] ,  
       crew:[
        {
          _id:'1',
          name:'Atlee',
          role:'Director',
          imageUrl:'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sukumar-bandreddi-2278-1671448479.jpg',
        },
        {
            _id:'1',
            name:'Atlee',
            role:'Director',
            imageUrl:'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sukumar-bandreddi-2278-1671448479.jpg',
          },
          {
            _id:'1',
            name:'Atlee',
            role:'Director',
            imageUrl:'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sukumar-bandreddi-2278-1671448479.jpg',
          },
       ] ,
       about:' A high-octane Action thriller  that outline emotional journey',




    }
  return (
    <div className='cruisepage'>
      <div className='c1' style={{
        backgroundImage:`url(${cruise.wideposter})`
      }}>
        <div className='c11'>
            <div className='left'>
                <div className='cruise_poster'
                style={{
                    backgroundImage:`url(${cruise.portraitposter})`
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
        <div className='halls_languages'>
                                <p className='halls'>
                                    {
                                        cruise.halls.map((hall, index) => {
                                            return (
                                                <span key={index}>{hall} </span>
                                            )
                                        })
                                    }
                                </p>
                                <p className='languages'>
                                    {cruise.languages.map((language, index) => {
                                        return (
                                            <span key={index}>{language} </span>
                                        )
                                    })}
                                </p>
                            </div>
                            <p className='duration_type_releasedat'>
                                        <span className='duration'>
                                            {cruise.duration}
                                        </span>
                                        <span>•</span>
                                        <span className='type'>
                                           {cruise.type}
                                        </span>
                                        <span>•</span>
                                <span className='releasedat'>
                                    {cruise.releasedate}
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
        <h1>About the Cruise</h1>
        <p> {cruise.about} </p>
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
                                        cruise.cast.map((cast,index) => {
                                            return (
                                                <SwiperSlide key={index} >
                                                    <CelebCard {...cast}/>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
        <div className="circlecardslider"></div>
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
                                        cruise.crew.map((crew,index) => {
                                            return (
                                                <SwiperSlide key={index} >
                                                    <CelebCard {...crew}/>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
        <div className="circlecardslider"></div>
        <div className='line'></div>
        <h1>Your might also like</h1>
        <CruiseCarousel/>
      </div>
    </div>
  )
}

export default CruisePage
