import { useQuery } from "react-query"
import { getScore } from "../Api/QueryFunctions"

export default function ScoreBox() {
   // const {score} = useContext(ScoreContext)

   const {data} = useQuery({
      queryKey: ["Score"],
      queryFn: getScore
   })
   return (
      <div className="flex flex-col justify-center items-center bg-gray-200 m-4 p-2 rounded">
         <p className="text-lg font-bold"> SCORE </p>
         <h2 className="text-lg font-extrabold"> {data?.score} </h2>
      </div>
   )
}
