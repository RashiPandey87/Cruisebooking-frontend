import React from 'react'
import {CruiseCardType} from '@/types/types';
import { useRouter } from 'next/navigation';
import { BsFillStarFill } from 'react-icons/bs';
import './CruiseCard.css'

const CruiseCard = (data:CruiseCardType) => {
    const router=useRouter();
    const city='mumbai'
    const { _id, title,imageUrl, rating,type } = data;

  return (
    <div className='CruiseCard'
    onClick={()=>{
        router.push(`/${city}/cruise/${title}`)
    }} 
   
    >
    <div className='cruiseimg'
    style={{backgroundImage:`url(${imageUrl})`
    }}>
        <p className='rating'>
            <BsFillStarFill className='star'/>&nbsp;&nbsp;
            {rating}/10
        </p>

    </div>
    <div className='details'>
        <p className='title'>
            {title}
        </p>
        <p className='type'>
            {type}
        </p>
    </div>
      
    </div>
  )
}

export default CruiseCard
