import { useContext, useEffect, useState } from "react"
import { housePicked, ScoreContext, UserPicked } from "../Hooks/ContextHook"

export default function Result() {
  const [result, setResult] = useState<string>("")

  const { housesChoice } = useContext(housePicked)
  const { usersChoice, isUserPicked } = useContext(UserPicked)
  const { setScore, score } = useContext(ScoreContext)

  const gameRules = {
    scissor: "paper",
    paper: "rock",
    rock: "scissor",
  };

  useEffect(() => {
    if (isUserPicked) {

      if (housesChoice === usersChoice) {
        setResult("Equal")
        // @ts-ignore
      } else if (gameRules[housesChoice] === usersChoice) {
        setResult("YOU LOSE")
        setScore(prev => prev - 1)
        // @ts-ignore
      } else if (gameRules[usersChoice] === housesChoice) {
        setResult("YOU Win")
        setScore(prev => prev + 1)
      }
    };
    
  }, [isUserPicked, housesChoice, usersChoice])

  return (
    <p className="font-extrabold text-3xl text-center text-white">
      {result}
    </p>
  )
}
