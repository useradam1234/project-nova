import coreStyles from "../style";
import { discount } from "../assets";
import CircularCTA from "./GetStarted";
import BlockchainAnimation from "./BlockchainAnimation";

const HeroSection = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${coreStyles.paddingY}`}>
      <div className={`flex-1 ${coreStyles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${coreStyles.paragraph} ml-2`}>
            <span className="text-white">Special Offer:</span> 20% Off Your{" "}
            <span className="text-white">First Month</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Smarter Payments, <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Future-Ready</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <CircularCTA />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Solutions.
        </h1>
        <p className={`${coreStyles.paragraph} max-w-[470px] mt-5`}>
          Our platform unifies your financial tools, offering smarter credit solutions and insights. We analyze the market to bring you the best rates and lowest fees, tailored to your goals.
        </p>
      </div>

      <div className={`flex-1 flex ${coreStyles.flexCenter} md:my-0 my-10 relative`}>
        <BlockchainAnimation />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 orange__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${coreStyles.flexCenter}`}>
        <CircularCTA />
      </div>
    </section>
  );
};

export default HeroSection;
