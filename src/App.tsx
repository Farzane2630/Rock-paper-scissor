import { useState } from 'react'
import { MuteContext } from './Hooks/ContextHook'
import RoutesContainer from './Routes'


function App() {
  const [isMute, setIsMute] = useState<boolean>(false)

  return (
    <MuteContext.Provider value={{
      isMute,
      setIsMute
    }}>
      <div className='w-full h-full'>
        <RoutesContainer />
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </MuteContext.Provider>
  )
}

export default App;