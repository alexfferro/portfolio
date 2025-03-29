import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        alt="a young and beatitiful man, named Alex Ferreira"
        priority
        height={500}
        width={500}
        src="https://github.com/alexfferro.png"
      />
      <Image
        alt="a man with a joystick, selecting a game character"
        priority
        height={500}
        width={500}
        src={"/home.svg"}
      />
    </div>
  );
}
