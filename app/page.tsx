// Импорт анимации частиц из компонента Particle
import Particle from "@/components/Particle";

// Импорт компонента Image от Next.js для оптимизированной загрузки изображений
import Image from "next/image";

// Основной компонент главной страницы
export default function Home() {
  return (
    // Главный контейнер, занимает всю высоту экрана, с фоном и позиционированием элементов
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/night-blue-sky.png')]">

      {/* Анимация частиц, размещена справа и поверх фона */}
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>

      {/* Изображение персонажа (мужчина), позиционируется снизу справа */}
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/man2.png" // путь к изображению
          alt="man"              // альтернативный текст
          width={560}            // оригинальная ширина
          height={560}           // оригинальная высота
          className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]" // адаптивный размер
        />
      </div>

      {/* Текстовая часть: заголовок и параграф с описанием */}
      <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
        <h1 className="text-[50px] text-white max-w-[500px]">
          Visionary Thinking in the{" "}
          <span className="text-blue-500">Digital Age</span>
        </h1>

        <p className="text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
          Меня зовут Ралия, и я изучаю, как работают современные цифровые инструменты.
          Меня вдохновляет идея создавать интерактивный опыт, объединяющий технологии, 
          творчество и пользовательское восприятие.
        </p>
      </div>
    </main>
  );
}
