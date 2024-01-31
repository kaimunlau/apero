import { useEffect, useState } from 'react'
import ConfettiExplosion, { ConfettiProps } from 'react-confetti-explosion'

const confettiProps: ConfettiProps = {
  force: 0.6,
  duration: 2500,
  particleCount: 100,
  width: 1000,
  colors: ['#9A0023', '#FF003C', '#AF739B', '#FAC7F3', '#F7DBF4'],
}

const Confetti = () => {
  const [isExploding, setIsExploding] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExploding(true)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return isExploding && <ConfettiExplosion {...confettiProps} />
}

export default Confetti
