import Image from 'next/image';
import { interiorDesignProjects } from './projects';

export const ProjectsList = () => {
    return (
        <section className="relative w-full bg-gradient-to-tr from-[#F4ECF7] via-[#E4D4C8] to-[#F4ECF7] text-black bg-transparent p-4 min-h-screen sm:p-8 py-28 md:p-12 lg:p-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {
                interiorDesignProjects?.map((project, i) => (
                    <div key={i} className='reveal relative w-full border border-neutral-400/40 bg-[#F4F4F4]/50'>
                        <div className='relative w-full h-52'>
                            <Image
                                src={project?.thumbnail}
                                alt={project?.title}
                                fill
                                className=' object-cover'
                            />
                        </div>
                        <div className='w-full flex flex-col gap-2 items-center justify-center py-8 text-center font-lato'>
                            <h3 className='text-xl text-[#8d7028] font-medium tracking-wide'>
                                {project?.title}
                            </h3>
                            <p className='italic opacity-50'>
                                {project?.location}
                            </p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}