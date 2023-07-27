import Image from 'next/image'
import { cinzel } from './fonts'

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen	flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:rounded-full before:bg-gradient-radial before:from-slate-400/60 before:to-slate-500/50 before:blur-3xl">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          src="/Kots-poiretone-nobg.svg"
          alt="Knock on the sky logo"
          width={480}
          height={87}
          priority
        />
      </div>
      <h1 className={cinzel.className}>and listen to the sound</h1>
      <div className='text-yellow-100/60 text-sm'>
        coming soon...
      </div>
    </main>
  )
}
