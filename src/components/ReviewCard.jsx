import PropTypes from "prop-types";
const ReviewCard = ({ content, name, image, company }) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] min-h-[470px] flex flex-col gap-4 lg:min-w-[600px]">
            <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                    <span 
                        key={index} 
                        className="text-yellow-300 text-[18px]"
                    >
                        ★
                    </span>
                ))}
            </div>
            <p className=" text-zinc-400 mb-8">
                {content}
            </p>
            <div className="flex items-center gap-2 mt-auto">
                <figure className=" img-box rounded-lg">
                    <img
                        src={image}
                        alt={name}
                        width={44}
                        height={44}
                        loading="lazy"
                        className="img-cover"
                    />
                </figure>
                <div>
                    <p >
                        {name}
                    </p>
                    <p className="text-xs text-zinc-400 tracking-wider">
                        {company}
                    </p>
                </div>
            </div>

        </div>


    )
}

ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default ReviewCard