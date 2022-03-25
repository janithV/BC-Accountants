import {React} from "react"
import { useState } from "react";
import { useFormik } from 'formik';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Divider } from '@mui/material';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const ReturnDetails = () => {

    const [yearTopic, setYearTopic] = useState('Year')
    const [returnTypeTopic, setReturnTypeTopic] = useState('Return Type')
    const [taxResidencyTopic, setTaxResidency] = useState('Tax Residency')
    const years = ["2022","2021","2020","2019","2018" ]
    const returnTypes = ["Standard","Rental","Business","Standard & Rental","Working Holiday Visa","Student Discount","Return Not Necessary"]
    const taxResidency = ["Australian Resident","Foreign Resident","Temporary Work Visa","Working Holiday Visa","Overseas Student Visa"]

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
              <Dropdown style={{margin:10}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {yearTopic}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {years.map((item)=> (
                            <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
             </Dropdown>
             <Dropdown style={{margin:10}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {returnTypeTopic}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {returnTypes.map((item)=> (
                            <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
             </Dropdown>  
             <Dropdown style={{margin:10}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {taxResidencyTopic}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {taxResidency.map((item)=> (
                            <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
             </Dropdown>  
             </div>

             <Divider style={{marginBottom:10 , marginTop:10}}/>

            
             <h1>Your Details</h1>

            <Row >
              {/* <label htmlFor="firstName">First Name</label> */}
                <Col lg={3}>
                <input

                    style={{width:"100%" , margin:5}}id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                </Col>

                <Col lg={3}>
                {/* <label htmlFor="lastName">Last Name</label> */}
                <input 
                    style={{width:"100%" , margin:5}}
                    id="fileNumber"
                    name="fileNumber"
                    type="text"
                    placeholder="tax file number"
                    onChange={formik.handleChange}
                    value={formik.values.fileNumber}
                />
                </Col>

                <Col lg={3}>
                <input 
                    style={{width:"100%" , margin:5}}
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    // placeholder="tax file number"
                    onChange={formik.handleChange}
                    value={formik.values.birthdate}
                />
                </Col>

                <Col lg={3}>
                <input 
                    style={{width:"100%" , margin:5}}
                    id="group"
                    name="group"
                    type="text"
                    placeholder="Group"
                    onChange={formik.handleChange}
                    value={formik.values.group}
                />  
                </Col>
            </Row>

            <Row>

                <Col lg={3}>
                <input 
                    style={{width:"100%" , margin:5}}
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />  
                </Col>

                <Col lg={3}>
                <input 
                    style={{width:"100%" , margin:5}}
                    id="mobileNum"
                    name="mobileNum"
                    type="text"
                    placeholder="Mobile Number"
                    onChange={formik.handleChange}
                    value={formik.values.mobileNum}
                />  
                </Col>

                <Col lg={3}>
                <input 
                    style={{width:"100%" , margin:5}}                  
                    id="address"
                    name="address"
                    type="textarea"
                    placeholder="Current Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />  
                </Col>

            </Row>
                {/* <button type="submit">Submit</button> */}
                </form>

            </Container>

        </>
    );
}

export default ReturnDetails;