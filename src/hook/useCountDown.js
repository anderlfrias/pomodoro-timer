import { useEffect, useState } from 'react'

export default function useCountDown (props) {
  const { time, onEnd } = props
  const [count, setCount] = useState(time * 10) // Convertimos los segundos a decima de segundo
  const [isRunning, setIsRunning] = useState(false)

  const onStart = () => {
    setIsRunning(true)
    if (count === 0) {
      setCount(time * 10)
    }
  }

  const onPause = () => {
    setIsRunning(false)
  }

  const onReset = () => {
    setIsRunning(false)
    setCount(time * 10)
  }

  useEffect(() => {
    let timer = null

    if (isRunning && count > 0) {
      timer = setInterval(() => {
        setCount((count) => count - 1)
      }, 100)
    }

    return () => clearInterval(timer)
  }, [count, onEnd, isRunning])

  useEffect(() => {
    if (isRunning && count === 0) {
      setIsRunning(false)
      onEnd && onEnd()
    }
  }, [count, onEnd, isRunning])

  return {
    count: count / 10, // Convertimos los decimas de segundo a segundos para mostrar
    start: onStart,
    pause: onPause,
    reset: onReset
  }
}
