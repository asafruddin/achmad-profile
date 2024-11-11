export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-mono">
      <div className="container items-start justify-center flex flex-col gap-5 h-screen w-screen p-10">
        <div>
          <div className="text-3xl">Hi there, I am</div>

          <div className="text-8xl font-bold text-emerald-400">
            Achmad Safruddin
          </div>

          <div className="text-lg font-normal text-gray-400">
            <span className=" font-bold text-white">Software Engineer, </span>
            Developing <span className="text-amber-200 font-bold">web</span> and
            <span className="text-amber-200 font-bold"> mobile</span>{" "}
            applications.
          </div>

          <div className="text-lg font-normal text-gray-400">
            Currently i am working with{" "}
            <span className="text-amber-200">
              Next.js, Flutter, and React Native{" "}
            </span>
            for the tech stack.
          </div>
        </div>

        <button className="text-2xl font-medium text-emerald-400 border-2 border-emerald-400 rounded-md px-5 py-2 flex flex-row">
          Download CV
        </button>
      </div>
    </main>
  );
}
