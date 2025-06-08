import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('/assets/night-blue-sky.png')] bg-cover bg-center bg-no-repeat">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-50 bottom-0 z-[10]">
        <Image
          src="/assets/man2.png"
          alt="man"
          width={560}
          height={560}
          className="w-[300px] h-[300px] md:h-[560px] md:w-[560px] z-[1] transform scale-110 md:scale-125"
        />
      </div>

      <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
        <h1 className="text-[50px] text-white max-w-[500px]">
          Visionary Thinking in the{" "}
          <span className="text-blue-500">Digital Age</span>
        </h1>
        <p className="text-[19px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
          Меня зовут Ралия, это сайт с использованием React и Next.js на версии 13.5.4 потому, что он лучше соответствует моим требованиям. Я тщательно взвесил функциональность каждой версии и остановился на той, что наиболее оптимально решает мои текущие задачи.Я изучаю, как работают современные цифровые инструменты. Меня вдохновляет идея создавать интерактивный опыт, объединяющий технологии, творчество и пользовательское восприятие.
        </p>
      </div>
    </main>
  );
}
