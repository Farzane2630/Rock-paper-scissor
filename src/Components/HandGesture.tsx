import { ReactNode, useContext } from 'react'
import { housePicked, MuteContext, UserPicked } from '../Hooks/ContextHook'
import sound from "../assets/sounds_tink.wav"
import { choice } from '../Types'

export default function HandGesture({ children, styles, id }: { children: ReactNode, styles?: string, id: string | choice}) {
  const { isMute } = useContext(MuteContext)
  const pick = useContext(UserPicked)
  const house = useContext(housePicked)

  const choices = ["rock", "paper", "scissor"]

  const handelUserChoice = () => {
    !isMute && new Audio(sound).play()

    pick.setIsUserPicked(true)

    pick.setUsersChoice(id)

    const houseChoiceIndex = Math.floor(Math.random()* choices.length);
    
    house.setHousesChoice(choices[houseChoiceIndex])
    house.setIsHousePicked(true)

  }


  return (
    <button
    disabled={house.isHousePicked}
      onClick={handelUserChoice}
      className={`
      ${styles}
      rounded flex items-center justify-center rounded-full border-[16px] p-10 mx-10 border-${id === "paper" ? "red" : id === "rock" ? "blue" : id === "scissor" ? "green" : ""}-700`}>
      {children}
    </button>

  )
}
