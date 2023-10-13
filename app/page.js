import Image from 'next/image'
import { cinzel } from './fonts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-items-center p-14 justify-between">
      <div className="hero h-5/6 pb-4">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            {/* <div className="relative flex flex-col place-items-center z-50 before:absolute before:h-[300px] before:w-6/12 before:rounded-full before:bg-gradient-radial before:from-slate-400/60 before:to-slate-500/50 before:blur-3xl"> */}
            <div className="relative flex flex-col place-items-center z-50">
              <Image
                className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
                src="/Kots-poiretone-nobg.svg"
                alt="Knock on the sky logo"
                width={480}
                height={87}
                priority
              />
              <h1 id="tagline"  className={`${cinzel.className} text-white`}>
                & listen to the sound
              </h1>
            </div>

            <p id="text-neon" className={`${cinzel.className} z-20 py-12 text-sm text-lime-300 tracking-widest opacity-90`}>M̵̺͕̀̉̅ũ̷͓̱̄l̸̹̬̖̈̓t̷̪͉̲͓̓͛̚i̷̛̬̟̝̒̚͠d̶̻̓͐̕ḯ̴̜̭̗̘͠š̸̯̫č̴̮̃̇͛i̴̩͑̅̂̚p̶̧͔̩̄͐͝͠ͅļ̷̠̞̦̄̃i̷̗͈̘̟̅̆n̸̢̨͔̉̈́̆a̵͓̦̮̗̋͗̄̔r̷̨̠̈́͑̀ÿ̴̛̠́̿ ̸̛̥̍͊a̶̪͔͒̇̇͑ŕ̵͖͚̻̀ț̴̋́͝͝ ̴̛̭͇̥c̶̗͙͓̼̍͋o̶͚͂l̵͎͈̍̒̔̒l̸͙͎̇̀͗e̴̻̟̺͂̒̀c̷̱̃͠t̵͚̦̗̬͌̀̚͝ḯ̴̲̂̅v̶̺̰̪̈́̌̚e̷̛̮̭̚͠ ̵̣͉̱̖͝ć̷̬̳u̷͎̟͗̓̊͝r̸̞̟̙̀r̵͖͇̰̭̾̐̑͝e̵̠͕̋̈́n̴̡̜̤̰͠t̴̫̰̟̖͆̔l̷͙̬̺̮̈́̕y̸̢̢̪̠̓͋̕ ̴̯̍̆e̸̱͗x̴̦͎̊ǐ̵̧́̓s̷̺̩͔̺̆̎͝t̸̢̝̫̙͊i̶̛̦̍̕n̴̰̅̍ǵ̷̰̗͍́͋̔ ̷̰͙͕̇̎i̶̝̥͆͑ǹ̷̙̖͉͓̍̚ ̶̺̼̄̓͒̚L̸̬̲̮͙̈̀̚a̷͎̅̔̓s̶̡̟̿͛̂ͅ ̴̺͒̃̈́͘V̶̤̠̮̈́̇̈́̐ë̴̛̜̼̩́g̸̼̼̣̒̚̚ȧ̷̗͚̞́ş̵͈̼͊̎̿.̷̢͛ ̶̠͎͍̍̈́͝Ë̷̼́̑v̵̧́͆̅͛e̷̯̍̾̎n̶̗̱̕t̷͙̗͉̯́̌̇̚s̴̡̛͚̈́ͅ,̸̲͌̏̿͒ ̵̳̲͗M̵͈̈̎̒u̸̅̾͜s̴̩̮̫̝͊̏̀i̴͚̖̋c̵͖̝̩̙̏̔͆̕ ̵͈͆̅P̶͖͗̈́͝r̵̩̬͇̾ó̶̢̦̖̘̈͝d̸̢̏̈́͑̓ư̵̪͠c̴̜̟̅t̷̟̲̯̀ḭ̶̯̟̆̾̚o̸̫̚n̶͔̬̟̩̽,̶̢̫̎̃̏ ̴̝̊͛̈́à̶̱n̷̙͗͗͝d̵̤͍̜͚̈́ ̶̨̭̭̈́̄͒m̴̝͕̃ȍ̶͈̦̭r̶̜͍̹̂e̵̯͑̅.̷̢̞̓̃</p>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-3 gap-4 grid-flow-col md:grid-flow-row "> */}
      <div className="max-w-fit text-white flex flex-col gap-4 justify-center md:flex md:flex-row">
        <div id="border-neon" className="card max-w-fit backdrop-blur-sm">
          <div className="card-body">
            <h2 className={`${cinzel.className} card-title tracking-widest font-normal`}>For Ad/TV/Film producers</h2>
            <p className="text-lime-300 font-light text-sm">Award-winning music composition for Advertisements, TV shows, and Film. High-quality, quick turnarounds. </p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div id="border-neon" className="card max-w-fit backdrop-blur-sm">
          <div className="card-body">
            <h2 className={`${cinzel.className} card-title tracking-widest font-normal`}>For Artists</h2>
            <p className="text-lime-300 font-light text-sm">Music production & management services. Including studio sessions, engineering, marketing, representation and more.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>

        <div id="border-neon" className="card max-w-fit backdrop-blur-sm ">
          <div className="card-body">
            <h2 className={`${cinzel.className} card-title tracking-widest font-normal`}>For Students & Non profits</h2>
            <p className="text-lime-300 font-light text-sm">We're happy to contribute our work pro-bono and help take your work & projects to the next level.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
      {/* <div>Our Clients</div>    */}

      <div className="text-lime-300 text-sm flex z-40 pt-2">
        Email us at kotsweb@gmail.com
      </div>
    </main>
  )
}
