import React from 'react'

function Footer() {
  return (
    <div className='text-white  Footer'>
      <ul>
        <li>&copy; {new Date().getFullYear()} Vimal Kumar</li>
        <li>created with ❤️ and code</li>
      </ul>
    </div>
  )
}

export default Footer