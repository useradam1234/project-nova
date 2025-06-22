import { features } from "../constants";
import coreStyles, { layout } from "../style";
import ActionButton from "./ActionButton";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${coreStyles.flexCenter} bg-dimOrange`}>
      <img src={icon} alt="feature icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Services = () => (
  <motion.section
    id="features"
    className={layout.section}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className={layout.sectionInfo}>
      <h2 className={coreStyles.heading2}>
        Focus on Your Business, <br className="sm:block hidden" /> We'll Handle the Finances.
      </h2>
      <p className={`${coreStyles.paragraph} max-w-[470px] mt-5`}>
        Let our intelligent platform streamline your financial operations. From building business credit to maximizing rewards and savings, we provide the tools you need to thrive in a competitive market.
      </p>

      <ActionButton extraStyles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </motion.section>
);

export default Services;
