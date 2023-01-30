import { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {
  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  let interval

  const startTimer = () => {
    let countDownDate = new Date('February 07 , 2023')
    let countDownDateTime = countDownDate.getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDateTime - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        // add 7 days to the countDownDate

        clearInterval(interval.current)
      } else {
        // update the timer

        setTimerDays(days)
        setTimerHours(hour)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  }, [])

  return (
    <div className='timer'>
      <p className='timer-el days'>{timerDays}</p>
      <p className='colon'>:</p>

      <p className='timer-el hours'>{timerHours}</p>
      <p className='colon'>:</p>

      <p className='timer-el minutes'>{timerMinutes}</p>
      <p className='colon'>:</p>

      <p className='timer-el seconds'>{timerSeconds}</p>
    </div>
  )
}
export default Timer
