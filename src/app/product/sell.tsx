import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";


interface Iproduct{
  title:string,
  price:string,
  id:number,
  rating?:string,
  old_price?:string,
  img_url:string
} 
let product:Iproduct[] =[
  {
   title:"VERTICAL STRIPED SHIRT",
   id:5,
   old_price:"$232",
   price:"$212",
   img_url:"/images/pic5.png"

},
{
  title:"COURAGE GRAPHIC T-SHIRT",
  id:6,
  price:"$145",
  img_url:"/images/pic6.png"

}, 
{
  title:"LOOSE FIT BERMUDA SHORTS",
  id:7,
  price:"$80",
  img_url:"/images/pic7.png"

},
 {
  title:"FADED SKINNY JEANS",
  id:8,
  price:"$210",
  img_url:"/images/pic8.png"

}
]
let star=[
  <FaStar key={1}/>,
  <FaStar key={2}/>,
  <FaStar key={3}/>,
  <FaStar key={4}/>]

export default function Sell() {
  return (
    <div className='w-full h-full sm:h-[700px] pt-32'>
        <h2 className='text-4xl md:5xl lg:6xl font-extrabold text-center'>TOP SELLING </h2>
        <div className='flex flex-col md:flex-col-2 lg:flex-row justify-center lg:space-y-0 space-y-24 md:justify-evenly items-center m-10'>
          {
            product.map((data) => {
              return(
                <div key={data.id}>
              
              <div className='w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] '>
              <Image src={data.img_url} alt={data.title} width={200} height={100} className='w-full h-full rounded-[20px]'></Image>
              </div>
        
            <p className='text-lg font-bold mt-4'>{data.title}</p>
            <p className='flex text-[#FFC633]'>
            {star.map((icon,index)=>( <span key={index}>{icon}
                          </span>))} </p>
            <p className='text-lg font-bold mt-1'>{data.price}<span className='text-gray-500 line-through pl-2'>{data.old_price}</span>
            </p>
            </div> 
            )
            })
          }
        </div>
        </div>
  )
}
