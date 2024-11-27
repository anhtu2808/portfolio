import { BiLogoRedux } from "react-icons/bi"
import { RiReactjsLine } from "react-icons/ri"
import { SiGithubactions, SiMicrosoftsqlserver, SiMysql, SiSpringboot } from "react-icons/si"
import { motion } from "framer-motion"
import { BsWordpress } from "react-icons/bs"
import { FaAws } from "react-icons/fa"
import PropTypes from "prop-types"

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

const TechnologyIcon = ({ Icon, name, duration, color }) => (
    <motion.div
        variants={iconVariants(duration)}
        initial="initial"
        animate="animate"
        className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
        <Icon className={`text-7xl ${color}`} />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-800 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            {name}
        </div>
    </motion.div>
)

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
                    <TechnologyIcon Icon={RiReactjsLine} name="React" duration={2.5} color="text-cyan-400" />
                    <TechnologyIcon Icon={BiLogoRedux} name="Redux" duration={4} color="text-purple-400" />
                    <TechnologyIcon Icon={BsWordpress} name="WordPress" duration={3} color="text-blue-400" />
                    <TechnologyIcon Icon={SiSpringboot} name="Spring Boot" duration={2.5} color="text-green-400" />
                    <TechnologyIcon Icon={SiMysql} name="MySQL" duration={3} color="text-blue-400" />
                    <TechnologyIcon Icon={SiMicrosoftsqlserver} name="SQL Server" duration={2.5} color="text-red-400" />
                    <TechnologyIcon Icon={SiGithubactions} name="GitHub Actions" duration={4} color="text-blue-400" />
                    <TechnologyIcon Icon={FaAws} name="AWS" duration={3} color="text-orange-400" />
                </motion.div>
            </div>
        </section>
    )
}

TechnologyIcon.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export default Technologies