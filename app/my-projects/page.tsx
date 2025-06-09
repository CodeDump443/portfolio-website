import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]">

      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold">
          Мои идеи<span className="text-blue-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
          Это меню с моими идеями. Здесь будут собираться и постепенно дополняться мои идеи{" "}
          <span className="font-bold text-[#BFC4CC]">для будущих проектов:</span> Пока что присутствуют, только{" "}
          <span className="font-bold text-[#BFC4CC]">два из них</span> и они уже оформлены в виде описаний. В основном это будут сюжетные игры с атмосферой, акцентом на переживаниях персонажей и необычных ситуациях. В будущем я планирую выкладывать ссылки на готовые версии этих проектов — на платформах, где размещают инди-игры. Так что со временем здесь появятся и переходы на страницы игр, где можно будет посмотреть подробнее, поиграть или оставить отзыв.
        </p>


      </div>
      <ProjectSlider /> 
    </div>
  );
};

export default Page;
