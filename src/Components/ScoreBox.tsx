import { useContext } from "react"
import { ScoreContext } from "../Hooks/ContextHook"

export default function ScoreBox() {
   const {score} = useContext(ScoreContext)
   return (
      <div className="flex flex-col justify-center items-center bg-gray-200 m-4 p-2 rounded">
         <p className="text-lg font-bold"> SCORE </p>
         <h2 className="text-lg font-extrabold"> {score} </h2>
      </div>
   )
}
