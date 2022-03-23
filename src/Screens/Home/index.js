import React from "react";
import { useState } from "react";
import Cards from "../../components/Cards/index";
import parallaxImage from "../../Assets/Images/parallaxImage.jpg";
import Banner1 from "../../components/Banner1";
import styles from "./style";
import Banner2 from "../../components/Banner2";

const Home = () => {

    const [name, setName] = useState('MNK');
    const [cards1, setCards1] = useState ([
        {title:'Business Tax Returns', description1:'Companies, Trusts & Partnerships.', description2:'Including Reports.', description3:'Enter online or upload', price:'$275', button:'TRIAL NOW',id:1},
        {title:'BAS & IAS Online', description1:'Fast online Business Activity Statement, IAS & \nRevisions.', description2:'Simple BAS $55.', description3:'Enter online or upload', price:'$55+', button:'TRIAL NOW',id:2},
        {title:'SMSF Fund Returns', description1:'Companies, Trusts & Partnerships.', description2:'Including Reports.', description3:'Upload or get a quote', price:'$550+', button:'TRIAL NOW',id:3},
        {title:'Get a Quote', description1:'Companies, Trusts & Partnerships.', description2:'Including Reports.', description3:'Enter online or upload', price:'free', button:'QUOTES',id:4},
        {title:'New Entities', description1:'Overnight setup including all tax registrations.', price:'poa', button:'SEE FORM',id:5},
        {title:'Appoint Us', description1:'Appoint us Tax or ASIC Agents or update details.', price:'poa', button:'SEE FORM',id:6},
        {title:'ATO Tasks', description1:'Extensions, Remissions, Payment Plans.', price:'poa', button:'SEE FORM',id:7},
        {title:'Advice', description1:'Technical advice or work by experts.', price:'poa', button:'ADVICE',id:8}
    ]);

    const [cards2, setCards2] = useState ([
        {title:'Individuals & Couples', description1:'Personal & couples returns.', price:'$60+', button:'TRIAL NOW',id:9},
        {title:'Sole Traders', description1:'For Individual business or ABN income.', price:'$110', button:'TRIAL NOW',id:10},
        {title:'Rental Tax Returns', description1:'Rental returns for Individuals or Couples.', price:'$95', button:'TRIAL NOW',id:11},
        {title:'Tax Calcs', description1:'Tax Calculator.', description2:'fast simple tax estimates.', description3:"", price:'', button:'CALC',id:12},
        {title:'Non-Residents', description1:'Returns for Temporary or Foreign residents.', price:'poa', button:'TRIAL NOW',id:13},
        {title:'Student & WHM Visa', description1:'Students & Working Hol visa, Departing returns.', price:'poa', button:'TRIAL NOW',id:14},
        {title:'Amend a Return', description1:'Amend a past lodged return for errors.', price:'poa', button:'TRIAL NOW',id:15},
        {title:'Tax Help', description1:'Need tax help?', description2:"Send us details for a fast response", price:'', button:'HELP!',id:16}
    ]);

    return (
        <>
        <Banner1 image={parallaxImage} header="ONLINE ACCOUNTANTS & TAX AGENTS" button="CONTACT US" description={"Australia's original and most comprehensive site for online tax returns & solutions"}/>
        <div className="container">
            <div style={styles.homeWelcome}>
                <h1 style={{fontSize:60}}>Welcome</h1>
                <h6 style={styles.homeDescription}>Fast online business & personal tax returns, financials, advice & other services. Lowest flat fees by experts for 25+ years. Simply select your form below and enter online or upload your data.</h6>
            </div>
            <Cards cards = {cards1} color="#63678f"/>
            <div className="row-cols-1 d-flex card-group" style={{padding: '0 40px'}}>
                <hr />
                <h3>Individual returns</h3>
                <hr />
            </div>
            
            <Cards style={{marginTop: '30px'}} cards = {cards2} color="#d94545"/>
        </div>
        <Banner2 image={parallaxImage} header="Due Dates" />
        <div className="container" style={{height:'100vh'}}>
        </div>
        </>
    );
}

export default Home;