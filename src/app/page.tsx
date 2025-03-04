import Particles from "@/components/background/particle-background";
import Magnet from "@/components/container/magnet";
import BlurText from "@/components/text/BluredText";

export default function Page() {
  return (
    <main className="relative w-full h-screen">
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

      <div className="flex-col items-center font-mono flex">
        <div className="absolute inset-0 container items-start justify-center flex flex-col gap-5 h-screen w-screen p-10">
          <div>
            <BlurText
              text="Hi there, I am"
              delay={550}
              animateBy="words"
              direction="top"
              className="text-3xl"
            />

            <BlurText
              text="Achmad Safruddin"
              delay={600}
              animateBy="words"
              direction="top"
              className="text-8xl font-bold text-emerald-400"
            />

            <div className="text-lg font-normal text-gray-400">
              <BlurText
                text="Software Engineer, Developing web and mobile applications."
                delay={200}
                animateBy="words"
                direction="top"
                className="font-bold text-white"
              />
            </div>

            <BlurText
              text="Currently i am working with Next.js, Flutter, and React Native for the tech stack."
              delay={200}
              animateBy="words"
              direction="top"
              className="text-lg font-normal text-gray-400"
            />
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
