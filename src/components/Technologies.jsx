import { BiLogoRedux } from "react-icons/bi"
import { RiReactjsLine } from "react-icons/ri"
import { SiGithubactions, SiMicrosoftsqlserver, SiMysql, SiSpringboot } from "react-icons/si"
import { motion } from "framer-motion"
import { BsWordpress } from "react-icons/bs"
import { FaAws } from "react-icons/fa"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
const Technologies = () => {
    return (
        <section id="technology" className="pt-20">
            <div className="border-b border-neutral-900 pb-24 ">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl">
                    Technology
                </motion.h2>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <BiLogoRedux className="text-7xl text-purple-400" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <BsWordpress className="text-7xl text-blue-400" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiSpringboot className="text-7xl text-green-400" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMysql className="text-7xl text-blue-400" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMicrosoftsqlserver className="text-7xl text-red-400" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiGithubactions className="text-7xl text-blue-400" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaAws className="text-7xl text-orange-400" />
                    </motion.div>


                </motion.div>
            </div>
        </section>
    )
}

export default Technologies