import React, { useState } from 'react'

function App() {
  const [columns, setColumns] = useState([[]])
  const [selValue, setSelValue] = useState("")

  function handleOptionChange(e) {
    e.preventDefault()
    const val = e.target.value

    if (val === "") return  
    setColumns((prevCol) => {
      
      let newCols = [...prevCol]
      let lastCol = newCols[newCols.length - 1]
     if (lastCol[0] != val) {
        newCols.push([val])
      } else {
        lastCol.push(val)
      }
      
      return newCols
    })
    setSelValue("")
  }

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <select 
        onChange={handleOptionChange} 
        value={selValue} 
        className='bg-gray-500 rounded p-2 text-white'
      >
        <option value="">select</option>
        <option value="H">H</option>
        <option value="T">T</option>
      </select>
      
      <div className="flex justify-between mt-4">
        {columns.map((col, colIndex) => (
          <div  className='flex flex-col mr-2 p-2 '>
            {col.map((val, valIndex) => (
              <div >
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App