import ServiceSlider from '@/components/ServiceSlider' 
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-[#0C011A] min-h-screen overflow-hidden'>

      {/* Основной контейнер, flex-col на мобилке, flex-row на ПК */}
      <div className="flex flex-col md:flex-row items-center h-screen relative">

        {/* Текстовый блок с отступами */}
        <div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0 max-w-[350px] md:max-w-none md:w-auto'>
          <h1 className="text-[50px] text-white font-semibold">
            My goals<span className="text-blue-500">.</span>
          </h1>
          <p className="text-[16px] text-gray-200 md:text-gray-400">
            В своей будующей работе я стремлюсь постепенно развиваться в разных направлениях, связанных с созданием игр. Мне интересно лучше понять, как устроены игровые среды, научиться уверенно работать с кодом и создавать увлекательные истории. Я хочу разобраться, как продумываются внутренние механики и сделать игровой процесс понятным и приятным для пользователя. Со временем надеюсь найти свой подход и стиль, чтобы проекты чувствовались живыми и самобытными.Справа карточки с шагами, которые необходимо проделать ради достижения цели.
          </p>
        </div>

        {/* Абсолютная лампочка слева, только на ПК */}
        <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75 hidden md:block z-0'>
          <Image
            src="/assets/bulb.png"
            alt='bulb'
            width={260}
            height={260}
            className='w-full h-full'
          />
        </div>

        {/* Слайдер — на мобилке под текстом, на ПК справа с нужными отступами */}
        <div className='w-full md:w-auto md:ml-auto px-6 md:px-0 mt-6 md:mt-0 max-w-[700px]'>
          <ServiceSlider />
        </div>

      </div>
    </div>
  )
}

export default Page
