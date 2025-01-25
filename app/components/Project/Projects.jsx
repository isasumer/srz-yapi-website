'use client'

import Head from 'next/head'
import Image from 'next/image'
import CamBalkon from '../../../public/assets/SrzProjectImage/Image1.jpeg'
import BoydanCam from '../../../public/assets/SrzProjectImage/Image2.jpeg'
import GlassBalcony from '../../../public/assets/SrzProjectImage/Image3.jpeg'
import CamBalkon2 from '../../../public/assets/SrzProjectImage/Image4.jpeg'
import CamBalkon3 from '../../../public/assets/SrzProjectImage/Image5.jpeg'
import KisBahcesi from '../../../public/assets/SrzProjectImage/Image6.jpeg'
import KisBahcesi2 from '../../../public/assets/SrzProjectImage/Image7.jpeg'
import KisBahcesi3 from '../../../public/assets/SrzProjectImage/Image8.jpeg'
import GlassBalcony2 from '../../../public/assets/SrzProjectImage/Image12.jpeg'
import KatlanirCamBalkon from '../../../public/assets/SrzProjectImage/Image10.jpeg'
// import Boru from '../../../public/assets/SrzProjectImage/Image10.jpeg'
// import Boru from '../../../public/assets/SrzProjectImage/Image10.jpeg'
import { Carousel } from 'antd'
import './style.css'

const contentStyle = {
  margin: 0,
  height: '640px',
  color: '#fff',
  textAlign: 'center',
}

const SliderItem = ({ images }) => {
  return (
    <div style={contentStyle}>
      <div className='slider'>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Project Image ${index + 1}`}
            width='500'
            height='500'
            className='slide'
          />
        ))}
      </div>
    </div>
  )
}

function Projects () {

  const slides = [
    [KisBahcesi, CamBalkon2],
    [CamBalkon, BoydanCam],
    [KisBahcesi2, CamBalkon3],
    [GlassBalcony, KisBahcesi3],
    [KatlanirCamBalkon, GlassBalcony2]
  ]

  const mobileSlides = slides.flat().map(image => [image])

  return (
    <>
      <Head>
        <title>Projelerimiz - Cam Balkon Sistem Hizmetleri</title>
        <meta
          name='description'
          content='Cam Balkon Sistem projelerimiz hakkında bilgi alın. Kış bahçesi, sineklik, pergola sistemleri ve diğer hizmetlerimiz hakkında daha fazla bilgi edinin.'
        />
        <meta
          name='keywords'
          content='Cam Balkon Sistemi, Kış bahçesi, sineklik, pergola sistemleri'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          property='og:title'
          content='Projelerimiz - Cam Balkon Hizmetleri'
        />
        <meta
          property='og:description'
          content='Kış bahçesi, sineklik ve diğer Cam Balkon projelerimiz hakkında daha fazla bilgi edinin.'
        />
        <meta property='og:type' content='website' />
      </Head>
      <div id='projects' className='w-full'>
        <div className='containerProject max-w-[1240px] mx-auto px-2 py-16'>
          <p className='textHead'>Projeler</p>
          <h2 className='textContainer py-4'>
            Hizmetlerimiz hakkında daha fazla bilgi edinmek isterseniz, bize
            ulaşmanız yeterli.
          </h2>

          <Carousel
            className='slider-wrapper'
            arrows
            infinite={false}
            swipeable={true}
          >
            {mobileSlides.map((images, index) => (
              <SliderItem key={index} images={images} />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Projects
