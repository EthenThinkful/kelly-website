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
    </>
  );
}

export default HomePage;
