import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-[#0C011A] h-screen overflow-hidden relative'>

      {/* Текстовый блок */}
      <div className='pl-4 sm:pl-6 md:pl-60 flex flex-col gap-3 pb-20 md:pb-0
                      pt-10 sm:pt-12 md:pt-0
                      order-none md:order-first
                      w-full md:w-auto'>
        <h1 className="text-[28px] sm:text-[36px] md:text-[50px] text-white font-semibold">
          Мои цели <span className="text-blue-500">.</span>
        </h1>
        <p className="max-w-[90%] sm:max-w-[350px] text-[14px] sm:text-[16px] md:text-[16px] text-gray-200 md:text-gray-400">
          В своей будующей работе я стремлюсь постепенно развиваться в разных направлениях, связанных с созданием{" "}
          <span className="font-bold text-[#BFC4CC]">игр</span> и{" "}
          <span className="font-bold text-[#BFC4CC]">образовательно-развлекательных приложений</span>. Мне интересно лучше понять, как устроены игровые среды, научиться уверенно работать с кодом и создавать увлекательные истории. Я хочу разобраться, как продумываются внутренние механики и сделать{" "}
          <span className="font-bold text-[#BFC4CC]">игровой процесс понятным</span> и{" "}
          <span className="font-bold text-[#BFC4CC]">приятным для пользователя</span>. Со временем надеюсь найти свой{" "}
          <span className="font-bold text-[#BFC4CC]">подход</span> и{" "}
          <span className="font-bold text-[#BFC4CC]">стиль</span>, чтобы проекты чувствовались живыми и самобытными. Справа карточки с{" "}
          <span className="font-bold text-[#BFC4CC]">шагами</span>, которые необходимо проделать ради достижения{" "}
          <span className="font-bold text-[#BFC4CC]">цели</span>.
        </p>

      </div>

      {/* Лампочка (только на ПК) */}
      <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75 hidden md:block'>
        <Image
          src="/assets/bulb.png"
          alt='bulb'
          width={260}
          height={260}
          className='w-full h-full'
        />
      </div>

      {/* Слайдер */}
      <div className='w-full md:w-auto
                      mt-4 sm:mt-6 md:mt-0
                      md:ml-20
                      flex justify-center'>
        <div className='w-[90%] sm:w-[80%] md:w-auto
                        scale-95 sm:scale-100 md:scale-100'>
          <ServiceSlider />
        </div>
      </div>
    </div>
  )
}

export default Page
