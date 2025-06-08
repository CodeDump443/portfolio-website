import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-[#0C011A] h-screen overflow-hidden px-4 md:px-0 relative'>
      <div className='pt-20 md:pl-60 md:pt-0 flex flex-col gap-3 md:pb-0 text-center md:text-left'>
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] text-white font-semibold">
          My goals<span className="text-blue-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[15px] sm:text-[16px] text-gray-200 md:text-gray-400 mx-auto md:mx-0">
          В своей будующей работе я стремлюсь постепенно развиваться в разных направлениях, связанных с созданием игр. Мне интересно лучше понять, как устроены игровые среды, научиться уверенно работать с кодом и создавать увлекательные истории. Я хочу разобраться, как продумываются внутренние механики и сделать игровой процесс понятным и приятным для пользователя. Со временем надеюсь найти свой подход и стиль, чтобы проекты чувствовались живыми и самобытными. Справа карточки с шагами, которые необходимо проделать ради достижения цели.
        </p>
      </div>

      <div className='absolute -left-20 bottom-5 rotate-12 hidden md:block'>
        <Image
          src="/assets/bulb.png"
          alt='bulb'
          width={260}
          height={260}
          className='w-full h-full'
        />
      </div>

      <div className="w-full mt-10 md:mt-0">
        <ServiceSlider />
      </div>
    </div>
  )
}

export default Page
