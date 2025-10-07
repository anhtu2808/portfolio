import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <section id="work" className="pt-20">
            <div className="border-b border-neutral-900 pb-4 lg:mg-35">
                <motion.h2
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl">Experience</motion.h2>
                <div>
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">
                                    {experience.role} - {" "}
                                    <span className="text-purple-100">
                                        {experience.company}
                                    </span>
                                </h6>
                                <p className="mb-4 text-neutral-400">{experience.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {experience.technologies.map((technology, index) => (
                                        <span key={index} className="mr-0 rounded-md bg-neutral-900 px-2 py-1 font-medium text-sm text-purple-300">
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>


                    ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Experience