import { useState } from "react";
import ListingForm from "../components/common/ListingForm";
import Listings from "../components/common/Listings";
import Pagination from "../components/common/Pagination";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(3);
  const [active, setActive] = useState(1);

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
        <ListingForm setListings={setListings} />
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
