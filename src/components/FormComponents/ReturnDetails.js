import React from "react"
import { useState } from "react";
import { useFormik } from 'formik';
import { Divider } from '@mui/material';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Select from 'react-select'
import './ReturnDetails.css'
import { Checkbox } from '@mui/material';
import {FormControlLabel} from '@mui/material';
import { Button } from '@mui/material';

function ReturnDetails () {

    const [selectBtnIncome , setSelectBtnIncome] = useState(' ')
    const [selectDeductionBtnIncome , setSelectDeductionBtnIncome] = useState(' ')
    const [yearTopic, setYearTopic] = useState(' ')
    const [returnTypeTopic, setReturnTypeTopic] = useState(' ')
    const [taxResidencyTopic, setTaxResidency] = useState(' ')
    const [workDeductItemSelect, setWorkDeductItemSelect ] = useState(' ')


    const years = [{value:"2022", label:"2022"},{value:"2021",label:"2021"},{value:"2020",label:"2020"},{value:"2019",label:"2019"},{value:"2018",label:"2018"} ]
    const returnTypes = [{value:"Standard",label:"Standard $65"},{value:"Rental",label:"Rental $95"},{value:"Business",label:"Business $110"},{value:"Business & Rental",label:"Business & Rental $145"},{value:"Working Holiday Visa",label:"Working Holiday Visa $55"},{value:"Student Discount",label:"Student Discount $55"},{value:"Return Not Necessary",label:"Return Not Necessary $25"}]
    const taxResidency = [{value:"Australian Resident",label:"Australian Resident"},{value:"Foreign Resident",label:"Foreign Resident"},{value:"Temporary Work Visa",label:"Temporary Work Visa"},{value:"Working Holiday Visa",label:"Working Holiday Visa"},{value:"Overseas Student Visa",label:"Overseas Student Visa"}]

    //work dedcution select fields
    const workDeductItems = [{value:'vehicle', label:"Vehicle"},{value:'travel', label:"Travel"},{value:'clothing', label:"Clothing"},{value:'selfed', label:"Self-Ed"},{value:'otherwork', label:"Other Work"}]

    const workDeductVehicleTypes = [{value:'carKmBasis', label:"Car Km Basis"},{value:'carLogBasis', label:"Car Logbook Basis"},{value:'commercialVehicles', label:"Comercial Vehicles"},{value:'carExpenses', label:"33% Car Expenses"},{value:'carValue', label:"12% Car Value"}]


    const [state, setState] = React.useState({
        incomeCheckA: false,
        incomeCheckB: false,
        incomeCheckC: false,
        incomeCheckD: false,
        incomeCheckE: false,
        incomeCheckF: false,
        incomeCheckG: false,
        incomeCheckH: false,
        incomeCheckGI: false,
      });

      const [stateDeduct, setStateDeduct] = React.useState({
        deductCheckA: false,
        deductCheckB: false,
        deductCheckC: false,
      });

    const handleIncomeCheckChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const handleDeductCheckChange = (event) => {
        setStateDeduct({ ...stateDeduct, [event.target.name]: event.target.checked });
      };

    function handleIncomeSelectBtnClick(e) {
        console.log(e.target.id)
        setSelectBtnIncome(e.target.id)
    }

    function handleDeductionsSelectBtnClick(e) {
        console.log(e.target.id)
        setSelectDeductionBtnIncome(e.target.id)
    }

    function handleDropDownYears(e) {    
        console.log(e)
        setYearTopic(e.value)
    }
    function handleDropDownReturnTypes(e) {    
        console.log(e)
        setReturnTypeTopic(e.value)
    }
    function handleDropDownTaxResidency(e) {    
        console.log(e)
        setTaxResidency(e.value)
    }

    function handleworkDeductItemSelect(e) {    
        console.log(e)
        setWorkDeductItemSelect(e.value)
    }



    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    return( 
        <>
            <Container style={{padding:10, marginTop:62 , border:2, borderColor: "black" , borderStyle:"solid"}}>
                
            <form onSubmit={formik.handleSubmit}>
            <div style={{display:"flex" , justifyContent:"flex-start" , margin:10}}>

              <h1>Return Details</h1>

              <Select className="select" onChange={handleDropDownYears} options={years} placeholder="Year" />  
              <Select className="select" onChange={handleDropDownReturnTypes} options={returnTypes} placeholder="Return Type" />  
              <Select className="select" onChange={handleDropDownTaxResidency} options={taxResidency} placeholder="Tax Residency" />  
             
            </div>

             <Divider style={{marginBottom:10 , marginTop:10}}/>

            <div style={{margin:10}}>
             <h1>Your Details</h1>

            <Row >

                <Col lg={3}>
                <input className="infeilds" id="name" name="name" type="text" placeholder="Name" onChange={formik.handleChange} value={formik.values.name} />
                </Col>

                <Col lg={3}>
                <input className="infeilds"  id="fileNumber" name="fileNumber"  type="text"  placeholder="Tax File Number"  onChange={formik.handleChange}  value={formik.values.fileNumber}  />
                </Col>

                <Col lg={3}>
                <input    className="infeilds"   id="birthdate"   name="birthdate"   type="date"   onChange={formik.handleChange}   value={formik.values.birthdate} />
                </Col>

                <Col lg={3}>
                <input  className="infeilds" id="group" name="group" type="text" placeholder="Group" onChange={formik.handleChange} value={formik.values.group}  />  
                </Col>
            </Row>

            <Row>

                <Col lg={3}>
                <input   className="infeilds"  id="email"  name="email"  type="text"  placeholder="Email"  onChange={formik.handleChange}  value={formik.values.email} />  
                </Col>

                <Col lg={3}>
                <input  className="infeilds" id="mobileNum" name="mobileNum" type="text" placeholder="Mobile Number" onChange={formik.handleChange} value={formik.values.mobileNum} />  
                </Col>

                <Col lg={3}>
                <input  className="infeilds" id="address" name="address" type="textarea" placeholder="Current Address" onChange={formik.handleChange} value={formik.values.address}  />  
                </Col>

            </Row>
            </div>
                {/* <button type="submit">Submit</button> */}
                </form>

            </Container>

            {
                returnTypeTopic === "Rental" || returnTypeTopic ==="Business & Rental" ?

                <>
                    <Container style={{padding:10, marginTop:30 , border:2, borderColor: "black" , borderStyle:"solid"}}>  
                        <div style={{display:"flex" , justifyContent:"flex-start" , margin:10}}>
                        <h1>Return Income</h1> 
                        </div>
                   </Container>
                </>

                :

                " "

            }

            {
                returnTypeTopic === "Business" || returnTypeTopic ==="Business & Rental" ?

                <>
                    <Container style={{padding:10, marginTop:30 , border:2, borderColor: "black" , borderStyle:"solid"}}>  
                        <div style={{display:"flex" , justifyContent:"flex-start" , margin:10}}>
                        <h1>Business Income</h1> 
                        </div>
                   </Container>
                </>

                :

                " "

            }

            {
                returnTypeTopic === "Working Holiday Visa" ?

                <>
                    <Container style={{padding:10, marginTop:30 , border:2, borderColor: "black" , borderStyle:"solid"}}>  
                        <div style={{display:"flex" , justifyContent:"flex-start" , margin:10}}>
                        <h1>WHV Income</h1> 
                        </div>
                   </Container>
                </>

                :

                " "

            }


            {
                returnTypeTopic === "Student Discount" ?

                <>
                    <Container style={{padding:10, marginTop:30 , border:2, borderColor: "black" , borderStyle:"solid"}}>  
                        <div style={{display:"flex" , justifyContent:"flex-start" , margin:10}}>
                        <h1>Student Details</h1> 
                        </div>
                   </Container>
                </>

                :

                " "

            }

            <Container style={{padding:10, marginTop:30 , border:2, borderColor: "black" , borderStyle:"solid"}}>
            {
                    selectBtnIncome === "enter" ?

                <>
                <div style={{display:"flex" , justifyContent:"space-between", margin:10}}>

                    <div>

                        <h1>Income</h1>

                    </div>
                    <div className="selectDiv" >

                        <Button variant="contained" color="primary" className="selectBtn" onClick={handleIncomeSelectBtnClick} id="enter" disabled>
                            Enter
                        </Button>

                        <Button variant="contained" color="primary" className="selectBtn" onClick={handleIncomeSelectBtnClick} id="upload">
                            Upload
                        </Button>

                        <input  className="displayfields" disabled  id="totIncome" name="totIncome" type="text" placeholder="Total Income" value={formik.values.address} />
                    </div>

                </div>


                <Divider/>

                    <div>
                    <FormControlLabel
                            control={<Checkbox checked={state.incomeCheckA} onChange={handleIncomeCheckChange} name="incomeCheckA" />}
                            label="Wages, Salaries & Allowances" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    <Divider/>
                    <FormControlLabel
                            control={<Checkbox checked={state.incomeCheckB} onChange={handleIncomeCheckChange} name="incomeCheckB" />}
                            label="Other Work Income" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    <Divider/> 
                    <FormControlLabel
                            control={<Checkbox checked={state.incomeCheckC} onChange={handleIncomeCheckChange} name="incomeCheckC" />}
                            label="Govt Allowances & Pensions" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    <Divider/> 
                    <FormControlLabel
                            control={<Checkbox checked={state.incomeCheckD} onChange={handleIncomeCheckChange} name="incomeCheckD" />}
                            label="Interest" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    <Divider/> 
                    <FormControlLabel
                            control={<Checkbox checked={state.incomeCheckE} onChange={handleIncomeCheckChange} name="incomeCheckE" />}
                            label="Dividends" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    <Divider/> 
                    <FormControlLabel
                            control={<Checkbox checked={state.incomeCheckF} onChange={handleIncomeCheckChange} name="incomeCheckF" />}
                            label="Distributions" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    <Divider/> 
                    <FormControlLabel
                            control={<Checkbox checked={state.incomeCheckG} onChange={handleIncomeCheckChange} name="incomeCheckG" />}
                            label="Foreign Income" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    <Divider/> 
                    <FormControlLabel
                            control={<Checkbox checked={state.incomeCheckH} onChange={handleIncomeCheckChange} name="incomeCheckH" />}
                            label="Super & ETP Payments" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    <Divider/> 
                    <FormControlLabel
                            control={<Checkbox checked={state.incomeCheckI} onChange={handleIncomeCheckChange} name="incomeCheckI" />}
                            label="Other income & upload info" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    </div>
               
                </>
                :
                <>
                    {
                        selectBtnIncome === "upload" ?

                        <>
                            <div style={{display:"flex" , justifyContent:"space-between", margin:10}}>

                            <div>

                                <h1>Income</h1>

                            </div>
                            <div className="selectDiv" >

                                <Button variant="contained" color="primary" className="selectBtn" onClick={handleIncomeSelectBtnClick} id="enter" >
                                    Enter
                                </Button>

                                <Button variant="contained" color="primary" className="selectBtn" onClick={handleIncomeSelectBtnClick} id="upload" disabled>
                                    Upload
                                </Button>

                                <input  className="displayfields"  disabled id="totIncome" name="totIncome" type="text" placeholder="Total Income" value={formik.values.address}/>
                            </div>

                            </div>


                            <Divider/>
                            <h1>Uploading Things</h1>
                        </>
                        :
                        <>
                            <div style={{display:"flex" , justifyContent:"space-between", margin:10}}>

                                <div>

                                    <h1>Income</h1>

                                </div>
                                <div className="selectDiv" >

                                    <Button variant="contained" color="primary" className="selectBtn" onClick={handleIncomeSelectBtnClick} id="enter" >
                                        Enter
                                    </Button>

                                    <Button variant="contained" color="primary" className="selectBtn" onClick={handleIncomeSelectBtnClick} id="upload">
                                        Upload
                                    </Button>

                                    <input   className="displayfields"  disabled  id="totIncome"  name="totIncome"  type="text"  placeholder="Total Income"  value={formik.values.address} />
                                </div>

                            </div>
                        </>
                    }

                </>
                }

    
                </Container>

                <Container style={{padding:10, marginTop:30 , border:2, borderColor: "black" , borderStyle:"solid"}}>
                {
                    selectDeductionBtnIncome === "enter" ?

                <>
                <div style={{display:"flex" , justifyContent:"space-between", margin:10}}>

                    <div>

                        <h1>Deductions</h1>

                    </div>
                    <div className="selectDiv" >

                        <Button variant="contained" color="primary" className="selectBtn" onClick={handleDeductionsSelectBtnClick} id="enter" disabled>
                            Enter
                        </Button>

                        <Button variant="contained" color="primary" className="selectBtn" onClick={handleDeductionsSelectBtnClick} id="upload">
                            Upload
                        </Button>

                        <input  className="displayfields" disabled  id="totDeduct"  name="totDeduct"  type="text"  placeholder="Total Deductions"  value={formik.values.address} />
                    </div>

                </div>


                <Divider/>

                    <div>
                    <FormControlLabel
                            control={<Checkbox checked={state.deductCheckA} onChange={handleDeductCheckChange} name="deductCheckA" />}
                            label="Work Deductions" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    {
                        stateDeduct.deductCheckA  ?

                        <>
                            <Divider/>
                            <div style={{display:"flex", justifyContent:"flex-start"}}>
                                <Select className="select" onChange={handleworkDeductItemSelect} options={workDeductItems} placeholder="ITEM :" />
                                {
                                    workDeductItemSelect === 'vehicle' ?
                                        <>
                                            <Select className="select" onChange={handleworkDeductItemSelect} options={workDeductVehicleTypes} placeholder={ workDeductItemSelect + "Type :"} />
                                        </>
                                    :
                                        workDeductItemSelect === 'travel' ?
                                            <>
                                                <Select className="select" onChange={handleworkDeductItemSelect} options={workDeductVehicleTypes} placeholder={ workDeductItemSelect + "Type :"} />
                                            </>
                                        :
                                            workDeductItemSelect === 'clothing' ?
                                                <>
                                                    <Select className="select" onChange={handleworkDeductItemSelect} options={workDeductVehicleTypes} placeholder={ workDeductItemSelect + "Type :"} />
                                                </>
                                            :
                                                workDeductItemSelect === 'selfed' ?
                                                    <>
                                                        <Select className="select" onChange={handleworkDeductItemSelect} options={workDeductVehicleTypes} placeholder={ workDeductItemSelect + "Type :"} />
                                                    </>
                                                :
                                                    workDeductItemSelect === 'otherwork' ?
                                                        <>
                                                            <Select className="select" onChange={handleworkDeductItemSelect} options={workDeductVehicleTypes} placeholder={ workDeductItemSelect + "Type :"} />
                                                        </>
                                                    :
                                                        ""    

                                }
                            </div>
                            
                        </>
                        :
                        ""
                       
                    }
                    <Divider/>

                    <FormControlLabel
                            control={<Checkbox checked={state.deductCheckB} onChange={handleDeductCheckChange} name="deductCheckB" />}
                            label="Other Deductions" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    {
                        stateDeduct.deductCheckB  ?

                        <>
                            <Divider/>
                            <h3>Other Deductions Related Things</h3>
                        </>
                        :
                        ""
                       
                    }
                    <Divider/> 

                    <FormControlLabel
                            control={<Checkbox checked={state.deductCheckC} onChange={handleDeductCheckChange} name="deductCheckC" />}
                            label="Upload if unsure" sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                    />
                    <Divider/> 
                    </div>
               
                </>
                :
                <>
                    {
                        selectDeductionBtnIncome === "upload" ?

                        <>
                            <div style={{display:"flex" , justifyContent:"space-between", margin:10}}>

                            <div>

                                <h1>Deductions</h1>

                            </div>
                            <div className="selectDiv" >

                                <Button variant="contained" color="primary" className="selectBtn" onClick={handleDeductionsSelectBtnClick} id="enter" >
                                    Enter
                                </Button>

                                <Button variant="contained" color="primary" className="selectBtn" onClick={handleDeductionsSelectBtnClick} id="upload" disabled>
                                    Upload
                                </Button>

                                <input className="displayfields" disabled  id="totDeduct"  name="totDeduct"  type="text"  placeholder="Total Deductions"  value={formik.values.address} />
                            </div>

                            </div>


                            <Divider/>
                            <h1>Uploading Things</h1>
                        </>
                        :
                        <>
                            <div style={{display:"flex" , justifyContent:"space-between", margin:10}}>

                                <div>

                                    <h1>Deductions</h1>

                                </div>
                                <div className="selectDiv" >

                                    <Button variant="contained" color="primary" className="selectBtn" onClick={handleDeductionsSelectBtnClick} id="enter" >
                                        Enter
                                    </Button>

                                    <Button variant="contained" color="primary" className="selectBtn" onClick={handleDeductionsSelectBtnClick} id="upload">
                                        Upload
                                    </Button>

                                    <input className="displayfields" disabled id="totDeduct" name="totDeduct" type="text" placeholder="Total Deductions" value={formik.values.address} />
                                </div>

                            </div>
                        </>
                    }

                </>
                }

    
                </Container>

        </>
    );
}

export default ReturnDetails;