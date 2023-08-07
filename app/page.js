import Image from 'next/image'
import { cinzel } from './fonts'

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen	flex-col items-center py-14 justify-between">
      <div id="banner" className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:rounded-full before:bg-gradient-radial before:from-slate-400/60 before:to-slate-500/50 before:blur-3xl">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          src="/Kots-poiretone-nobg.svg"
          alt="Knock on the sky logo"
          width={480}
          height={87}
          priority
        />
      </div>
      <h1 id="tagline" className={cinzel.className}>
        & listen to the sound
      </h1>
      <div className="py-14">
        Our Services
        <div className="py-4 justify-between grid-cols-2">
          <div className="p-4">
            For Musicians
          </div>
          <div className="p-4">
            For Tv/Film/Ad producers
          </div>
          <div className="p-4">
            For Students & Non profits
          </div>
        </div>
      </div>      
      <div className="text-yellow-100/60 text-sm flex">
        coming soon...
      </div>
    </main>
  )
}
