import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
const Project = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 '>
            <motion.h2
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">Projects</motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img className="mb-6 rounded" width={150} height={150} src={project.image} alt={project.title} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description} </p>
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
    )
}

export default Project