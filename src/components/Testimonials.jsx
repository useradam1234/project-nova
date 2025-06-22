import { feedback } from "../constants";
import coreStyles from "../style";
import TestimonialCard from "./FeedbackCard";
import { motion } from "framer-motion";

const CustomerReviews = () => (
  <motion.section
    id="clients"
    className={`${coreStyles.paddingY} ${coreStyles.flexCenter} flex-col relative `}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full orange__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={coreStyles.heading2}>
        Trusted by Innovators <br className="sm:block hidden" /> and Entrepreneurs
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${coreStyles.paragraph} text-left max-w-[450px]`}>
          See how leading businesses are leveraging Nova to streamline payments, enhance security, and accelerate their growth.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <TestimonialCard key={card.id} {...card} />)}
    </div>
  </motion.section>
);

export default CustomerReviews;
