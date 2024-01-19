import { ReactNode } from 'react'
const GameContainer = ({ children }: { children: ReactNode }) => {
  return <main className='bg-gray-100 rounded-sm lg:rounded-lg shadow-xl min-h-[80vh] w-[80vw] lg:w-[60vw] flex flex-col lg:flex-row'>
    {children}
  </main>
}

export default GameContainer
