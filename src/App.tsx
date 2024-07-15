import { useState } from 'react'
import { MuteContext, ScoreContext } from './Hooks/ContextHook'
import RoutesContainer from './Routes'

function App() {
  const [isMute, setIsMute] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  // const getLocalScore = localStorage.getItem("score")
  // const setLocalScore = localStorage.setItem("score", String(score))
  // console.log("local score:", setLocalScore);
  

  return (
    <MuteContext.Provider value={{
      isMute,
      setIsMute
    }}>
      <ScoreContext.Provider value={{ score, setScore }}>
        <div className='w-full h-full'>
          <RoutesContainer />
        </div>
      </ScoreContext.Provider>
    </MuteContext.Provider>
  )
}

export default App
