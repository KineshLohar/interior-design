import allServices from '@/constant/services.json';
import Image from 'next/image';

export const ServicesList = () => {
    return (
        <section className="relative w-full bg-gradient-to-tr from-[#F4ECF7] via-[#E4D4C8] to-[#F4ECF7] text-black bg-transparent p-4 min-h-screen sm:p-8 py-28 md:p-12 lg:p-24
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-16
        ">
            {
                allServices?.map(item => (
                    <div key={item?.id}
                        className='reveal flex flex-col items-stretch tracking-wide '
                    >
                        <div className='relative w-full h-48 overflow-hidden'>
                            <Image
                                src={item?.image}
                                alt={item?.title}
                                fill
                                className='object-center object-cover hover:scale-105 transition duration-200'
                            />
                        </div>
                        <h3 className='mt-4 mb-2 font-bold font-lato text-xl'>{item?.title}</h3>
                        <p className='font-lato'>{item?.description}</p>
                    </div>
                ))
            }
        </section>
    )
}