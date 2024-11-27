import { HERO_CONTENT } from "../constants";
import profile_pic from "../assets/anhtuProfile.jpg"
import { motion } from "framer-motion"
import cvFile from "../assets/Đặng Mai Anh Tú - Intern Full-Stack Developer.pdf"
import { FaGithub } from "react-icons/fa";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: delay, duration: 0.5 }
    }
})
const Hero = () => {
    return (
        <section id="home">
            <div className="border-b border-neutral-900 pb-4 lg:mg-35 pt-28" id="home">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 sm:mb-5">
                        <div className="flex flex-col items-center lg:items-start">
                            <motion.h2
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className="pb-5 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                                Dang Mai Anh Tu
                            </motion.h2>
                            <motion.span
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text text-3xl text-transparent">
                                Full Stack Developer
                            </motion.span>
                            <motion.p
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>

                            <motion.div
                                variants={container(1.5)}
                                initial="hidden"
                                animate="visible"
                                className="flex gap-4 mt-4">
                                <button
                                    onClick={() => window.open(cvFile, '_blank')}
                                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md 
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    <span className="material-symbols-outlined">
                                        download
                                    </span> Download CV
                                </button>
                                <button
                                    onClick={() => window.open('https://github.com/anhtu2808', '_blank')}
                                    className="flex items-center gap-2 px-6 py-2 border border-neutral-700 rounded-md 
                                    transform transition-all duration-300 hover:scale-110 hover:bg-neutral-700 hover:shadow-xl">
                                    <FaGithub className="text-lg md:text-xl" /> GitHub
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center mt-8 lg:mt-0">
                            <motion.img
                                className="rounded"
                                variants={container(1.5)}
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                                src={profile_pic} alt="profile" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero;