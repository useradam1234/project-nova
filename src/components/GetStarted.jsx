import coreStyles from "../style";
import { arrowUp } from "../assets";

const CircularCTA = () => (
  <div className={`${coreStyles.flexCenter} w-[140px] h-[140px] rounded-full bg-orange-gradient p-[2px] cursor-pointer hover:opacity-90 transition-opacity duration-300`}>
    <div className={`${coreStyles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${coreStyles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default CircularCTA;
