import React from 'react'

export default function Temp({setCity,city,weather}) {


  // Get current hour (0-23)
  const currentHour = new Date().getHours();

  // Determine if it's day (6 AM to 6 PM) or night (6 PM to 6 AM)
  const isDayTime = currentHour >= 6 && currentHour < 18;



  return (
    <>
    < div className=' flex justify-between mt-8'>

<input type="text" placeholder='Enter your city name' className='bg-slate-600 w-60 p-3 border border-slate-500 text-slate-200 placeholder-slate-400 text-md focus:outline-none focus:border-slate-400  ' onChange={(e)=>{setCity(e.target.value)}} value={city} />

{/*loaction*/}
<div className='m-4 pr-7 text-transform scale-100 hover:scale-110 transit duration-300 ease-in-out '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-10">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /> 
</svg>
</div>




</div>


{/*other*/}

<div className='flex justify-center mt-8 '>

{isDayTime ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="yellow" classname="size-8" className='w-14 h-14 pt-4 text-transform scale-100 hover:scale-150 transit duration-300 ease-in-out'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="white"  className='w-12 h-12 pt-4 text-transform scale-100 hover:scale-150 transit duration-300 ease-in-out'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>)}


</div>

{/*degree*/}
<div className='flex justify-center mt-8'>
  <p className='text-white  font-semibold text-[55px] text-transform scale-100 hover:scale-110 transit duration-300 ease-in-out'>{ weather.main && weather.main.temp}
    <span>c</span>
  </p>
</div>

{/** time */}

<div className='flex justify-center mt-8 text-transform scale-100 hover:scale-110 transit duration-300 ease-in-out' >
  <p className='text-white text-[20px]'> Today - {new Date().toLocaleString()} | {weather.name}</p>
</div>

    
    </>
  )
}
