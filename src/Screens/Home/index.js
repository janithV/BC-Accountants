import React from "react";
import { useState } from "react";
// import Cards from "../../Components/Cards";
import Cards from "../../components/Cards/index";
import parallaxImage from "../../Assets/Images/parallaxImage.jpg";
import Banner1 from "../../components/Banner1";

const Home = () => {

    const [name, setName] = useState('MNK');
    const [cards, setCards] = useState ([
        {title:'Business Tax Returns', description:'Companies, Trusts & Partnerships.including Reports.Enter online or upload', price:'$275', button:'TRIAL NOW',id:1},
        {title:'Business Tax Returns', description:'Companies, Trusts & Partnerships.including Reports.Enter online or upload', price:'$275', button:'TRIAL NOW',id:2},
        {title:'Business Tax Returns', description:'Companies, Trusts & Partnerships.including Reports.Enter online or upload', price:'$275', button:'TRIAL NOW',id:3},
        {title:'Business Tax Returns', description:'Companies, Trusts & Partnerships.including Reports.Enter online or upload', price:'$275', button:'TRIAL NOW',id:4},
        {title:'Business Tax Returns', description:'Companies, Trusts & Partnerships.including Reports.Enter online or upload', price:'$275', button:'TRIAL NOW',id:5}
    ]);

    return (
        <>
        <Banner1 image={parallaxImage} text="This is a test message" button="CONTACT US"/>
        <Cards cards = {cards} />
        </>
    );
}

export default Home;