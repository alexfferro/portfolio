import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:flex-row-reverse">
      <Image
        alt="a man with a joystick, selecting a game character"
        priority
        height={500}
        width={500}
        src={"/home.svg"}
      />
      <div className="space-y-5">
        <h1 className="text-3xl font-extrabold md:text-6xl">
          Hey there! I’m Omar. A UX{" "}
          <span className="text-gray-400">Researcher</span> &{" "}
          <span className="text-gray-400">Product Designer</span>
        </h1>
        <p className="text-[18px] font-normal sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed
          interdum vitae est arcu fringilla posuere. Suspendisse diam sagittis
          quam elementum ac.
        </p>
        <button className="p-4 bg-blue-700 shadow-xl rounded-full text-neutral-300 hover:brightness-75 cursor-pointer mt-7 sm:mt-20">
          Discover my Work
        </button>
      </div>
    </div>
  );
}
