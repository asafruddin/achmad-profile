import Particles from "@/components/background/particle-background";
import Magnet from "@/components/container/magnet";

export default function Page() {
  return (
    <main className="relative w-screen h-screen font-mono">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={3000}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="absolute inset-0 p-16">
        <div className="container items-start justify-center flex flex-col size-full gap-5">
          <h3 className="m-0 text-3xl">Hi there, I am</h3>

          <h1 className="m-0 text-8xl font-bold text-emerald-400">
            Achmad Safruddin
          </h1>

          <div>
            <h3 className="m-0 text-lg font-normal text-gray-400">
              <span className=" font-bold text-white">Software Engineer, </span>
              Developing <span className="text-amber-200 font-bold">
                web
              </span>{" "}
              and
              <span className="text-amber-200 font-bold"> mobile</span>{" "}
              applications.
            </h3>

            <h3 className="m-0 text-lg font-normal text-gray-400">
              Currently i am working with{" "}
              <span className="text-amber-200">
                Next.js, Flutter, and React Native{" "}
              </span>
              for the tech stack.
            </h3>
          </div>

          <Magnet padding={250} magnetStrength={5}>
            <button className="bg-black text-2xl font-medium text-emerald-400 border-2 border-emerald-400 rounded-md px-5 py-2 flex flex-row">
              Download CV
            </button>
          </Magnet>
        </div>
      </div>
    </main>
  );
}
