import { useState } from "react";
import ListingForm from "../components/common/ListingForm";
import Listings from "../components/common/Listings";
import Pagination from "../components/common/Pagination";
import { Helmet } from "react-helmet-async";
import api from "../services/axios";
import { json, useActionData } from "react-router-dom";

const Home = () => {
  const searchResults = useActionData();
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(3);
  const [active, setActive] = useState(1);

  const listings = searchResults ? searchResults : [];

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
  };

  const previous_number = () => {
    if (currentPage !== 1) {
      setCurrentPage((selectedPage) => selectedPage - 1);
      setActive((selectedPage) => selectedPage - 1);
    }
  };

  const next_number = () => {
    if (currentPage !== Math.ceil(listings.length / 3)) {
      setCurrentPage((selectedPage) => selectedPage + 1);
      setActive((selectedPage) => selectedPage + 1);
    }
  };

  return (
    <main>
      <Helmet>
        <title>Realest Estate - Home</title>
        <meta name="description" content="Realest Estate Home Page" />
      </Helmet>
      <section className="home__form">
        <ListingForm />
      </section>
      <section className="home__listings">
        <Listings listings={currentListings} />
      </section>
      <section className="home__pagination">
        <div className="row">
          {listings.length !== 0 ? (
            <Pagination
              itemsPerPage={listingsPerPage}
              count={listings.length}
              visitPage={visitPage}
              previous={previous_number}
              next={next_number}
              active={active}
              setActive={setActive}
            />
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default Home;

export const action = async ({ request, params }) => {
  const form = await request.formData();
  const searchData = {
    sale_type: form.get("sale_type"),
    price: form.get("price"),
    bedrooms: form.get("bedrooms"),
    home_type: form.get("home_type"),
    bathrooms: form.get("bathrooms"),
    sqft: form.get("sqft"),
    days_listed: form.get("days_listed"),
    has_photos: form.get("has_photos"),
    open_house: form.get("open_house") !== null ? "true" : "false",
    keywords: form.get("keywords"),
  };

  const response = await api.post("/api/listings/search/", searchData);
  if (response.status >= 300 || response.status < 200) {
    throw json({ error: "error submitting the form" });
  }

  return response.data;
};
