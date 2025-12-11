
import Magnet from "@/components/container/magnet";

export default function Hero() {
  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center p-8 z-10">
        <div className="container mx-auto flex flex-col gap-6 items-start justify-center max-w-4xl">
          <h3 className="m-0 text-2xl md:text-3xl text-emerald-500 font-medium tracking-wide">Hi there, I am</h3>

          <h1 className="m-0 text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight">
            Achmad Safruddin
          </h1>

          <div className="space-y-2">
            <h3 className="m-0 text-xl md:text-2xl font-normal text-gray-400 leading-relaxed">
              <span className="font-bold text-emerald-400">Software Engineer</span> specialized in
              <span className="text-white font-bold"> Web</span> and
              <span className="text-white font-bold"> Mobile</span> applications.
            </h3>

            <p className="m-0 text-lg md:text-xl font-normal text-gray-500 max-w-2xl">
              Currently crafting seamless experiences with
              <span className="text-emerald-400 font-medium"> Next.js</span>,
              <span className="text-emerald-400 font-medium"> Flutter</span>, and
              <span className="text-emerald-400 font-medium"> React Native</span>.
            </p>
          </div>

          <div className="pt-8">
            <Magnet padding={50} magnetStrength={3}>
              <a 
                href="/cv.pdf" 
                target="_blank"
                className="bg-emerald-500 hover:bg-emerald-600 text-black text-lg font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Download CV
              </a>
            </Magnet>
          </div>
        </div>
      </div>
  );
}
