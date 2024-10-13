import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { Form, useNavigation } from "react-router-dom";

const ListingForm = () => {
  const [formData, setFormData] = useState({
    sale_type: "For sale",
    price: "$0+",
    bedrooms: "0+",
    home_type: "House",
    bathrooms: "0+",
    sqft: "1000+",
    days_listed: "1 or less",
    open_house: false,
    has_photos: "1+",
    keywords: "",
  });

  const navigation = useNavigation();
  const loading = navigation.state === "submitting";
  console.log(formData.open_house);

  const {
    sale_type,
    price,
    bedrooms,
    home_type,
    bathrooms,
    sqft,
    days_listed,
    open_house,
    has_photos,
    keywords,
  } = formData;

  const handleOptionChange = (event) => {
    setFormData((prevForm) => {
      if (event.target.name === "open_house") {
        return { ...prevForm, open_house: !prevForm.open_house };
      }
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <Form method="POST" className="listingform">
      <div className="row">
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="sale_type">
              Sale or Rent
            </label>
            <select
              className="listingform__select"
              name="sale_type"
              onChange={(e) => handleOptionChange(e)}
              value={sale_type}
            >
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="sqft">
              Square Feet
            </label>
            <select
              className="listingform__select"
              name="sqft"
              onChange={(e) => handleOptionChange(e)}
              value={sqft}
            >
              <option>1000+</option>
              <option>1200+</option>
              <option>1500+</option>
              <option>2000+</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="price">
              Minimum Price
            </label>
            <select
              className="listingform__select"
              name="price"
              onChange={(e) => handleOptionChange(e)}
              value={price}
            >
              <option>$0+</option>
              <option>$200,000+</option>
              <option>$400,000+</option>
              <option>$600,000+</option>
              <option>$800,000+</option>
              <option>$1,000,000+</option>
              <option>$1,200,000+</option>
              <option>$1,500,000+</option>
              <option>Any</option>
            </select>
          </div>

          <div className="listingform__section">
            <label className="listingform__label" htmlFor="days_listed">
              Days Listed
            </label>
            <select
              className="listingform__select"
              name="days_listed"
              onChange={(e) => handleOptionChange(e)}
              value={days_listed}
            >
              <option>1 or less</option>
              <option>2 or less</option>
              <option>5 or less</option>
              <option>10 or less</option>
              <option>20 or less</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="bedrooms">
              Bedrooms
            </label>
            <select
              className="listingform__select"
              name="bedrooms"
              onChange={(e) => handleOptionChange(e)}
              value={bedrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
          </div>

          <div className="listingform__section">
            <label className="listingform__label" htmlFor="has_photos">
              Has Photos
            </label>
            <select
              className="listingform__select"
              name="has_photos"
              onChange={(e) => handleOptionChange(e)}
              value={has_photos}
            >
              <option>1+</option>
              <option>3+</option>
              <option>5+</option>
              <option>10+</option>
              <option>15+</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="home_type">
              Home Type
            </label>
            <select
              className="listingform__select"
              name="home_type"
              onChange={(e) => handleOptionChange(e)}
              value={home_type}
            >
              <option>House</option>
              <option>Condo</option>
              <option>Townhouse</option>
            </select>
          </div>

          <div className="listingform__section">
            <label className="listingform__label" htmlFor="keywords">
              Keywords
            </label>
            <input
              type="text"
              className="listingform__input"
              name="keywords"
              onChange={(e) => handleOptionChange(e)}
              value={keywords}
            />
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="bathrooms">
              Bathrooms
            </label>
            <select
              className="listingform__select"
              name="bathrooms"
              onChange={(e) => handleOptionChange(e)}
              value={bathrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>

          <div className="listingform__altsection">
            <label className="listingform__label" htmlFor="open_house">
              Open House
            </label>
            <input
              type="checkbox"
              className="listingform__checkbox"
              name="open_house"
              onChange={(e) => handleOptionChange(e)}
              checked={open_house}
              value={open_house}
            />
          </div>
        </div>

        <div className="col-1-of-6">
          {loading ? (
            <div className="listingform__loader">
              <Oval color="#424242" height={50} width={50} />
            </div>
          ) : (
            <button className="listingform__button listingform__button--primary">
              Save
            </button>
          )}
        </div>
      </div>
    </Form>
  );
};

export default ListingForm;
