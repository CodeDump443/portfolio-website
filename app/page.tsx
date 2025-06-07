import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/night-blue-sky.png')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/man2.png"
          alt="man"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
        />
      </div>

      <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
        <h1 className="text-[50px] text-white max-w-[500px]">
          Visionary Thinking in the{" "}
          <span className="text-blue-500">Digital Age</span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
          Меня зовут Ралия, и я изучаю, как работают современные цифровые инструменты. Меня вдохновляет идея создавать интерактивный опыт, объединяющий технологии, творчество и пользовательское восприятие.
        </p>
      </div>
    </main>
  );
}
