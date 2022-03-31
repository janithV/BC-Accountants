import React from "react";
import { useState } from "react";
import Cards from "../../components/Cards/index";
import parallaxImage from "../../Assets/Images/parallaxImage.jpg";
import calendarGif from "../../Assets/Images/calendar.gif"
import Banner1 from "../../components/Banner1";
import styles from "./style";
import Banner2 from "../../components/Banner2";
import Table from "../../components/Table";
import Divider from '@mui/material/Divider';
import { Button } from "react-bootstrap";
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
    ]);

    const [taxDates,setTaxDates]=useState([
        {col1:'Non-Taxable',col2:'5 June 20',col3:'5 June 20',col4:'Concession if no tax payable for 2018 & 2019'},
        {col1:'Non-Taxable',col2:'5 June 20',col3:'5 June 20',col4:'Concession if no tax payable for 2018 & 2019'},
        {col1:'Non-Taxable',col2:'5 June 20',col3:'5 June 20',col4:'Concession if no tax payable for 2018 & 2019'},
        {col1:'Non-Taxable',col2:'5 June 20',col3:'5 June 20',col4:'Concession if no tax payable for 2018 & 2019'},

    ]);

    const [basKeys,setBasKeys]=useState([
        'BAS Type','Usual Date','Extended Date', 'Applies To'
    ]);
    const [basDueDates,setBasDueDates]=useState([
        {col1:'BAS Quarterly',col2:'28th next month',col3:'25th 2nd month',col4:'All small business unless monthly'},
        {col1:'BAS Quarterly',col2:'28th next month',col3:'25th 2nd month',col4:'All small business unless monthly'},
        {col1:'BAS Quarterly',col2:'28th next month',col3:'25th 2nd month',col4:'All small business unless monthly'},
        {col1:'BAS Quarterly',col2:'28th next month',col3:'25th 2nd month',col4:'All small business unless monthly'}
    ]);

    const [payRollKeys,setpayRollKeys]=useState([
        'Payroll Type','Due','Usual Date', 'Applies To'
    ]);
    const [payRollDates,setPayRollDates]=useState([
        {col1:'Superannuation SGC',col2:'Quarterly',col3:'28th next month',col4:'Min 9.5% of gross ordinary wages'},
        {col1:'Superannuation Addit',col2:'Annual',col3:'30th June',col4:'Additional super over SGC minimum'},
        {col1:'Payment Summaries',col2:'Annual',col3:'14th July',col4:'Issue to employees by this date',rowspan:4},
        {col2:'Annual',col3:'14th August',col4:'If lodging yourself or large employer'},
        {col2:'Annual',col3:'30th September',col4:'If we preparing & lodging'},
        {col2:'Annual',col3:'tax return date',col4:'If we lodging & all employees related'},
        {col1:'Taxable Payments',col2:'Annual',col3:'28th August',col4:'For Building Industry contractors only'},
        {col1:'FBT Return',col2:'Annual',col3:'21st May',col4:'or 25th June if we lodging'},
        {col1:'Payroll Tax',col2:'Annual',col3:'Refer your State thresholds rates and due dates'},
        {col1:'Workers Comp',col2:'Annual',col3:'Refer your State thresholds rates and due dates'}
    ]);

    const [taxRatesKeys,setTaxRatesKeys]=useState([
        'Tax Threshold','2020','2019','2018','2017','2016','2015'
    ]);

    const [residentTaxRates,setResTaxRates]=useState([
        {col1:'to 18200',col2:'0%',col3:'0%',col4:'0%',col5:'0%',col6:'0%',col7:'0%'},
        {col1:'to 37000',col2:'19%',col3:'19%',col4:'19%',col5:'19%',col6:'19%',col7:'19%'},
        {col1:'to 80000',col2:'NA',col3:'NA',col4:'NA',col5:'NA',col6:'32.5%',col7:'32.5%'},
        {col1:'to 87000',col2:'NA',col3:'NA',col4:'32.5%',col5:'32.5%',col6:'NA',col7:'NA'},
        {col1:'to 90000',col2:'32.5%',col3:'32.5%',col4:'NA',col5:'NA',col6:'NA',col7:'NA'},
        {col1:'to 180000',col2:'37%',col3:'37%',col4:'37%',col5:'37%',col6:'37%',col7:'37%'},
        {col1:'180000+',col2:'45%',col3:'45%',col4:'45%',col5:'47%',col6:'47%',col7:'45%'},
        {col1:'Medicare Levy',col2:'2%',col3:'2%',col4:'2%',col5:'2%',col6:'2%',col7:'1.5%'},
        {col1:'Medicare Levy Reduction*',col2:'0% Levy if income <22,398 increasing to 2% at 27,997'},
        {col1:'Medicare Levy Surcharge*',col2:'1% if income >90000 to 105000, 1.25% to 140000, then 1.5%'},
        {col1:'Low Income Offset',col2:'$445 if income under 37000 reducing to nil at 66,667 income'},
        {col1:'Low & Middle Income Offset',col2:'$255 increasing to $1080 at 48000 & reducing to nil between 90,000 - 126000 income'},
        {col1:'Seniors Tax Offset*',col2:'$2230 if income under 32279 reducing to nil at 50119'},
        {col1:'SBE Tax Offset',col2:'8% up to $1000 on small business trust & partner tax'}      

    ]);

    const[forResidentTaxRates,setForResTaxRates]=useState([
        {col1:'to 80000',col2:'NA',col3:'NA',col4:'NA',col5:'NA',col6:'32.5%',col7:'32.5%'},
        {col1:'to 87000',col2:'NA',col3:'NA',col4:'32.5%',col5:'32.5%',col6:'NA',col7:'NA'},
        {col1:'to 90000',col2:'32.5%',col3:'32.5%',col4:'NA',col5:'NA',col6:'NA',col7:'NA'},
        {col1:'to 180000',col2:'37%',col3:'37%',col4:'37%',col5:'37%',col6:'37%',col7:'37%'},
        {col1:'180000+',col2:'45%',col3:'45%',col4:'45%',col5:'45%',col6:'47%',col7:'47%'},
    ]);

    const[whmTaxRates,setWhmTaxRates]=useState([
        {col1:'to 37000',col2:'15%',col3:'15%',col4:'15%',col5:'15%',col6:'NA',col7:'NA'},
        {col1:'to 87000',col2:'NA',col3:'NA',col4:'32.5%',col5:'32.5%',col6:'NA',col7:'NA'},
        {col1:'to 90000',col2:'32.5%',col3:'32.5%',col4:'NA',col5:'NA',col6:'NA',col7:'NA'},
        {col1:'to 180000',col2:'37%',col3:'37%',col4:'NA',col5:'NA',col6:'NA',col7:'NA'},
        {col1:'180000+',col2:'45%',col3:'45%',col4:'NA',col5:'NA',col6:'NA',col7:'NA'}
    ]);

    const [type1Width,setType1Width] = useState([180,150,150,400]);
    const [type2Width,setType2Width] = useState([250,110,110,110,110,110,110]);

    const [bsnsTaxRatesKeys,setBsnsTaxRatesKeys]=useState([
        'Entity type','2020','2019','2018','2017','2016','2015'
    ])

    const[companyTaxRates,setCompanyTaxRates]=useState([
        {col1:"Small business company",col2:"27.5%",col3:"27.5%",col4:"27.5%",col5:"27.5%",col6:"28.5%",col7:"30%"},
        {col1:"Base Rate companies",col2:"27.5%",col3:"27.5%",col4:"27.5%",col5:"30%",col6:"30%",col7:"30%"},
        {col1:"Other companies",col2:"30%",col3:"30%",col4:"30%",col5:"30%",col6:"30%",col7:"30%"},
        {col1:"Non-profit companies",col2:"Nil tax if taxable income under $416, otherwise above rates apply"}
    ])

    const[trustTaxRates,setTrustTaxRates]=useState([
        {col1:"Distributes income",col2:'Taxable to beneficiaries personally on share of income'},
        {col1:'Undistributed or Non-Resident',col2:'45%',col3:'45%',col4:'45%',col5:'49%',col6:'49%',col7:'49%'},
        {col1:'SBE Beneficiary Offset',col2:'8%',col3:'8%',col4:'8%',col5:'8%',col6:'5%'}
    ])

    const[partnerTaxRates,setPartnerTaxrates]=useState([
        {col1:'Distributed Income',col2:'Taxable to partners personally on share of income'},
        {col1:'SBE Partner Offset',col2:'8%',col3:'8%',col4:'8%',col5:'8%',col6:'5%'}
    ])

    const[smsfTaxRates,setSmsfTaxRates]=useState([
        {col1:'Accumulation account',col2:'15%',col3:'15%',col4:'15%',col5:'15%',col6:'15%',col7:'15%'},
        {col1:'Transition To Retirement',col2:'15%',col3:'15%',col4:'0%',col5:'0%',col6:'0%',col7:'0%'},
        {col1:'Pension account',col2:'0%',col3:'0%',col4:'0%',col5:'0%',col6:'0%',col7:'0%'},
        {col1:'Div 293 Contributions Surcharge',col2:'15%',col3:'15%',col4:'15%',col5:'15%',col6:'15%',col7:'15%'}
    ])

    const [sbeTurnover,setSbeTurnover]=useState([
        {col1:'SBE & Base Rate',col2:'$50m',col3:'$25m',col4:'$25m',col5:'$10m',col6:'$2m',col7:'$2m'},
        {col1:'SBE CGT concessions',col2:'$2m',col3:'$2m',col4:'$2m',col5:'$2m',col6:'$2m',col7:'$2m'},
        {col1:'SBE Tax Offset',col2:'$5m',col3:'$5m',col4:'$5m',col5:'$5m',col6:'$2m',col7:'$2m'}
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
        <div className="container">
            <div> 
            <Divider variant="middle" />
                <h1><span>
                    <img src={calendarGif} alt="calendar gif" width="30" height="30"></img>
                </span> Tax Due Dates</h1>
                <Divider variant="middle" />
                <p>
                BC Accountants has extended lodgement & payment dates for all return categories, providing we or another agent represented you as at 31st October 2019. Below is a 2019 return list that applies for our small business & small taxpayers.
                </p>
           
           
            <Table content ={taxDates} keys={taxKeys} type='type1' tableWidth={type1Width}/>

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
                <Table content ={basDueDates} keys={basKeys} type='type1' tableWidth={type1Width}/>
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
                <Table content ={payRollDates} keys={payRollKeys} type='type1' tableWidth={type1Width}/>
                <ul>
                <li>Note 1 - Super must actually be received by the fund by the due date, so do it a few days beforehand.</li>
                <li>Note 2 - Super must also be actually paid by 30 June in order to receive an income tax deduction for that year.</li>
            </ul>
                </div>
        </div>
        <div>
        <Banner2 image={parallaxImage} header="Tax Rates" />
        <div className="container">
        <div> 
            <Divider variant="middle" />
                <h1><span>
                    <img src={calendarGif} alt="calendar gif" width="30" height="30"></img>
                    </span> Personal Tax Rates
                </h1>
            <Divider variant="middle" />
                <p>
                The following tax rates are those that apply according to your residency status. Application of offsets and levies will also vary according to residency, age, family and other circumstances.
                </p>
                <div>
                    <h4 style={styles.tableTitles}>Residents</h4>     
                    <Table content ={residentTaxRates} keys={taxRatesKeys} type='type2' tableWidth={type2Width}/>
                    <ul>
                        <li>*2019 rates. Higher thresholds apply for seniors, couples and families with children</li>
                    </ul>
                </div>
                <Divider variant="middle" />
                <div>
                    <h4 style={styles.tableTitles}>Foreign Residents</h4>     
                    <Table content ={forResidentTaxRates} keys={taxRatesKeys} type='type2' tableWidth={type2Width}/>
                </div>
                <Divider variant="middle" />
                <div>
                    <h4 style={styles.tableTitles}>Working Holiday Makers (from 1/1/17)</h4>     
                    <Table content ={whmTaxRates} keys={taxRatesKeys} type='type2' tableWidth={type2Width}/>
                </div>
                <Divider variant="middle" />
                <div>
                    <span>Quick tax estimator  <Button variant="primary">Calculator</Button></span>
                </div>
                <Divider variant="middle" />

        </div>
        <div>
        <Divider variant="middle" />
                <h1><span>
                    <img src={calendarGif} alt="calendar gif" width="30" height="30"></img>
                    </span>  Business Tax Rates
                </h1>
            <Divider variant="middle" />
                <p>
                The table below shows the latest Small business entity (SBE) & Company tax rates from 2014 to 2020. From 2018 the reduced company tax rates also apply to "Base Rate" entities, that is those that have passive investment income rather than run a small business.
                </p>
                <div>
                    <h4 style={styles.tableTitles}>Company Tax Rates</h4>     
                    <Table content ={companyTaxRates} keys={bsnsTaxRatesKeys} type='type2' tableWidth={type2Width}/>
                </div>
                <Divider variant="middle" />
                <div>
                    <h4 style={styles.tableTitles}>Trust Tax Rates</h4>     
                    <Table content ={trustTaxRates} keys={bsnsTaxRatesKeys} type='type2' tableWidth={type2Width}/>
                </div>
                <Divider variant="middle" />
                <div>
                    <h4 style={styles.tableTitles}>Partnership Tax Rates</h4>     
                    <Table content ={partnerTaxRates} keys={bsnsTaxRatesKeys} type='type2' tableWidth={type2Width}/>
                </div>
                <Divider variant="middle" />
                <div>
                    <h4 style={styles.tableTitles}>SMSF Tax Rates</h4>     
                    <Table content ={smsfTaxRates} keys={bsnsTaxRatesKeys} type='type2' tableWidth={type2Width}/>
                </div>
                <Divider variant="middle" />
                <div>
                    <h4 style={styles.tableTitles}>SBE Turnover Thresholds</h4>     
                    <Table content ={smsfTaxRates} keys={bsnsTaxRatesKeys} type='type2' tableWidth={type2Width}/>
                </div>
                <div>
                    <span>Company tax calculator  <Button variant="primary">Calculator</Button></span>
                </div>
            </div>

        </div>
        <Banner2 image={parallaxImage} header="Features" />
        <div className="container">

        </div>
    </div>
        
        </>
    );
}

export default Home;