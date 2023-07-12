import React from 'react'

const Footer = () => {

  const year = new Date().toLocaleDateString();

  return (
    <>
    <div className='flex justify-center items-center' >@ Copyright {year} All Right reserved. </div>
    </>
  )
}

export default Footer