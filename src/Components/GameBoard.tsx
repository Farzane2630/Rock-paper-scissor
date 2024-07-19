import HandGesture from './HandGesture'
// @ts-ignore
import Paper from "../assets/Paper"
import Rock from "../assets/Rock"
import Scissor from "../assets/Scissor"
import { UserPicked, housePicked } from '../Hooks/ContextHook'
import { useState } from 'react'
import { choice } from '../Types'
import Result from './Result'
import { Link } from 'react-router-dom'

export default function GameBoard() {
   const [isUserPicked, setIsUserPicked] = useState<boolean>(false)
   const [usersChoice, setUsersChoice] = useState<choice | string>("")

   const [isHousePicked, setIsHousePicked] = useState<boolean>(false)
   const [housesChoice, setHousesChoice] = useState<string>("")

   return (
      <UserPicked.Provider value={{
         isUserPicked,
         setIsUserPicked,
         usersChoice,
         setUsersChoice,
      }}>
         <housePicked.Provider value={{
            isHousePicked,
            setIsHousePicked,
            housesChoice,
            setHousesChoice
         }}>
            <div className="w-full mt-5 mx-0 flex flex-col items-center justify-center">
               {
                  !isUserPicked ?
                     <>
                        <div className="flex flex-row items-center justify-evenly">
                           <HandGesture
                              id="paper"
                              children={<Paper />}
                           />
                           <HandGesture
                              id="rock"
                              children={<Rock />}
                           />
                        </div>
                        <HandGesture
                           id="scissor"
                           children={<Scissor />}
                        />
                     </>
                     :
                     <div className="flex flex-col justify-start items-center gap-y-4">

                        <div className="flex flex-row items-center justify-evenly">
                           {/* usersChoice */}
                           <div >
                              <HandGesture
                                 id={usersChoice}
                                 children={
                                    usersChoice === "paper" ?
                                       <Paper /> :
                                       usersChoice === "rock" ?
                                          <Rock /> :
                                          usersChoice === "scissor" ?
                                             <Scissor /> : null
                                 }
                              />
                              <h4 className="text-white font-bold text-center text-base mt-6"
                              >You picked</h4>
                           </div>

                           {/* houseChoice */}
                           <div >
                              <HandGesture
                                 id={housesChoice}
                                 children={
                                    housesChoice === "paper" ?
                                       <Paper /> :
                                       housesChoice === "rock" ?
                                          <Rock /> :
                                          housesChoice === "scissor" ?
                                             <Scissor /> : null
                                 }
                              />
                              <h4 className="text-white font-bold text-center text-base mt-6"
                              >House picked</h4>
                           </div>
                        </div>

                        <Result />

                        <button type="button" className="mt-4 rounded-xl border-gray-500 border-4 px-5 py-2 font-bold text-gray-500 text-xl" disabled>
                           <Link to="/">Play Again!</Link>
                        </button>
                     </div>
               }



            </div>
         </housePicked.Provider>
      </UserPicked.Provider>
   )
}
