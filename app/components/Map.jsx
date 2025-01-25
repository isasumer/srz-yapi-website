import React from 'react'

function Map () {

  //https://www.google.com/maps/place/SRZ+CAM+BALKON+VE+KI%C5%9E+BAH%C3%87ES%C4%B0+S%C4%B0STEMLER%C4%B0/@40.7359782,30.0306004,17z/data=!3m1!4b1!4m6!3m5!1s0x14cb5ba1d42ee3bf:0x6ae5b3d4c46139c!8m2!3d40.7359782!4d30.0306004!16s%2Fg%2F11vwzt3m5d?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=kavakl%C4%B1%20mahallesi%20istanbul%20caddesi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

export default Map
