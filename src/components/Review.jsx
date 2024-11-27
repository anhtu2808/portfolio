import { motion } from "framer-motion"
import ReviewCard from "./ReviewCard";
import { REVIEWS } from "../constants";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP,ScrollTrigger)

const Review = () => {

    useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: ".scrub-slide",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
            },
            x: '-200'
        })
    })
    return (
        <section id="review" className="pt-20">
            <div className='border-b border-neutral-900 pb-4 '>
                <motion.h2
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="my-20 text-center text-4xl">
                    What my customers say
                </motion.h2>
                <div className="scrub-slide flex items-stretch gap-3 w-fit ">
                    {REVIEWS.map(({ content, name, image, company }, index) => (
                        <ReviewCard key={index} content={content} name={name} image={image} company={company} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Review;