import React from 'react'

function Container({ children, className }) {
  return (
    <div className={`${className} w-full h-auto max-w-7xl mx-auto my-auto pt-5 rounded-md px-4`}>
        {children}
    </div>
  )
}

export default Container