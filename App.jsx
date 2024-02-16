import React from "react";
import ReactDOM from "react-dom/client";

/*

-header
  - logo
  - nav links

-Body
  - RestContainer
    - Rest Card
      - image
      - starrating
      - cusines
      - delivry time
Footer
    - Copyright
    - links
    - contact

*/

const Header = () => {
  return (
    <div className="heading">
      <div className="logo-conatiner">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    
    costForTwo,
  } = resData.info;

  const{deliveryTime,} = resData.info.sla

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

const resObject = [
  {
    info: {
      id: "421108",
      name: "Sukrutham Catering & Restaurant",
      cloudinaryImageId: "ij5cjia84ibh5ll8pwa6",
      locality: "Amalabhavan Road",
      areaName: "Thevara",
      costForTwo: "₹300 for two",
      cuisines: ["Snacks", "Sweets", "Kerala"],
      avgRating: 4.6,
      veg: true,
      parentId: "234325",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
      promoted: true,
      adTrackingId:
        "cid=11297677~p=1~eid=0000018d-b081-1315-17ec-afc100b50157~srvts=1708063265557~45995",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 8.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=421108",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "747574",
      name: "Wow! Momo",
      cloudinaryImageId: "5a148e63e9c54942e37627da1aa156be",
      locality: "Kazhutumuttu",
      areaName: "Thoppumpady",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.5,
      parentId: "1776",
      avgRatingString: "4.5",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=747574",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "546364",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Nankelil House",
      areaName: "Thopumpady",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=546364",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "622386",
      name: "Juicy",
      cloudinaryImageId: "ogmvqqyzysnawptm3cpf",
      locality: "Pyari Junction",
      areaName: "Thopumpady",
      costForTwo: "₹250 for two",
      cuisines: ["Beverages", "Fast Food", "Snacks"],
      avgRating: 4.3,
      parentId: "20465",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=622386",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "447358",
      name: "Mehfil Biriyani",
      cloudinaryImageId: "9b0f9cf630ca644a13388312ec73b387",
      locality: "Ernakulam",
      areaName: "Ernakulam",
      costForTwo: "₹250 for two",
      cuisines: ["Kerala", "Biryani", "South Indian", "Arabian"],
      avgRating: 4.3,
      parentId: "269349",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=11300290~p=2~eid=0000018d-b081-1315-17ec-afc200b5025b~srvts=1708063265557~45995",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 9.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹749",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=447358",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "150015",
      name: "Cake Hut",
      cloudinaryImageId: "wgq46ryba9c9lp95asnh",
      locality: "Parry Junction",
      areaName: "Chullickal",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery"],
      avgRating: 4.7,
      parentId: "4752",
      avgRatingString: "4.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 21:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=150015",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "106542",
      name: "Drunken Panda",
      cloudinaryImageId: "ua6qshfjhe09gdzax3dv",
      locality: "Shanthinagar",
      areaName: "Mattancherry",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Fast Food"],
      avgRating: 4.3,
      parentId: "9907",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=106542",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "714596",
      name: "Daily Meet",
      cloudinaryImageId: "5cb1a025942fd8b5ddb7ad7a417b3504",
      locality: "Mattummel",
      areaName: "Panampilly Nagar",
      costForTwo: "₹100 for two",
      cuisines: ["Beverages"],
      avgRating: 4.2,
      veg: true,
      parentId: "317592",
      avgRatingString: "4.2",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹749",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=714596",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "810722",
      name: "Starbucks Coffee",
      cloudinaryImageId: "2418209798927d733a50f5d2ebcc2aee",
      locality: "Mukkadan Strip Mall",
      areaName: "Willington Island",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.7,
      parentId: "195515",
      avgRatingString: "4.7",
      totalRatingsString: "8",
      promoted: true,
      adTrackingId:
        "cid=11275814~p=3~eid=0000018d-b081-1315-17ec-afc300b50318~srvts=1708063265557~45995",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=810722",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "63058",
      name: "Haji Ali Fresh Fruit Juices",
      cloudinaryImageId: "ce8xtickobwbwcuwnk7i",
      areaName: "Ravipuram",
      costForTwo: "₹250 for two",
      cuisines: ["Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "5432",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=63058",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "524633",
      name: "Domino's Pizza",
      cloudinaryImageId: "092e58460657922e098a8afd5db838fe",
      locality: "Jacob Road",
      areaName: "Thopumpady",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "2456",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-17 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=524633",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "123175",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Panampilly Nagar",
      areaName: "Thevara",
      costForTwo: "₹199 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=123175",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "373379",
      name: "Nellikka Restaurant",
      cloudinaryImageId: "ata0nhg2x8qzg7p00pfl",
      locality: "Panampilly Nagar",
      areaName: "Kadavanthra",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      avgRating: 4.7,
      parentId: "145509",
      avgRatingString: "4.7",
      totalRatingsString: "5K+",
      promoted: true,
      adTrackingId:
        "cid=11297867~p=4~eid=0000018d-b081-1315-17ec-afc400b50420~srvts=1708063265557~45995",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 8.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹500",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=373379",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "53827",
      name: "Pandhal Cake Shop",
      cloudinaryImageId: "uafivabu7frnyingwigr",
      locality: "Panampilly Nagar",
      areaName: "Panampilly Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery"],
      avgRating: 4.5,
      parentId: "4761",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "newg.png",
                  description: "Gourmet",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=53827",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "385462",
      name: "Gourmet Ice Cream Cakes by Baskin Robbins",
      cloudinaryImageId: "d679c532ca07a6f3fd6d89d603861412",
      locality: "Shihab Thangal Road",
      areaName: "Thevara",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream Cakes", "Desserts", "Ice Cream", "Bakery"],
      avgRating: 4.6,
      veg: true,
      parentId: "21932",
      avgRatingString: "4.6",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 22:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=385462",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "346349",
      name: "Paragon Salkara Xpress",
      cloudinaryImageId: "dd3eababafa7eb5ca664ded2596137b2",
      locality: "Menaka Arcade",
      areaName: "Vyttila",
      costForTwo: "₹400 for two",
      cuisines: [
        "Kerala",
        "Grill",
        "Biryani",
        "Chinese",
        "Juices",
        "Beverages",
      ],
      avgRating: 4.6,
      parentId: "474064",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 11.1,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-16 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=346349",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

// not using keys(not recommened) <<<<<<< index as a key <<<<<<<< unique id (best parctice)

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search Bar</div>
      <div className="res-container">
        {/* Restro Card */}
        {
          resObject.map(resturant =>(<RestroCard key={resturant.info.id} resData={resturant} />))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
