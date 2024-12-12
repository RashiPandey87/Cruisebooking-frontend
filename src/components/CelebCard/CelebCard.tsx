import { CastCardType } from '@/types/types'
import React from 'react'
import Image from 'next/image'
import './Celebcard.css';

const CelebCard = (data:CastCardType) => {
  return (
    <div className='celebcard'>
        <Image src={data.imageUrl} alt={data.name} width={200} height={200}/>
        <h3>{data.name}</h3>
        <h4>{data.role}</h4>
      
    </div>
  )
}

export default CelebCard
