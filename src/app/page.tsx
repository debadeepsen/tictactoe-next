import Board from '@/components/containers/Board'
import GameContainer from '@/components/containers/GameContainer'
import Image from 'next/image'

export default function Home() {
  return (
    <GameContainer>
      <Board />
    </GameContainer>
  )
}
