import Link from "next/link";
import { URLS } from "./constants";



const HomepageTopNav = () => {
  return (
    <div className="w-[30rem] sticky top-0 z-50 text-stone-100 bg-stone-900/90 backdrop-blur-10 rounded-2xl py-2 px-5 text-sm flex justify-between items-center">
      <div className="font-bold">
        TRACKR
      </div>

      <div className="text-xs text-stone-200 flex items-center gap-3">
        <div>
          <Link href={URLS.AUTH}> Login </Link>
        </div>
        <div className="border border-gray-600 px-3 bg-stone-800 rounded-full py-1.5">
          <Link href={URLS.AUTH}> Get Started </Link>
        </div>
      </div>

    </div>
  )
}

const HomePage = () => {
  return (
    <div className="h-screen py-10">
      <div className="flex justify-center mb-20">
        <HomepageTopNav />
      </div>

      <div className="flex justify-center items-center flex-col mx-[40rem]">
        <div className="text-[3rem] font-semibold text-center leading-[3rem] mb-4">
          Habits that actually stick. Powered by AI.
        </div>
        <div className="text-center leading-7">
          Stop fighting your schedule. TRACKR learns your rhythm, predicts your hurdles, and helps you build a better life—one micro-win at a time.
        </div>
      </div>
    </div>
  )
}

export default HomePage;