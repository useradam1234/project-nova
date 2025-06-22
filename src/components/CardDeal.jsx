import { card } from "../assets";
import coreStyles, { layout } from "../style";
import ActionButton from "./ActionButton";
import { motion } from "framer-motion";

const Offers = () => (
  <motion.section
    className={layout.section}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className={layout.sectionInfo}>
      <h2 className={coreStyles.heading2}>
        Discover Your Perfect Card <br className="sm:block hidden" /> in Minutes.
      </h2>
      <p className={`${coreStyles.paragraph} max-w-[470px] mt-5`}>
        Our smart recommendation engine helps you find the ideal credit card for your needs. Answer a few simple questions and unlock personalized offers designed to save you money.
      </p>

      <ActionButton extraStyles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Card Offer" className="w-[100%] h-[100%]" />
    </div>
  </motion.section>
);

export default Offers;
