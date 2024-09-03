import React from 'react'

function Button({name, onClick, className, }) {
  return (
    <>
        <button className={`${className} px-3 py-1 bg-blue-600 hover:bg-blue-800 text-white font-semibold`} onClick={onClick}>
            {name}
        </button>
    </>
  )
}

export default Button