import React from "react";
import { useState } from "react";
import Cards from "../../components/Cards/index";
import parallaxImage from "../../Assets/Images/parallaxImage.jpg";
import Banner1 from "../../components/Banner1";

const Home = () => {

    const [name, setName] = useState('MNK');
    const [cards, setCards] = useState ([
        {title:'Business Tax Returns', description1:'Companies, Trusts & Partnerships.', description2:'Including Reports.', description3:'Enter online or upload', price:'$275', button:'TRIAL NOW',id:1},
        {title:'BAS & IAS Online', description1:'Fast online Business Activity Statement, IAS & \nRevisions.', description2:'Simple BAS $55.', description3:'Enter online or upload', price:'$55+', button:'TRIAL NOW',id:2},
        {title:'SMSF Fund Returns', description1:'Companies, Trusts & Partnerships.', description2:'Including Reports.', description3:'Upload or get a quote', price:'$550+', button:'TRIAL NOW',id:3},
        {title:'Get a Quote', description1:'Companies, Trusts & Partnerships.', description2:'Including Reports.', description3:'Enter online or upload', price:'free', button:'QUOTES',id:4},
        {title:'New Entities', description1:'Overnight setup including all tax registrations.', price:'poa', button:'SEE FORM',id:5},
        {title:'Appoint Us', description1:'Appoint us Tax or ASIC Agents or update details.', price:'poa', button:'SEE FORM',id:6},
        {title:'ATO Tasks', description1:'Extensions, Remissions, Payment Plans.', price:'poa', button:'SEE FORM',id:7},
        {title:'Advice', description1:'Technical advice or work by experts.', price:'poa', button:'ADVICE',id:8}
    ]);

    return (
        <>
        <Banner1 image={parallaxImage} header="ONLINE ACCOUNTANTS & TAX AGENTS" button="CONTACT US" description={"Australia's original and most comprehensive site for online tax returns & solutions"}/>
        <Cards cards = {cards} />
        </>
    );
}

export default Home;