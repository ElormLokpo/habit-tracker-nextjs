"use client"
import Link from "next/link";
import { URLS } from "./constants";
import Image from "next/image"
import {GithubLogoIcon,LinkedinLogoIcon}  from "@phosphor-icons/react";


const HomepageTopNav = () => {
  return (
    <div className="w-120 sticky top-0 z-50 text-stone-100 bg-stone-900/90 backdrop-blur-10 rounded-2xl py-2 px-5 text-sm flex justify-between items-center">
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
    <div className="h-full py-10">
      <div className="flex justify-center mb-20 sticky top-5 z-50">
        <HomepageTopNav />
      </div>

      <div className="flex justify-center items-center flex-col mx-160 mb-40">
        <div className="text-[3rem] font-semibold text-center leading-12 mb-4">
          Habits that actually stick. Powered by AI.
        </div>
        <div className="text-center leading-7 mb-5">
          Stop fighting your schedule. TRACKR learns your rhythm, predicts your hurdles, and helps you build a better life—one micro-win at a time.
        </div>

        <div className="flex gap-1">
          <button className="bg-stone-900 text-white text-sm py-3 px-5 hover:cursor-pointer hover:bg-stone-800 rounded-md">Get Started</button>
          <button className="border-2 border-stone-900 text-stone-900 text-sm py-3 px-5 hover:cursor-pointer hover:bg-stone-200 rounded-md">Log In</button>

        </div>


      </div>


      <div className="grid grid-cols-2 mx-[25rem] mb-[5rem] gap-2">
        <div className="">
          <Image src={"/designer-working.svg"} alt="" width={500} height={100} />
        </div>
        <div className=" flex flex-col justify-center">
          <div className="font-semibold text-2xl mb-3 flex flex-col gap-2">
            <span>Find your rhythm, </span>  <span className="text-stone-600">Stay in your flow</span>
          </div>
          <div className="tracking-4 leading-9">
            Most habit trackers feel like a second job. We built <span className="font-semibold">TRACKR</span> to do the opposite. By using AI to understand your natural energy peaks and daily hurdles, we help you weave your goals into the fabric of your day. It’s not about forcing change.
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-stone-900 text-white py-[10rem] px-[25rem] mb-[5rem] gap-2 justify-center items-center">
        <div className="font-semibold text-xl">
          Start your flow in seconds.
        </div>
        <div className="tracking-[0.1rem] font-light mb-5">
          Launch your evolution with AI-optimized routines built by our experts and global community
        </div>

        <div>
          <button className="bg-white text-stone-800 text-sm py-3 px-5 hover:cursor-pointer hover:bg-stone-200 rounded-md">Get Started</button>
        </div>

      </div>


      <div className="grid grid-cols-2 mx-[25rem] mb-[5rem] gap-2">

        <div className=" flex flex-col justify-center">
          <div className="font-semibold text-2xl mb-3 flex flex-col gap-2">
            <span>Master your habits, </span>  <span className="text-stone-600">Master your flow state</span>
          </div>
          <div className="tracking-4 leading-9">
            True progress isn't found in a checklist. <span className="font-semibold">TRACKR</span> uses adaptive AI to analyze your behavioral patterns, identifying the exact moments when you’re most primed for growth. We remove the mental friction of deciding what to do next, allowing you to transition seamlessly from one win to the next.
          </div>
        </div>

        <div className="">
          <Image src={"/grow-plants-home-garden.svg"} alt="" width={500} height={100} />
        </div>
      </div>


      <div className="bg-ston-100  px-[2rem] border-t py-[3rem] text-sm flex justify-between">
          
          <div>
            © 2026 Benedict Dev, Inc. All rights reserved.
        
          </div>

          <div className="flex gap-2 item-center">
            <Link href="https://github.com/ElormLokpo" target="_blank" rel="noopener noreferrer" ><GithubLogoIcon size={32} /></Link>
            <Link href="https://www.linkedin.com/in/elorm-lokpo-837a4a309/" target="_blank" rel="noopener noreferrer"><LinkedinLogoIcon size={32} /></Link>
          </div>
      </div>
    </div>
  )
}

export default HomePage;