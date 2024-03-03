import { Link } from "react-router-dom";
function BrandOffer(){

    const brand = [
        {
           "image" : "https://a.allegroimg.com/s1440/11f5ee/2fcd9e474357a2a21ffd0b33ee21/GARDEN-EXTENSION-CABLE-FOR-CONSTRUCTION-LIGHTS-THICK-SINGLE-ROPE-3x1-5mm-20m-Type-Garden",
           "tag" : "-15%for the second item ",
           "price" : "PLN 45.00",
           "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
           "discription" :"GARDEN EXTENSION CABLE FOR CONSTRUCTION LIGHTS THICK SINGLE ROPE 3x1.5mm 20m",
           "dileveryTime" : "buy before 18:40 —",
           "deleveryDay" : " delivery on Monday"
       },
       {
        "image" : "https://a.allegroimg.com/s1440/11fe84/cb4510da4d62b850bc038c0e4485-EAN-GTIN-5902659841124",
        "tag" : "",
        "price" : "PLN 899.00",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"ROWEREK STACJONARNY ROWER TRENINGOWY BOOST - ZIPRO",
        "dileveryTime" : "buy before 19:00 —",
        "deleveryDay" : " delivery on Monday"
    },
       {
        "image" : "https://a.allegroimg.com/original/112ef5/ffdbeb8548a98812b39d5f311b15",
        "tag" : "",
        "price" : "PLN 53.99",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Just Dance 2022 PS5 | TANIEC | MUZYKA",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Saturday"
    },
    {
        "image" : "https://a.allegroimg.com/s720/113cf9/6bb2bc744ff0b7e201dad11b7c21",
        "tag" : "",
        "price" : "PLN 3,333.00",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Ekspres do kawy ciśnieniowy z młynkiem Siemens EQ.6 PLUS S700 TE657319RW",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Monday"
    },
    {
        "image" : "https://a.allegroimg.com/original/114804/8b1c12ae41d69f39c4547cafaedb",
        "tag" : "-6% PLN 299.00",
        "price" : "PLN 279.00",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"STEP stepper 2w1 fitness do ćwiczeń Schody z licznikiem kroków Roam - Zipro",
        "dileveryTime" : "buy before 19:00 —",
        "deleveryDay" : " delivery on Monday"
    },
    {
        "image" : "https://a.allegroimg.com/original/11dfbe/50b2a3b248478a5a165dbbc6527c",
        "tag" : "",
        "price" : "PLN 779.99",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"LEGO Technic Porsche 911 RSR 42096",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Tuesday"
    },
    {
        "image" : "https://a.allegroimg.com/s720/111318/1ab99bf54d96b4fd48abcfa05ca0",
        "tag" : "",
        "price" : "PLN 749.00",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Telewizor LED Toshiba 24WA2063DG/2 24 inch. HD Ready Android TV DVB-T2",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Monday"
    },
    {
        "image" : "https://a.allegroimg.com/original/052c6f/c5ed2b31493189020ed59c7eb384",
        "tag" : "",
        "price" : "PLN 49.90",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Vizir Platinum PODS Kapsułki do prania + moc usuwania plam, 33 prań",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Suturday"
    },
    {
        "image" : "https://a.allegroimg.com/s720/05bbc8/627c4e0d407299176900110a2346",
        "tag" : "",
        "price" : "PLN 32.60",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Lego DUPLO 10967 Motocykl policyjny",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Monday"
    },
    {
        "image" : "https://a.allegroimg.com/s1024/119922/0e61f0244cb89dce27fe3bfe54e3-Included-Equipment-concentrator",
        "tag" : "New",
        "price" : "PLN 87.00",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"SUSZARKA DO WŁOSÓW PRO JONIZACJA 2000W 2 KOŃCÓWKI",
        "dileveryTime" : "to 10 cities —",
        "deleveryDay" : "delivery on Saturday"
    },
    {
        "image" : "https://a.allegroimg.com/s720/11078f/5181e9f546e3ace8ac8e5e59ba38/Perwoll-Renew-Repair-Laundry-Liquid-3-74l-68p",
        "tag" : " New",
        "price" : "PLN 49.56",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Perwoll Renew Repair Laundry Liquid 3.74l 68p",
        "dileveryTime" : "to 10 cities —",
        "deleveryDay" : "delivery on Monday"
    },
    {
        "image" : "https://a.allegroimg.com/s1024/11c80b/c1c84085459b9e52e2308001ae73/Frying-pan-TEFAL-Ultimate-28cm-TITANIUM",
        "tag" : "New",
        "price" : "PLN 139.99",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Frying pan TEFAL Ultimate 28cm TITANIUM",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Tuesday"
    },
    {
        "image" : "https://a.allegroimg.com/s720/1175da/e807dc074c3c9e83a8f316e6a81f/Quiet-Yoer-Column-Floor-FAN-IONZATION-Manufacturer-s-code-TF01S",
        "tag" : "New",
        "price" : "PLN 358.00",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Quiet Yoer Column Floor FAN + IONZATION",
        "dileveryTime" : "buy before 20:00 —",
        "deleveryDay" : "delivery on Monday"
    },
    {
        "image" : "https://a.allegroimg.com/s1024/11d258/17beb32d4461a938dd82ff61ffd1",
        "tag" : "New",
        "price" : "PLN 2,349.99",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"LEGO Star Wars Brzeszczot 75331",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Monday"
    },
    {
        "image" : "https://a.allegroimg.com/original/119481/0a6e9b5a4aafbb8772b588f3ff50",
        "tag" : "New",
        "price" : "PLN 79.00",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"KRZESŁO do kuchni jadalni NOWOCZESNE plastikowe",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on wed"
    },
    {
        "image" : "https://a.allegroimg.com/s720/11d0a8/35de0c554052a75645be5c0929e1-Packaging-Status-original",
        "tag" : "New",
        "price" : "PLN 59.00",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"SUSZARKA DO WŁOSÓW SKŁADANA TURYSTYCZNA JONIZACJA",
        "dileveryTime" : "delivery on Saturday —",
        "deleveryDay" : "to 10 cities"
    },
    {
        "image" : "https://a.allegroimg.com/s720/1147f5/db2acc3c4c0394573c54a0760803",
        "tag" : "New",
        "price" : "PLN 37.90",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Butelka filtrująca Brita Fill & Go Vital",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Monday"
    },
    {
        "image" : "https://a.allegroimg.com/s1024/1196b1/d90a4ea34c65ac66424eaec338a9/Under-Armour-basic-men-s-T-shirt-size-L",
        "tag" : "New",
        "price" : "PLN 59.99",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Under Armour basic men's T-shirt, size L",
        "dileveryTime" : "delivery on Saturday",
        "deleveryDay" : ""
    },
    {
        "image" : "https://a.allegroimg.com/s720/11d1db/e862ecca41a49bab58681c1118a5/LARGE-Roasted-SALTED-PISTACHIOS-1000g-PS-Brand-Promienie-Slonca",
        "tag" : "(PLN 47.99/kg)",
        "price" : "PLN 47.99",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"LARGE Roasted SALTED PISTACHIOS 1000g PS",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Monday"
    },
    {
        "image" : "https://a.allegroimg.com/s720/11b3f0/cdd87f644814a37e98d5d9865e9c",
        "tag" : "",
        "price" : "PLN 489.00",
        "logo" : "https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg",
        "discription" :"Smartfon Xiaomi Redmi 10c - 6,71'' 4/128GB 50Mpix LTE Niebieski",
        "dileveryTime" : "",
        "deleveryDay" : "delivery on Monday"
    }
        
]

     return (
        <>
        <div id="bg">
        <h2>Brand Offers</h2>
        <div id="brand-offers">
         {brand && brand.map((item,idx)=>{
              return <div id="offer-card" key={idx}>
                 <img src={item.image} alt="offerimage" id="offer-img"/>
                 <h5>{item.tag}</h5>
                 <h2>{item.price}</h2>
                 <img src={item.logo} alt="smartlogo"/>
                 <p>{item.discription}</p>
                 <h5>{item.dileveryTime}    <span>{item.deleveryDay}</span> </h5>
              </div>
         })}
        </div>
        </div>
        </>
         
     )
}

export default BrandOffer;