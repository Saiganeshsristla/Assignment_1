import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <h1 id="logo">Food Villa</h1>
      </a>
      <ul id="nav-list">
        <a href="/">
          {" "}
          <li>Home</li>{" "}
        </a>
        <a href="/">
          {" "}
          <li>Service</li>{" "}
        </a>
        <a href="/">
          {" "}
          <li>Contact</li>{" "}
        </a>
        <a href="/">
          {" "}
          <li>Cart</li>{" "}
        </a>
      </ul>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "25610",
      name: "Balaji Food Court",
      uuid: "f752387f-7752-4938-9666-cbc2c582f6c4",
      city: "5",
      area: "Thane Panchpakhadi",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "mx2xvec1dkyu8yxor1ml",
      cuisines: [
        "North Indian",
        "Chinese",
        "Juices",
        "Continental",
        "Ice Cream",
        "South Indian",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "balaji-food-court-panch-pakhadi-thane-west-thane",
        city: "mumbai",
      },
      cityState: "5",
      address: "Shop 4 & 5, Sital Premises, Panch Pakhadi, Thane West",
      locality: "Panch Pakhadi",
      parentId: 40639,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6840068~p=1~eid=00000188-67bb-5dc8-7d36-acdc00e40143",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "25610",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "40541",
      name: "Silly Chilly",
      uuid: "0011e934-01f7-4ace-bfcf-e98b509520c0",
      city: "5",
      area: "Thane West",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "dhfhimxobhmp6mlqgjit",
      cuisines: ["Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 3.5,
      slugs: {
        restaurant: "silly-chilly-khopat-thane-west-thane",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Shop No 6, Rebello Apartment, Khopat Naka near Swara Hotel, Thane West, Thane, Maharashtra 400601",
      locality: "Khopat, Thane West",
      parentId: 187991,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4400,
        message: "",
        title: "Delivery Charge",
        amount: "4400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "40541",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 3.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "123380",
      name: "Hotel Shree Durga",
      uuid: "47b65c5a-3957-4c21-b659-8f69be8fd53b",
      city: "5",
      area: "Gagangiri CHS",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "9d7e7873507979a6b0d5041d452d3568",
      cuisines: [
        "Indian",
        "North Indian",
        "Chinese",
        "Tandoor",
        "Biryani",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "hotel-shree-durga-thane-thane",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Hotel Shree Durga, Gagangiri Apartments, Kamgar Hospital Naka, Behind Kamgar Autostand, Wagle Estate, Thane West, Thane",
      locality: "Thane West",
      parentId: 102320,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "123380",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "351674",
      name: "The Tandoor Company",
      uuid: "2a18605f-8d32-4fec-b1ac-d2da65017a0b",
      city: "5",
      area: "Mulund West",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "xnjfff1yvo9w3ajaewi9",
      cuisines: ["Indian", "Biryani", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "the-tandoor-company-mulund-mulund",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Shop No. 3, Willows tower, near Cypress, Mulund West, Mumbai 400080 ",
      locality: "Willows Tower",
      parentId: 214453,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6793709~p=4~eid=00000188-67bb-5dc8-7d36-acdd00e4043d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "351674",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({
  name,
  area,
  costForTwoString,
  avgRating,
  cloudinaryImageId,
}) => {
  let imageUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
    cloudinaryImageId;
  return (
    <div className="card">
      <img src={imageUrl} alt="food image" />
      <h2>{name}</h2>
      <p>{area}</p>
      <p>{costForTwoString}</p>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="container">
      {restaurantList.map(function (restaurant) {
        return (
          <>
            <RestaurantCard {...restaurant.data} />
            <RestaurantCard {...restaurant.data} />
            <RestaurantCard {...restaurant.data} />
            <RestaurantCard {...restaurant.data} />
            <RestaurantCard {...restaurant.data} />
          </>
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p id="copyright">@Saiganesh made with ❤️</p>
      <ul>
        <a
          href="https://instagram.com/saiganesh31_?igshid=MTIzZWQxMDU="
          target="_blank"
        >
          {" "}
          <li className="socials">Instagarm</li>{" "}
        </a>
        <a
          href="https://twitter.com/SSristla?t=-C92-X2zurTTjI7Im7lm1Q&s=09"
          target="_blank"
        >
          {" "}
          <li className="socials">Twitter</li>{" "}
        </a>
        <a href="mailto:saiganesh3108@gmail.com" target="_blank">
          {" "}
          <li className="socials">Gmail</li>{" "}
        </a>
      </ul>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
