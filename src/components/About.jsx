import { motion } from "framer-motion"
const About = () => {
    

    return (
        <section id="about" className="pt-20">
            <div className="border-b border-neutral-900 pb-4 lg:mg-35">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl">
                    About
                    <span className="text-neutral-500"> Me</span>
                </motion.h2>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="mt-12">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="stats-box group">
                            <div className="stats-icon">🎓</div>
                            <h3 className="text-xl font-bold text-neutral-200 group-hover:text-white">Education</h3>
                            <p className="text-neutral-400 group-hover:text-neutral-300">FPT University</p>
                        </div>
                        <div className="stats-box group cursor-pointer" onClick={() => window.location.href = '/#work'}>
                            <div className="stats-icon">⚡</div>
                            <h3 className="text-xl font-bold text-neutral-200 group-hover:text-white">Experience</h3>
                            <p className="text-neutral-400 group-hover:text-neutral-300">
                                <span className="highlight-number">1+</span> Years of Development
                            </p>
                        </div>
                        <div className="stats-box group cursor-pointer" onClick={() => window.location.href = '/#project'}>
                            <div className="stats-icon">🚀</div>
                            <h3 className="text-xl font-bold text-neutral-200 group-hover:text-white">Projects</h3>
                            <p className="text-neutral-400 group-hover:text-neutral-300">
                                <span className="highlight-number">7+</span> Projects
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
           
        </section>
    )
}

export default About