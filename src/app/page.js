'use client'
import Timer from '@/components/Timer'
import TimerList from '@/components/TimerList'
import useCountDown from '@/hook/useCountDown'
import { useEffect } from 'react'

export default function Home () {
  const time = useCountDown({ time: 10, onEnd: () => console.log('end') })

  useEffect(() => {
    console.log(time.count)
  }, [time])

  return (
    <>
      <h1 className='text-2xl font-bold'>My Timers</h1>

      <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

      <TimerList />
      <Timer />
      <button onClick={() => time.start()}>Start</button>
      <button onClick={() => time.pause()}>Pause</button>
      <button onClick={() => time.reset()}>Reset</button>
    </>
  )
}
