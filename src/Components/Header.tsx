import Logo from "../assets/Logo.tsx"
import ScoreBox from "./ScoreBox.tsx"
export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between mx-6 my-4 px-4 py-4 rounded-md border-2 border-gray-300">
        <Logo />
      <ScoreBox />
    </div>
  )
}
