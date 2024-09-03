import React from 'react'

function Select({label, className, options, placeholder, onChange}, ref) {
  return (
    <div className='flex items-center'>
        {label && <label className={`inline-block text-white mr-2 font-bold`}>{label}: </label>}
        <select onChange={onChange} ref={ref} className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}>
            <option value="">{placeholder}</option>
            {options.map((option, index) => (
                <option className='bg-black text-white' key={index} value={option.value}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)