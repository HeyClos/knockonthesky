import Image from 'next/image'
import { cinzel } from './fonts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-items-center p-14 justify-between">
      <div className="hero h-5/6">
        <div className="hero-content text-center">
          <div className="max-w-md">
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
            <h1 id="tagline" className={cinzel.className}>
              & listen to the sound
            </h1>
            <p className="py-12 text-sm">KOTS is a music organization that helps exceptional artists build sustainable careers. We believe that by helping artists evolve their human experience internally, they can radiate that experience onto others via their art and their everyday lives.</p>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-3 gap-4 grid-flow-col md:grid-flow-row "> */}
      <div className="w-full flex flex-col gap-4 justify-center md:flex-row">
        <div className="card w-96 border-2 border-orange-400 backdrop-blur-sm">
          <div className="card-body">
            <h2 className="card-title">For Ad/TV/Film producers</h2>
            <p>Award-winning music composition for Advertisements, TV shows, and Film. High-quality, quick turnarounds. </p>
            <div className="card-actions justify-end">
              <button className="btn glass invert">Book us today.</button>
            </div>
          </div>
        </div>
        <div className="card w-96 border-2 border-orange-400 backdrop-blur-sm">
          <div className="card-body">
            <h2 className="card-title">For Musicians</h2>
            <p>Studio access, composition, production help.</p>
            <div className="card-actions justify-end">
              <button className="btn glass invert">Coming Soon...</button>
            </div>
          </div>
        </div>

        <div className="card w-96 border-2 border-orange-400 backdrop-blur-sm">
          <div className="card-body">
            <h2 className="card-title">For Students & Non profits</h2>
            <p>We're happy to contribute our work pro-bono and help take your work & projects to the next level.</p>
            <div className="card-actions justify-end">
              <button className="btn glass invert">Coming Soon...</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div>Our Clients</div>    */}

      <div className="text-yellow-100/60 text-sm flex">
        coming soon...
      </div>
    </main>
  )
}
