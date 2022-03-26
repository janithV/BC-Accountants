import React from "react";
import { useState } from "react";
import Cards from "../../components/Cards/index";
import parallaxImage from "../../Assets/Images/parallaxImage.jpg";
import calendarGif from "../../Assets/Images/calendar.gif"
import Banner1 from "../../components/Banner1";
import styles from "./style";
import Banner2 from "../../components/Banner2";
import Table from '../../components/Table/index'
import Divider from '@mui/material/Divider';
const Home = () => {

    const [name, setName] = useState('MNK');
    const [cards1, setCards1] = useState ([
        {name:'Business Tax Returns', features: ["Companies, Trusts & Partnerships", "Including Reports", "Enter online or upload"], price:'$275', button:'TRIAL NOW',id:1,type:1,},
        {name:'BAS & IAS Online', features: ["Fast online Business Activity Statement, IAS & \nRevisions", "Simple BAS $55", "Enter online or upload"], price:'$55+', button:'TRIAL NOW',id:2,type:1,},
        {name:'SMSF Fund Returns', features: ["Inc Financials Returns & Audits", "Simple Funds $550", "Upload or get a quote"], price:'$550+', button:'TRIAL NOW',id:3,type:1,},
        {name:'New Entities', features: ["Overnight setup including all tax registrations"], price:'poa', button:'SEE FORM',id:5,type:1,},
        {name:'Appoint Us', features: ["Appoint us Tax or ASIC Agents or update details"], price:'poa', button:'SEE FORM',id:6,type:1,},
        {name:'ATO Tasks', features: ["Extensions, Remissions, Payment Plans"], price:'poa', button:'SEE FORM',id:7,type:1,},
        {name:'Get a Quote', features: ["Quick query or need a quote?", "Send job details & data"], price:'free', button:'QUOTES',id:4,type:1,featured: true,},
        {name:'Advice', features: ["Technical advice or work by experts"], price:'poa', button:'ADVICE',id:8,type:1,featured: true,}
    ]);

    const [cards2, setCards2] = useState ([
        {name:'Individuals & Couples', features: ["Personal & couples returns"], price:'$60+', button:'TRIAL NOW',id:9,type:2,},
        {name:'Sole Traders', features: ["For Individual business or ABN income"], price:'$110', button:'TRIAL NOW',id:10,type:2,},
        {name:'Rental Tax Returns', features: ["Rental returns for Individuals or Couples"], price:'$95', button:'TRIAL NOW',id:11,type:2,},
        {name:'Non-Residents', features: ["Returns for Temporary or Foreign residents"], price:'poa', button:'TRIAL NOW',id:13,type:2,},
        {name:'Student & WHM Visa', features: ["Students & Working Hol visa, Departing returns"], price:'poa', button:'TRIAL NOW',id:14,type:2,},
        {name:'Amend a Return', features: ["Amend a past lodged return for errors"], price:'poa', button:'TRIAL NOW',id:15,type:2,},
        {name:'Tax Calcs', features: ["Tax Calculator","fast simple tax estimates"], price:'FREE', button:'CALC',id:12,type:2,featured: true,},
        {name:'Tax Help', features: ["Need tax help?","Send us details for a fast response"], price:'FREE', button:'HELP!',id:16,type:2,featured: true,}
    ]);

    const [taxKeys,setTaxKeys]=useState([
        'Client Type','Lodging Due','Payment Due', 'Applies To'
    ])

    const [taxDates,setTaxDates]=useState([
        {clientType:'Non-Taxable',lodgingDue:'5 June 20',paymentDue:'5 June 20',appliesTo:'Concession if no tax payable for 2018 & 2019'},
        {clientType:'Non-Taxable',lodgingDue:'5 June 20',paymentDue:'5 June 20',appliesTo:'Concession if no tax payable for 2018 & 2019'},
        {clientType:'Non-Taxable',lodgingDue:'5 June 20',paymentDue:'5 June 20',appliesTo:'Concession if no tax payable for 2018 & 2019'},
        {clientType:'Non-Taxable',lodgingDue:'5 June 20',paymentDue:'5 June 20',appliesTo:'Concession if no tax payable for 2018 & 2019'},

    ])

    const [basKeys,setBasKeys]=useState([
        'BAS Type','Usual Date','Extended Date', 'Applies To'
    ])

    const [basDueDates,setBasDueDates]=useState([
        {basType:'BAS Quarterly',usualDate:'28th next month',extendedDate:'25th 2nd month',appliesTo:'All small business unless monthly'},
        {basType:'BAS Quarterly',usualDate:'28th next month',extendedDate:'25th 2nd month',appliesTo:'All small business unless monthly'},
        {basType:'BAS Quarterly',usualDate:'28th next month',extendedDate:'25th 2nd month',appliesTo:'All small business unless monthly'},
        {basType:'BAS Quarterly',usualDate:'28th next month',extendedDate:'25th 2nd month',appliesTo:'All small business unless monthly'}
    ])


    return (
        <>
        {<Banner1 image={parallaxImage} header="ONLINE ACCOUNTANTS & TAX AGENTS" button="CONTACT US" description={"Australia's original and most comprehensive site for online tax returns & solutions"}/>}
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
            <div> 
            <Divider variant="middle" />
                <h1><span>
                    <img src={calendarGif} alt="calendar gif" width="30" height="30"></img>
                </span> Tax Due Dates</h1>
                <Divider variant="middle" />
                <p>
                BC Accountants has extended lodgement & payment dates for all return categories, providing we or another agent represented you as at 31st October 2019. Below is a 2019 return list that applies for our small business & small taxpayers.
                </p>
           
           
            <Table content ={taxDates} keys={taxKeys} type='taxDue'/>
            <ul>
                <li>Note 1 - Partnerships & Trusts will generally be due on the same dates as individual partners/beneficiaries</li>
                <li>Note 2 - Substituted Accounting Periods (SAP) may also apply to approved entities</li>
            </ul>
            </div>
            <div>
            <Divider variant="middle" />
            <h1><span>
                    <img src={calendarGif} alt="calendar gif" width="30" height="30"></img>
                </span> BAS Due Dates</h1>
                <Divider variant="middle" />
                <p>
                Our extended BAS & IAS lodgement dates are shown below. We lodge electronically and send you a copy and remittance advice same day. If lodging earlier, payment dates remain the same as lodgement due dates.
                </p>
                <Table content ={basDueDates} keys={basKeys} type='BAS'/>
                <ul>
                <li>Note 1 - We do not change BAS delivery addresses and you should continue to receive BAS as before</li>
                <li>Note 2 - Our extended lodgement dates will generally not show on your BAS copy</li>
            </ul>
                </div>
                <div>
            <Divider variant="middle" />
            <h1><span>
                    <img src={calendarGif} alt="calendar gif" width="30" height="30"></img>
                </span> Payroll Due Dates</h1>
                <Divider variant="middle" />
                <p>
                Following are most Payroll obligations that apply to small business employing staff, and these also apply to business owners drawing a salary, directors fee or super.
                </p>
                <Table content ={basDueDates} keys={basKeys} type='BAS'/>
                <ul>
                <li>Note 1 - Super must actually be received by the fund by the due date, so do it a few days beforehand.</li>
                <li>Note 2 - Super must also be actually paid by 30 June in order to receive an income tax deduction for that year.</li>
            </ul>
                </div>
        </div>
        
        </>
    );
}

export default Home;