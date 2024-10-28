import { useLoaderData, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import api from "../services/axios";
import Card from "../components/common/Card";
import Pagination from "../components/common/Pagination";
import { json } from "react-router-dom";
import { useState } from "react";

const Listings = () => {
  const paginatedListings = useLoaderData();
  const [activePage, setActivePage] = useState(1);
  const listings = paginatedListings.results;
  const count = paginatedListings.count;
  const previous = paginatedListings.previous;
  const next = paginatedListings.next;
  const [serachParams, setSearchParams] = useSearchParams();
  const currentPage = serachParams.get("page") || 1;

  console.log(listings);

  const displayListings = () => {
    let display = [];
    let results = [];
    listings.forEach((listing) => {
      display.push(
        <Card
          key={listing.id}
          title={listing.title}
          address={listing.address}
          city={listing.city}
          state={listing.state}
          price={listing.price}
          sale_type={listing.sale_type}
          home_type={listing.home_type}
          bedrooms={listing.bedrooms}
          bathrooms={listing.bathrooms}
          sqft={listing.sqft}
          photo_main={listing.photo_main}
          slug={listing.slug}
        />
      );
    });

    for (let i = 0; i < listings.length; i += 3) {
      results.push(
        <dev className="row" key={`row-${i}`}>
          <div className="col-1-of-3">{display[i]}</div>
          <div className="col-1-of-3">
            {display[i + 1] ? display[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {display[i + 2] ? display[i + 2] : null}
          </div>
        </dev>
      );
    }

    return results;
  };

  const visitPage = (page) => {
    setSearchParams(page);
    setActivePage(page);
  };

  const visitPreviousPage = () => {
    setSearchParams(page - 1);
    setActivePage(page - 1);
  };

  const visitNextPage = () => {
    setSearchParams(page + 1);
    setActivePage(page + 1);
  };

  return (
    <main className="listings">
      <Helmet>
        <title>Realest Estate - Listings</title>
        <meta name="description" content="Listings page" />
      </Helmet>
      <section className="listings__listings">{displayListings()}</section>
      <section className="listings__pagination">
        <Pagination
          itemsPerPage={3}
          count={count}
          visitPage={visitPage}
          previous={visitPreviousPage}
          next={visitNextPage}
          active={activePage}
          setActive={setActivePage}
        />
      </section>
    </main>
  );
};

export default Listings;

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1; // Get the page number from the URL params

  try {
    const response = await api.get(`/api/listings/?page=${page}`);
    return response.data; // Return the paginated listings data
  } catch (error) {
    throw json({
      message: error.response.statusText,
      status: error.response.status,
    });
  }
};
