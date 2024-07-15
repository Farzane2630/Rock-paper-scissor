import { Link } from 'react-router-dom'
import GameBoard from '../Components/GameBoard'
import Speaker from '../Components/Speaker'
import Header from '../Components/Header'

export default function HomePage() {
      return (
            <div className="w-full h-full flex flex-col items-center justify-start py-2 bg-[#141539]">

                  <Speaker />
                  <div className="container body px-0 py-0 d-flex flex-column align-items-center justify-content-center">
                        <Header />
                        <GameBoard />
                  </div>

                  <button type="button" className="mt-4 rounded-xl border-gray-500 border-4 px-5 py-2 font-bold text-gray-500 text-xl" disabled>
                        <Link to="/rules">Rules</Link>
                  </button>

            </div>

      )
}
