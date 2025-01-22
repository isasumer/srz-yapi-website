import './style.css'

export default function Footer () {
  return (
    <footer className='footerContainer'>
      <div>
        <p>BAŞ ALTYAPI İNŞAAT SAN.TİC.LTD.ŞTİ</p>
      </div>
      <address>
        <a href='mailto:esrasumer28@gmail.com' className='footerText'>
          info@basaltyapi.com
        </a>
        <p className='footerText'>
          <a href='tel:05002393122'>+90 551 052 95 16</a>
        </p>
      </address>
      <div className='footerText'>
        <p>©2023, Başaltyapı tarafından</p>
        <a
          href='https://www.linkedin.com/in/esra-sumer/'
          target='_blank'
          rel='noopener noreferrer'
        >
          sümerdev.com
        </a>{' '}
        ile kurulmuştur.
      </div>
    </footer>
  )
}
