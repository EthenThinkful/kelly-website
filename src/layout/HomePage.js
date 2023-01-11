import Carousel from "./Carousel";
import Intro from "./Intro";
import CardsContainer from "./CardsContainer";

function HomePage() {
  return (
    <>
      <div className="container-intro mx-auto mb-8 px-8">
        <Intro />
      </div>
      <div className="container-intro mx-auto mb-8 px-8">
        <CardsContainer />
      </div>
      <div className="container-carousel mx-auto mb-8 px-8">
        <Carousel />
      </div>
    </>
  );
}

export default HomePage;
