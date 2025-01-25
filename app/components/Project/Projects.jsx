'use client'

import Head from 'next/head'
import Image from 'next/image'
import Imagecar from '../../../public/assets/SrzProjectImage/Image1.jpeg'
import Tunel from '../../../public/assets/SrzProjectImage/Image2.jpeg'
import Cukur from '../../../public/assets/SrzProjectImage/Image3.jpeg'
import Bahce from '../../../public/assets/SrzProjectImage/Image4.jpeg'
import Kuyu from '../../../public/assets/SrzProjectImage/Image5.jpeg'
import Mazgal from '../../../public/assets/SrzProjectImage/Image6.jpeg'
import Merdiven from '../../../public/assets/SrzProjectImage/Image7.jpeg'
import Kaldirim from '../../../public/assets/SrzProjectImage/Image8.jpeg'
import Agac from '../../../public/assets/SrzProjectImage/Image12.jpeg'
import Boru from '../../../public/assets/SrzProjectImage/Image10.jpeg'
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
    [Mazgal, Bahce],
    [Imagecar, Tunel],
    [Merdiven, Kuyu],
    [Cukur, Kaldirim],
    [Boru, Agac]
  ]

  const mobileSlides = slides.flat().map(image => [image])

  return (
    <>
      <Head>
        <title>Projelerimiz - Altyapı İnşaat Hizmetleri</title>
        <meta
          name='description'
          content='Altyapı inşaat projelerimiz hakkında bilgi alın. Mazgal, tünel, bahçe düzenlemesi ve diğer hizmetlerimiz hakkında daha fazla bilgi edinin.'
        />
        <meta
          name='keywords'
          content='altyapı inşaat, mazgal, tünel, bahçe düzenlemesi'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          property='og:title'
          content='Projelerimiz - Altyapı İnşaat Hizmetleri'
        />
        <meta
          property='og:description'
          content='Mazgal, tünel ve diğer altyapı projelerimiz hakkında daha fazla bilgi edinin.'
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
