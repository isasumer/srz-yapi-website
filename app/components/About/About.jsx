import React from 'react'
import aboutImage from '../../../public/assets/SrzProjectImage/aboutImage.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import Text from './Text'
import Head from 'next/head'
import './style.css'

function About () {
  return (
    <>
      <Head>
        <title>Hakkımızda -SRZ Cam Balkon Sistemleri </title>
        <meta
          name='description'
          content='SRZ Cam Balkon Sistemleri profesyonel hizmet sunuyoruz. Projelerimiz hakkında bilgi alın.'
        />
        <meta
          name='keywords'
          content='Cam, Sineklik Sistemleri, Kış Bahçesi Sistemleri, Giyotin Cam Balkon Sistemleri'
        />
        <meta name='author' content='Srz Yapı' />
        <link rel='canonical' href='https://example.com/#about' />
      </Head>
      <div
        id='about'
        className='aboutContainer w-full p-2 flex items-center py-16'
      >
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='textHead'>Hakkımızda</p>
            <h1 className='textAboutContainer py-4'>
              SRZ Cam Balkon Sistemleri
            </h1>
            <Text />
            <Link href='/#projects'>
              <p
                className='py-2 text-gray-600 underline cursor-pointer'
                aria-label='Projelerimiz sayfasına git'
              >
                Projelerimize bir göz atın!
              </p>
            </Link>
          </div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image
              src={aboutImage}
              className='rounded-xl'
              alt='SRZ şirketine ait görsel'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
