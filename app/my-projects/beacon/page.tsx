"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BeaconPage() {
  const handleDownload = useCallback(() => {
    const audio = new Audio("/assets/projects/lighthouse.mp3");
    audio.play();

    const link = document.createElement("a");
    link.href = "/assets/projects/beacon.pdf"; 
    link.download = "beacon.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex justify-center bg-[#0C011A] py-12 min-h-screen">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Left: Large project image, делаю кликабельным */}
        <div
          onClick={handleDownload}
          className="cursor-pointer rounded-md overflow-hidden hover:opacity-80 transition duration-200"
        >
          <Image
            src="/assets/space/beacon.gif"
            alt="Beacon Project"
            width={600}
            height={600}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        {/* Right: Title, text, back arrow */}
        <div className="flex flex-col justify-start gap-6">
          <Link href="/my-projects" className="w-6">
            <Image
              src="/assets/icons/arrow-left1.svg"
              alt="Back to My Projects"
              width={24}
              height={24}
            />
          </Link>

          <h1 className="text-[40px] md:text-[35px] text-white font-semibold leading-tight">
            Дежурство на маяке
          </h1>

          <p className="text-[16px] text-gray-200 md:text-gray-400 whitespace-pre-line">
            Жанр: Атмосферный реалистичный хоррор, изоляция, тревожное ожидание

            {"\n\n"}Концепция:
            Молодой техник приезжает на заброшенный маяк, чтобы заменить старый генератор. Это его первое дежурство в полном одиночестве. Связь с материком нестабильна. В течение дня всё идёт штатно, но по ночам он замечает тревожные детали: следы босых ног на сырой земле, странные отблески фонарей, ощущение, что кто-то уже на острове. Только вот лодок он не видел. Шагов не слышал. Всё логично — и всё не так. С каждым днём он понимает: кто-то приближается.
            Но почему этот кто-то не заходит в маяк?.. Или уже зашёл?
          </p>
        </div>
      </div>
    </div>
  );
}
