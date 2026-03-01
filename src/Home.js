import "./Home.css";
import Product from "./Product";
import banner from "./banner.jpeg";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img src={banner} alt="" className="home__image" />

          <div className="home__row">
            <Product
              id="1"
              title="JULIETTE SHOULDER BAG TAN/COGNAC"
              price={11.96}
              rating={5}
              image="https://picsum.photos/seed/bag1/360/360"
            />

            <Product
              id="2"
              title="AMELIA CROSSBODY BAG BLACK"
              price={14.99}
              rating={4}
              image="https://picsum.photos/seed/bag2/360/360"
            />
          </div>
          <div className="home__row">
            <Product
              id="3"
              title="HARPER TOTE BAG CREAM"
              price={18.5}
              rating={5}
              image="https://picsum.photos/seed/bag3/360/360"
            />
            <Product
              id="4"
              title="EVELYN MINI BAG BURGUNDY"
              price={9.75}
              rating={4}
              image="https://picsum.photos/seed/bag4/360/360"
            />
            <Product
              id="5"
              title="ISABELLA SHOULDER BAG TAUPE"
              price={16.2}
              rating={5}
              image="https://picsum.photos/seed/bag5/360/360"
            />
          </div>
          <div className="home__row">
            <Product
              id="6"
              title="CHARLOTTE HANDBAG NAVY"
              price={21.0}
              rating={4}
              image="https://picsum.photos/seed/bag6/360/360"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
