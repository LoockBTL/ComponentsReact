import { nanoid } from 'nanoid'
import { FC, useState } from 'react'
import { Container } from 'react-bootstrap'

interface TimeInterface {
  id?: string
  hour: number
  minut: number
  second: number
}

const Timer: FC = () => {
  const [time, setTime] = useState<TimeInterface>({
    hour: 0,
    minut: 0,
    second: 0,
  })
  const [laps, setLaps] = useState<TimeInterface[]>([])
  const [interv, setInterv] = useState<any>()
  let updatedH = time.hour,
    updatedM = time.minut,
    updatedS = time.second
  const startTimer = () => {
    setInterv(setInterval(run, 1000))
  }

  const run = () => {
    if (updatedM === 60) {
      updatedH++
      updatedM = 0
    }
    if (updatedS === 60) {
      updatedM++
      updatedS = 0
    }
    updatedS++
    return setTime({ hour: updatedH, minut: updatedM, second: updatedS })
  }
  const stopTimer = () => {
    clearInterval(interv)
  }
  const refreshTimer = () => {
    clearInterval(interv)
    setTime({ hour: 0, minut: 0, second: 0 })
  }
  const createLap = () => {
    setLaps((prevState) => [
      ...prevState,
      { id: nanoid(), hour: time.hour, minut: time.minut, second: time.second },
    ])
  }
  const refreshLaps = () => {
    setLaps([])
  }
  return (
    <Container>
      <p>Timer</p>
      <div>Hour: {time.hour >= 10 ? time.hour : `0${time.hour}`}</div>
      <div>Minute: {time.minut >= 10 ? time.minut : `0${time.minut}`}</div>
      <div>Second: {time.second >= 10 ? time.second : `0${time.second}`}</div>
      <button
        onClick={() => {
          startTimer()
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          stopTimer()
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          refreshTimer()
        }}
      >
        Refresh
      </button>
      <button
        onClick={() => {
          createLap()
        }}
      >
        Create Lap
      </button>
      <button
        onClick={() => {
          refreshLaps()
        }}
      >
        Refresh Lap
      </button>
      <br />
      {laps.map((obj) => (
        <div key={obj.id}>
          Hour: {obj.hour >= 10 ? obj.hour : `0${obj.hour}`} | Minut:{' '}
          {obj.minut >= 10 ? obj.minut : `0${obj.minut}`} | Second:{' '}
          {obj.second >= 10 ? obj.second : `0${obj.second}`}
        </div>
      ))}
    </Container>
  )
}

export default Timer
