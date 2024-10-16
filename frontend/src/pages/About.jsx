import api from "../services/axios";
import { json, useLoaderData } from "react-router-dom";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import House from "../assets/images/House.jpg";

const About = () => {
  const loaderData = useLoaderData();
  const topsellers = loaderData.topsellers || [];
  const realtors = loaderData.realtors || [];

  const getAllRealtors = () => {
    let allRealtors = [];
    let results = [];

    realtors.forEach((realtor) => {
      allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about__display">
            <img src={realtor.photo} alt="" className="about__display__imgae" />
          </div>

          <h3 className="about__realtor">{realtor.name}</h3>
          <p className="about__contact">{realtor.phone}</p>
          <p className="about__contact">{realtor.email}</p>
          <p className="about__about">{realtor.description}</p>
        </Fragment>
      );

      for (let i = 0; i < realtors.length; i += 3) {
        results.push(
          <div className="row" key={i}>
            <div className="col-1-of-3">{allRealtors[i]}</div>
            <div className="col-1-of-3">{allRealtors[i + 1] || null}</div>
            <div className="col-1-of-3">{allRealtors[i + 2] || null}</div>
          </div>
        );
      }

      results;
    });

    const getTopSeller = () => {
      let result = [];

      topsellers.forEach((seller) => {
        result.push(
          <Fragment key={seller.id}>
            <div className="about__display">
              <img
                src={seller.photo}
                alt=""
                className="about__display__imgae"
              />
            </div>

            <h3 className="about__topseller">Top Seller</h3>
            <p className="about__realtor">{seller.name}</p>
            <p className="about__contact">{seller.phone}</p>
            <p className="about__contact">{seller.email}</p>
            <p className="about__about">{seller.description}</p>
          </Fragment>
        );
      });

      return result;
    };
  };

  return (
    <main className="about">
      <Helmet>
        <title>Realest Estate - About</title>
        <meta name="description" content="About us" />
      </Helmet>

      <header className="about__header">
        <h1 className="about__heading">About Realest Estate</h1>
      </header>
      <section className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about__subheading">
              We find the perfect home for you
            </h2>
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="about__display">
              <img src={House} alt="" className="about__display__image" />
            </div>
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>
      <section className="about__team">
        <div className="row">
          <h2 className="about__subheading">Meet out awesome team!</h2>
        </div>
        {getAllRealtors()}
      </section>
    </main>
  );
};

export default About;

export const loader = async () => {
  try {
    const res = await api.get("/api/realtors/topseller/");
    const topsellers = res.data;
    res = api.get("/api/realtors");
    const realtors = res.data;

    return { topsellers, realtors };
  } catch (error) {
    throw json({
      message: error.response.statusText,
      status: error.response.status,
    });
  }
};
