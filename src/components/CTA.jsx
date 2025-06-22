import coreStyles from "../style";
import ActionButton from "./ActionButton";
import { motion } from "framer-motion";

const PromoBanner = () => (
  <motion.section
    className={`${coreStyles.flexCenter} ${coreStyles.marginY} ${coreStyles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={coreStyles.heading2}>Ready to Elevate Your Finances?</h2>
      <p className={`${coreStyles.paragraph} max-w-[470px] mt-5`}>
        Join thousands of satisfied users and take the first step towards smarter, more secure payment solutions today.
      </p>
    </div>

    <div className={`${coreStyles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ActionButton />
    </div>
  </motion.section>
);

export default PromoBanner;
