import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex items-center bg-[#0C011A] h-screen overflow-hidden'>

      {/* Текстовый блок с отступами слева и гибкой шириной */}
      <div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0 max-w-full md:max-w-none'>
        <h1 className="text-[50px] text-white font-semibold">
          My goals<span className="text-blue-500">.</span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-gray-400 max-w-[350px] md:max-w-none">
          В своей будующей работе я стремлюсь постепенно развиваться в разных направлениях, связанных с созданием игр. Мне интересно лучше понять, как устроены игровые среды, научиться уверенно работать с кодом и создавать увлекательные истории. Я хочу разобраться, как продумываются внутренние механики и сделать игровой процесс понятным и приятным для пользователя. Со временем надеюсь найти свой подход и стиль, чтобы проекты чувствовались живыми и самобытными.Справа карточки с шагами, которые необходимо проделать ради достижения цели.
        </p>
      </div>

      {/* Лампочка слева снизу, только на ПК */}
      <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75 hidden md:block'>
        <Image
          src="/assets/bulb.png"
          alt='bulb'
          width={260}
          height={260}
          className='w-full h-full'
        />
      </div>

      {/* Слайдер справа, без ограничений по ширине */}
      <div className='flex-1 max-w-full md:max-w-none md:ml-auto px-6 md:px-0'>
        <ServiceSlider />
      </div>

    </div>
  )
}

export default Page

