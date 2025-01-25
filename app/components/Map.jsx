import React from 'react'

function Map () {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1837437557915!2d30.028025475499565!3d40.735982236147876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb5ba1d42ee3bf%3A0x6ae5b3d4c46139c!2zU1JaIENBTSBCQUxLT04gVkUgS0nFniBCQUjDh0VTxLAgU8SwU1RFTUxFUsSw!5e0!3m2!1str!2str!4v1737794591229!5m2!1str!2str'
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
