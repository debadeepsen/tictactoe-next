import React from 'react'
import Box from '../Box'

const boxes = new Array(9).fill('')
const Board = () => {
  return (
    <div className='flex justify-center items-center p-4'>
      <div className='w-[240px] md-w-[360px] lg-w-[600px] h-[240px] md-h-[360px] lg-h-[600px] grid grid-cols-3 grid-rows-3'>
        {boxes.map((_b, i) => (
          <Box key={i} />
        ))}
      </div>
    </div>
  )
}

export default Board
