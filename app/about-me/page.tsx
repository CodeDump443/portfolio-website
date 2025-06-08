import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <>
      {/* Мобильная версия: flex-col, без изменений */}
      <div className='flex flex-col items-start bg-[#0C011A] min-h-screen overflow-hidden px-6 pt-10 pb-10 md:hidden relative'>
        <h1 className="text-[28px] sm:text-[36px] text-white font-semibold max-w-full">
          My goals<span className="text-blue-500">.</span>
        </h1>
        <p className="text-[14px] sm:text-[15px] text-gray-200 max-w-[350px] mt-4">
          В своей будующей работе я стремлюсь постепенно развиваться в разных направлениях, связанных с созданием игр. Мне интересно лучше понять, как устроены игровые среды, научиться уверенно работать с кодом и создавать увлекательные истории. Я хочу разобраться, как продумываются внутренние механики и сделать игровой процесс понятным и приятным для пользователя. Со временем надеюсь найти свой подход и стиль, чтобы проекты чувствовались живыми и самобытными. Справа карточки с шагами, которые необходимо проделать ради достижения цели.
        </p>
        <div className='w-full mt-5'>
          <ServiceSlider />
        </div>
      </div>

      {/* Десктопная версия: flex row, как в твоём примере */}
      <div className='hidden md:flex items-center bg-[#0C011A] h-screen overflow-hidden relative'>
        <div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0 max-w-[400px]'>
          <h1 className="text-[50px] text-white font-semibold">
            My goals<span className="text-blue-500">.</span>
          </h1>
          <p className="max-w-[350px] text-[16px] text-gray-200 md:text-gray-400">
            В своей будующей работе я стремлюсь постепенно развиваться в разных направлениях, связанных с созданием игр. Мне интересно лучше понять, как устроены игровые среды, научиться уверенно работать с кодом и создавать увлекательные истории. Я хочу разобраться, как продумываются внутренние механики и сделать игровой процесс понятным и приятным для пользователя. Со временем надеюсь найти свой подход и стиль, чтобы проекты чувствовались живыми и самобытными.Справа карточки с шагами, которые необходимо проделать ради достижения цели.
          </p>
        </div>
        <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75'>
          <Image
            src="/assets/bulb.png"
            alt='bulb'
            width={260}
            height={260}
            className='w-full h-full'
          />
        </div>
        <div className='ml-12 w-full max-w-[700px]'>
          <ServiceSlider />
        </div>
      </div>
    </>
  )
}

export default Page

