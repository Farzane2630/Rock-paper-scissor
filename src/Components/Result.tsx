import { useContext, useEffect, useState } from "react"
import { housePicked, UserPicked } from "../Hooks/ContextHook"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { getScore, updateScore } from "../Api/QueryFunctions"

export default function Result() {
  const [result, setResult] = useState<string>("")

  const { housesChoice } = useContext(housePicked)
  const { usersChoice, isUserPicked } = useContext(UserPicked)

  const client = useQueryClient()


  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['Score'],
    queryFn: getScore,
    staleTime: 0, 
    cacheTime: 0, 
  })

  const mutateUpdateScoreFn = useMutation({
    mutationFn: updateScore,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["Score"] })
    }
  })

  const gameRules = {
    scissor: "paper",
    paper: "rock",
    rock: "scissor",
  };


  //  define the result
  useEffect(() => {
    if (isUserPicked) {
      if (housesChoice === usersChoice) {
        setResult("Equal")
        // @ts-ignore
      } else if (gameRules[housesChoice] === usersChoice) {
        setResult("YOU LOSE")
        data && mutateUpdateScoreFn.mutate(data.score - 1)
        // @ts-ignore
      } else if (gameRules[usersChoice] === housesChoice) {
        setResult("YOU Win")
        data && mutateUpdateScoreFn.mutate(data?.score + 1)
      }
    }
  }, [isUserPicked])

  if (isLoading) return <p className="font-extrabold text-3xl text-center text-white">is loading ...</p>

  return (
    <p className="font-extrabold text-3xl text-center text-white">
      {result}
    </p>
  )
}
