import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"

const Project = () => {
    return (
        <section id="project" className="pt-10 md:pt-20">
            <div className='border-b border-neutral-900 pb-4'>
                <motion.h2
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="my-10 md:my-20 text-center text-3xl md:text-4xl">Projects</motion.h2>
                <div>
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="mb-6 md:mb-8 flex flex-wrap lg:justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-2/5 px-4 md:px-6">
                                <div className="relative pt-[56.25%]">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-lg mb-4 md:mb-6"
                                        src={`${project.video}`}
                                        title={project.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-xl lg:w-3/5 px-4 md:px-6">
                                <h6 className="mb-2 font-semibold text-lg md:text-xl">{project.title}</h6>
                                <p className="mb-4 text-neutral-400 text-sm md:text-base">{project.description}</p>
                                <div className="flex gap-2 md:gap-4 mb-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors"
                                    >
                                        <FaGithub className="text-lg md:text-xl" />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-md bg-purple-800 hover:bg-purple-700 transition-colors"
                                    >
                                        <BiLinkExternal className="text-lg md:text-xl" />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                                {project.technologies.map((technology, index) => (
                                    <span key={index} className="mr-2 rounded-md bg-neutral-900 px-2 py-1 font-medium text-sm text-purple-800">
                                        {technology}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project