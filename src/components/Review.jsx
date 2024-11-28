import { motion } from "framer-motion"
import ReviewCard from "./ReviewCard";
import { REVIEWS } from "../constants";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP,ScrollTrigger)

const Review = () => {

    return (
        <section id="review" className="pt-20">
            <div className='border-b border-neutral-900 pb-4'>
                <motion.h2
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="my-20 text-center text-4xl">
                    What my customers say
                </motion.h2>
                <div className="overflow-x-auto  custom-scrollbar">
                    <motion.div 
                        className="flex items-stretch gap-3 w-fit scrub-slide pb-4"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ 
                            duration: 0.8,
                            staggerChildren: 0.2
                        }}
                    >
                        {REVIEWS.map(({ content, name, image, company }, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <ReviewCard content={content} name={name} image={image} company={company} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Review;