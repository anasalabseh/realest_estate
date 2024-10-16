import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import api from "../services/axios";
import { json, Link, useLoaderData } from "react-router-dom";
import { numberWithCommas, conver1D2D } from "../utils";

const ListingDetail = () => {
  // listing and it's owner
  const response = useLoaderData();
  const listing = response.listing;
  const realtor = response.realtor;
  console.log(realtor);

  const price = numberWithCommas(listing.price);

  const displayInteriorImages = () => {
    //getting an array of 3 columns to construct a design consists of 3 images in each row of the UI
    const images = conver1D2D(listing.images, 3);
    console.log("images", images);

    return images.map((row, rowIndex) => {
      return (
        <div className="row" key={rowIndex}>
          {row.map((image, columnIndex) => {
            return (
              <div className="col-1-of-3" key={columnIndex}>
                <div className="listingdetail__display">
                  <img
                    src={image.image}
                    alt=""
                    className="listingdetail__display__image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="listingdetail">
      <Helmet>
        <title>Realest Estate - Listing | {`${listing.title}`}</title>
        <meta name="description" content="Listing Detail" />
      </Helmet>

      <div className="listingdetail__header">
        <h1 className="listingdetail__title">{listing.title}</h1>
        <p className="listingdetail__location">
          {listing.city}, {listing.state}, {listing.zipcode}
        </p>
      </div>
      <div className="row">
        <div className="listingdetail__breadcrumb">
          <Link className="listingdetail__breadcrumb__link" to="/">
            Home
          </Link>{" "}
          /{listing.title}
        </div>
      </div>
      <div className="row">
        <div className="col-3-of-4">
          <div className="listingdetail__display">
            <img
              src={listing.photo_main}
              alt=""
              className="listingdetail__display__image"
            />
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="listingdetail__display">
            <img
              src={realtor.photo}
              alt=""
              className="listingdetail__display__image"
            />
          </div>
          <h3 className="listingdetail__realtor">{realtor.name}</h3>
          <p className="listingdetail__contact">{realtor.phone}</p>
          <p className="listingdetail__contact">{realtor.email}</p>
          <p className="listingdetail__about">{realtor.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <ul className="listingdetail__list">
            <li className="listingdetail__list__item">
              Home Type: {listing.home_type}
            </li>
            <li className="listingdetail__list__item">Price: ${price}</li>
            <li className="listingdetail__list__item">
              Bedrooms: {listing.bedrooms}
            </li>
            <li className="listingdetail__list__item">
              Bathrooms: {listing.bathrooms}
            </li>
            <li className="listingdetail__list__item">
              Square Feet: {listing.sqft}
            </li>
          </ul>
        </div>
        <div className="col-1-of-2">
          <ul className="lisingdetail__list">
            <li className="listingdetail__list__item">
              Sale Type: {listing.sale_type}
            </li>
            <li className="listingdetail__list__item">
              Address: {listing.address}
            </li>
            <li className="listingdetail__list__item">City: {listing.city}</li>
            <li className="listingdetail__list__item">
              State: {listing.state}
            </li>
            <li className="listingdetail__list__item">
              Zipcode: {listing.zipcode}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p className="listingdetail__description">{listing.description}</p>
      </div>
      {displayInteriorImages()}
    </div>
  );
};

export default ListingDetail;

export const loader = async ({ _, params }) => {
  const slug = params.slug;

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  //first retrieving the listing
  const listingResponse = await api.get(`/api/listings/${slug}/`);

  const realtorId = listingResponse.data.realtor;

  //then retrieve the listing's owner
  const realtorResponse = await api.get(`/api/realtors/${realtorId}/`, config);

  if (listingResponse.status >= 300 || listingResponse.status < 200) {
    throw json({
      message: listingResponse?.statusText,
      status: listingResponse?.status,
    });
  }
  if (realtorResponse.status >= 300 || realtorResponse.status < 200) {
    throw json({
      message: realtorResponse?.statusText,
      status: realtorResponse?.status,
    });
  }

  return { listing: listingResponse.data, realtor: realtorResponse.data };
};
