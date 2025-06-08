import ServiceSlider from '@/components/ServiceSlider';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row items-start md:items-center bg-[#0C011A] min-h-screen overflow-hidden relative px-6 md:px-20 py-10 md:py-0'>

      {/* Левый блок с текстом */}
      <div className='flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left z-10'>
        <h1 className="text-[28px] sm:text-[36px] md:text-[50px] text-white font-semibold leading-tight">
          My goals<span className="text-blue-500">.</span>
        </h1>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-200 md:text-gray-400 max-w-[400px] mx-auto md:mx-0">
          В своей будующей работе я стремлюсь постепенно развиваться в разных направлениях, связанных с созданием игр. Мне интересно лучше понять, как устроены игровые среды, научиться уверенно работать с кодом и создавать увлекательные истории. Я хочу разобраться, как продумываются внутренние механики и сделать игровой процесс понятным и приятным для пользователя. Со временем надеюсь найти свой подход и стиль, чтобы проекты чувствовались живыми и самобытными. Справа карточки с шагами, которые необходимо проделать ради достижения цели.
        </p>
      </div>

      {/* Слайдер */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 order-last md:order-none mt-10 md:mt-0">
        <div className="w-full max-w-[100%] sm:max-w-[90%] md:max-w-[600px] scale-100 transition-all duration-300">
          <ServiceSlider />
        </div>
      </div>

      {/* Лампочка */}
      <div className='absolute -left-20 bottom-5 rotate-12 hidden md:block z-0'>
        <Image
          src="/assets/bulb.png"
          alt='bulb'
          width={260}
          height={260}
          className='w-full h-full'
        />
      </div>
    </div>
  );
};

export default Page;
