import { stats } from "../constants";
import coreStyles from "../style";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Statistics = () => (
  <motion.section
    className={`${coreStyles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ staggerChildren: 0.2 }}
  >
    {stats.map((stat) => (
      <motion.div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          <CountUp
            end={parseFloat(stat.value.replace(/[^0-9.]/g, ""))}
            duration={2.5}
            separator=","
            decimals={stat.value.includes('M') ? 1 : 0}
            prefix={stat.value.includes('$') ? '$' : ''}
            suffix={stat.value.includes('M+') ? "M+" : stat.value.includes('+') ? "+" : ""}
            enableScrollSpy={true}
            scrollSpyOnce={true}
          />
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-blue-gradient uppercase ml-3">
          {stat.title}
        </p>
      </motion.div>
    ))}
  </motion.section>
);

export default Statistics;
