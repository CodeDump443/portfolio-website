import ServiceSlider from '@/components/ServiceSlider';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row items-start md:items-center bg-[#0C011A] min-h-screen overflow-hidden relative'>

      {/* Левый блок с текстом */}
      <div className='w-full md:w-1/2 px-6 md:px-60 pt-10 md:pt-0 pb-6 md:pb-0 z-10'>
        <h1 className="text-[28px] sm:text-[36px] md:text-[50px] text-white font-semibold">
          My goals<span className="text-blue-500">.</span>
        </h1>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-200 md:text-gray-400 max-w-[350px] mt-4">
          В своей будующей работе я стремлюсь постепенно развиваться в разных направлениях, связанных с созданием игр. Мне интересно лучше понять, как устроены игровые среды, научиться уверенно работать с кодом и создавать увлекательные истории. Я хочу разобраться, как продумываются внутренние механики и сделать игровой процесс понятным и приятным для пользователя. Со временем надеюсь найти свой подход и стиль, чтобы проекты чувствовались живыми и самобытными. Справа карточки с шагами, которые необходимо проделать ради достижения цели.
        </p>
      </div>

      {/* Слайдер */}
      <div className='w-full md:w-1/2 px-6 md:px-0 md:pr-20 z-10 mt-2 md:mt-0'>
        <div className='w-full max-w-[600px] mx-auto md:mx-0'>
          <ServiceSlider />
        </div>
      </div>

      {/* Лампочка (только на десктопе) */}
      <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75 hidden md:block z-0'>
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
