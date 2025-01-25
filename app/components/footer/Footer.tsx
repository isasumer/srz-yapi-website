import './style.css'

export default function Footer () {
  return (
    <footer className='footerContainer'>
      <div>
        <p>SRZ YAPI</p>
      </div>
      <address>
        {/* <a href='mailto:esrasumer28@gmail.com' className='footerText'>
          info@basaltyapi.com
        </a> */}
        <p className='footerText'>
          <a href='tel:05423974100'>+90 542 397 41 00</a>
        </p>
      </address>
      <div className='footerText'>
        <p>©2025, SRZ Yapı tarafından</p>
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
