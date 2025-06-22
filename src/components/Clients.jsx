import { clients } from "../constants";
import coreStyles from "../style";

const Partners = () => (
  <section className={`${coreStyles.flexCenter} my-4`}>
    <div className="marquee">
      <div className="marquee-content">
        {clients.concat(clients).map((client, index) => (
          <div key={`${client.id}-${index}`} className={`flex-shrink-0 ${coreStyles.flexCenter} sm:min-w-[192px] min-w-[120px] mx-10`}>
            <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
