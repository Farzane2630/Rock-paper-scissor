import { createContext, Dispatch, SetStateAction } from "react";
import { choice } from "../Types";

type mute = {
   isMute: boolean,
   setIsMute: Dispatch<SetStateAction<boolean>>
}

type userChoice = {
   isUserPicked: boolean,
   setIsUserPicked: Dispatch<SetStateAction<boolean>>

   usersChoice: choice | string
   setUsersChoice: Dispatch<SetStateAction<choice | string>>
}
type houseChoice = {
   isHousePicked: boolean,
   setIsHousePicked: Dispatch<SetStateAction<boolean>>

   housesChoice: string
   setHousesChoice: Dispatch<SetStateAction<string>>
}

const MuteContext = createContext<mute>({
   isMute: false,
   setIsMute: () => { }
})

const UserPicked = createContext<userChoice>({
   isUserPicked: false,
   setIsUserPicked: () => { },
   usersChoice: "",
   setUsersChoice: () => { },
})

const housePicked = createContext<houseChoice>({
   isHousePicked: false,
   setIsHousePicked: () => { },
   housesChoice: "",
   setHousesChoice: () => { },
})

export { MuteContext, UserPicked, housePicked }

