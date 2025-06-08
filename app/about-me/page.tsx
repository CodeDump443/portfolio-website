import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-[#0C011A] h-screen overflow-hidden relative'>

      {/* Текстовый блок */}
      <div className='pl-4 sm:pl-6 md:pl-60 flex flex-col gap-3 pb-20 md:pb-0'>
        <h1 className="text-[28px] sm:text-[36px] md:text-[50px] text-white font-semibold">
          My goals<span className="text-blue-500">.</span>
        </h1>
        <p className="max-w-[90%] sm:max-w-[350px] text-[14px] sm:text-[16px] md:text-[16px] text-gray-200 md:text-gray-400">
          В своей будующей работе я стремлюсь постепенно развиваться в разных направлениях, связанных с созданием игр. Мне интересно лучше понять, как устроены игровые среды, научиться уверенно работать с кодом и создавать увлекательные истории. Я хочу разобраться, как продумываются внутренние механики и сделать игровой процесс понятным и приятным для пользователя. Со временем надеюсь найти свой подход и стиль, чтобы проекты чувствовались живыми и самобытными. Справа карточки с шагами, которые необходимо проделать ради достижения цели.
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
      <div className='w-full md:w-auto md:ml-20 mt-6 md:mt-0'>
        <ServiceSlider />
      </div>
    </div>
  )
}

export default Page
