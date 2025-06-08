"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AsylimPage() {
  const handleDownload = useCallback(() => {
    const audio = new Audio("/assets/projects/laugh.mp3");
    audio.play();

    const link = document.createElement("a");
    link.href = "/assets/projects/asylim.pdf";
    link.download = "psycho-idea.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex justify-center bg-[#0C011A] py-12 min-h-screen">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Left: Large project GIF — делаю кликабельным */}
        <div
          onClick={handleDownload}
          className="cursor-pointer rounded-md overflow-hidden hover:opacity-80 transition duration-200"
        >
          <Image
            src="/assets/projects/asylim.gif"
            alt="Asylim Project"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Text, back arrow, и просто статичная гифка без клика */}
        <div className="flex flex-col justify-start gap-6">
          <Link href="/my-projects" className="w-6">
            <Image
              src="/assets/icons/arrow-left1.svg"
              alt="Back to My Projects"
              width={24}
              height={24}
            />
          </Link>

          <h1 className="text-[35px] text-white font-semibold">
            Пациент с обратной стороны зеркала
          </h1>

          <p className="text-[16px] text-gray-200 md:text-gray-400 whitespace-pre-line">
            Жанр: Психологический хоррор, медицинская тематика, паранормальное

            {"\n\n"}Концепция:
            В психиатрическую клинику доставляют таинственного пациента без документов. Он утверждает, что не человек, а &quot;ошибка отражения&quot; — существо, случайно вырвавшееся из зеркального мира во время психиатрического эксперимента.
            Он ведёт себя спокойно, но отражения ведут себя иначе: движутся с опозданием, улыбаются в неподходящие моменты, иногда просто исчезают. Медперсонал сначала списывает это на усталость… пока зеркала не начинают действовать сами.
            Клиника становится ловушкой между двумя мирами, а пациент — не заключённый, а проводник.
          </p>
        </div> 
      </div> 
    </div> 
  );
}
