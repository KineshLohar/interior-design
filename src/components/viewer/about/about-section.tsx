import Image from "next/image"

const Card = ({ title, value }: { title: string; value: string; }) => (
    <div className="flex flex-col items-center  justify-center ">
        <div className="text-3xl  font-bold">
            {value}
        </div>
        <div className="text-lg sm:text-xl font-medium sm:tracking-wider">
            {title}
        </div>
    </div>
)

export const AboutSection = () => {
    return (
        <section className="relative w-full flex flex-col-reverse gap-10 items-stretch justify-start md:flex-row md:items-stretch text-center bg-gradient-to-tl from-[#F4ECF7] via-[#E4D4C8] to-[#F4ECF7] text-black md:min-h-screen p-4 py-16 sm:p-8 pb-24 sm:pt-16 sm:pb-24 md:p-12 md:py-24 lg:p-24">
            <div className="relative w-full md:w-6/12 h-[300px] min-[400px]:h-[400px] min-[450px]:h-[500px] md:h-[450px] transition-all duration-300 ">
                <Image
                    src="/background.jpeg"
                    alt="Profile Picture of Kinesh Lohar"
                    fill
                    className=" object-cover object-right transition-all duration-300"
                />
            </div>
            <div className="relative w-full md:w-6/12 md:min-h-full text-right flex flex-col justify-center">
                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6 xl transition-normal duration-300">
                    Get to Know Us
                </h2>
                <p className="mt-4 font-lato text-neutral-800">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vero voluptatibus officiis. Nostrum illum magnam consectetur natus quasi delectus, consequatur magni reiciendis nihil fugit! Aut tempora adipisci sint soluta corporis.
                </p>
                <div className="ml-auto flex justify-end items-center gap-4 sm:gap-6 mt-8 md:mt-12">
                    <Card
                        title="Years of Experience"
                        value="20+"
                    />
                    <Card
                        title="Projects Completed"
                        value="20+"
                    />
                </div>
            </div>
        </section>
    )
}