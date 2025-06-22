import { apple, bill, google } from "../assets";
import coreStyles, { layout } from "../style";
import { motion } from "framer-motion";

const Invoicing = () => (
  <motion.section
    id="product"
    className={layout.sectionReverse}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 white__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={coreStyles.heading2}>
        Full Control Over Your <br className="sm:block hidden" /> Billing & Invoicing.
      </h2>
      <p className={`${coreStyles.paragraph} max-w-[470px] mt-5`}>
        Manage your financial workflows effortlessly. Our dashboard provides a clear overview of your billing, invoicing, and expenses, all in one secure place.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </motion.section>
);

export default Invoicing;
