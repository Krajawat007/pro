import React from 'react';

export default function Highlights({ weather }) {
  return (
    <>
      <div className='bg-slate-600 text-white pt-3 flex flex-col justify-start items-center w-72'>
        <h2 className='text-[30px]'>Wind status   okoko</h2>
        <div className='my-2'>
          <span className='text-4xl font-bold'>
            {weather.wind ? weather.wind.speed : 'N/A'}
          </span>
          <span className='font-bold text-2xl'> m/s</span>
        </div>

        {/* Wind direction */}
        <div className='mt-2 flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
          <div className='ml-2 text-[20px]'>
            {weather.wind ? weather.wind.deg : 'N/A'}° 
          </div>
        </div>


        {/* Visibility */}
        <h2 className='text-[30px] mt-4'>Visibility</h2>
        <div className='my-2'>
          <span className='text-4xl font-bold'>
            {weather.visibility ? weather.visibility / 1000 : 'N/A'}
          </span>
          <span className='font-bold text-2xl'> km</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
          <div className="bg-blue-600 h-2.5 rounded-full w-5 "></div>
        </div>
      </div>
    </>
  );
}

