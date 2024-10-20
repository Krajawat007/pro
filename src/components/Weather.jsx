import React,{useState,useEffect} from 'react'
import Temp from './Temp'
import Highlights from './Highlights'


export default function Weather() {

  const [city,setCity]=useState('jaipur')
  const[weather,setWeather]=useState({})

  
  
  const api="31a036a641d0baa3c3468c21f98ee894"

  const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`


 
 
  
  useEffect(()=>{
  
  if(city){
    fetch(apiURL).then((res)=>{ return res.json()}).then((data)=>{
      setWeather(data)
      console.log(data)
    })
  }
   
    
  },[city])
  

  return (
    <>
<div className='bg-blue-950 flex justify-center align-top h-screen'>


{/*left box*/}
<div className=' mt-40 w-1/3 h-1/2'>
<Temp setCity={setCity} city={city} weather={weather}/>
</div>


{/*right box*/}
<div className=' mt-40 w-1/2 h-1/3 p-10 grid grid-cols-2 gap-6'>
<h2 className='text-white text-[25px] flex justify-center col-span-2 p-4'>Today's Highlights</h2>
<Highlights weather={weather} />
             
</div>






</div>


    </>
  )
}