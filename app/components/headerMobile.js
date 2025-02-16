import React from 'react'

const HeaderMobile = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50 md:hidden">
      <div className="text-xl font-bold">Logo</div>
      <nav>
        <button className="text-2xl">&#9776;</button> {/* Hamburger Menu Icon */}
      </nav>
    </header>
  )
}

export default HeaderMobile