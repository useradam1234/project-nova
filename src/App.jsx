import coreStyles from "./style";
import {
  Billing,
  Services,
  Offers,
  Clients,
  PromoBanner,
  PageFooter,
  Header,
  Statistics,
  CustomerReviews,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${coreStyles.paddingX} ${coreStyles.flexCenter}`}>
      <div className={`${coreStyles.boxWidth}`}>
        <Header />
      </div>
    </div>

    <div className={`bg-primary ${coreStyles.flexStart}`}>
      <div className={`${coreStyles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${coreStyles.paddingX} ${coreStyles.flexCenter}`}>
      <div className={`${coreStyles.boxWidth}`}>
        <Statistics />
        <Services />
        <Billing />
        <Offers />
        <CustomerReviews />
        <Clients />
        <PromoBanner />
        <PageFooter />
      </div>
    </div>
  </div>
);

export default App;
