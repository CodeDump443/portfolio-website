import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('/assets/night-blue-sky.png')] bg-cover bg-center bg-no-repeat">
        <Particle />
      </div>

      <div className="absolute right-4 md:right-10 bottom-0 z-[10] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[560px] lg:h-[560px]">
        <Image
          src="/assets/man2.png"
          alt="man"
          fill
          className="object-contain transform scale-110 md:scale-125"
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 560px"
        />
      </div>

      <div className="flex flex-col gap-3 z-[10] px-4 md:pl-40 pt-20 text-center md:text-left w-full max-w-screen-md">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] text-white mx-auto md:mx-0">
          Новое видение в {" "}
          <span className="text-blue-500">Цифровую эру</span>
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[19px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 mx-auto md:mx-0 max-w-[400px]">
          Меня зовут Ралия, это сайт с использованием React и Next.js на версии 13.5.4. Я тщательно взвесила функциональность каждой версии и остановилась на той, что наиболее оптимально решает мои текущие задачи. Меня вдохновляет идея создавать интерактивный опыт, объединяющий технологии, творчество и пользовательское восприятие.
        </p>
      </div>
    </main>
  );
}

