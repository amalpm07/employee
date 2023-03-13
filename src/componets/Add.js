import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
function Add() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [design,setDesign]=useState('')
  const [salary,setSalary]=useState('')

//uuid(universal unique identifier) is used for genarating unique id
let history=useNavigate()
  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    let uniqueid=ids.slice(0,8)
    
    employee.push(
      {
        id:uniqueid,
        name:uname,
        age:age,
        design:design,
        salary:salary
      }
    )
    history('/')
  }


  return (
    <>
       <h1 className='text-center p-5 mt-3'>employee Management system</h1>
      <div className='text-center'>
        <p className='text-center p-2 fs-5'>An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically.
          The employee management system lowers the burden and the pressure on HRs and the business managers.
          Thanks to the technology which offers us a plethora of solutions which makes the work easier and faster.</p>
</div>


<Container>
  <Row>
    <Col md={4}>
      <img style={{width:'75%'}} src='https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png'></img>
    </Col>
    <Col md={8}>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Employee Name</Form.Label>
        <Form.Control 
        // value={uname}
         onChange={(e)=>{setUname(e.target.value)}} 
        type="text"  />
       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Employee Age</Form.Label>
        <Form.Control
         onChange={(e)=>{setAge(e.target.value)}} 
         type="text"  required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control 
        onChange={(e)=>{setDesign(e.target.value)}} 
        type="text" required />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Employee Salary</Form.Label>
        <Form.Control  
        onChange={(e)=>{setSalary(e.target.value)}} 
        type="text" required />
      </Form.Group>
      <Button 
      onClick={(e)=>{handleAdd(e)}}
       variant="outline-primary" 
      type="submit">
        Add
      </Button>
    </Form>
    </Col>
  </Row>
</Container>
    </>
  )
}

export default Add
