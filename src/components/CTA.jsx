import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a project in mind? <br className='sm:block hidden'/>
        Let's build something together!</p>
        <Link to="/contact" className='btn'>Contact</Link>
        <Link to="https://de.fiverr.com/ls_development" className='btn-2'>Check my Fiverr Account</Link>
    </section>
  )
}

export default CTA