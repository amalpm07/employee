import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {

  const [id,setId]=useState(0)
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [design,setDesign]=useState('')
  const [salary,setSalary]=useState(0)

useEffect(()=>{
setId(JSON.parse(localStorage.getItem("id")))
setUname(localStorage.getItem("uname"))
setAge(JSON.parse(localStorage.getItem("age")))
setDesign(localStorage.getItem("design"))
setSalary(JSON.parse(localStorage.getItem("salary")))



},[])
const index=employee.map((item)=>item.id).indexOf(id)
let history=useNavigate()


const handleUpdate=(e)=>{
  e.preventDefault()

let emp=employee[index]
emp.name=uname
emp.age=age
emp.design=design
emp.salary=salary
history('/')
}
// console.log(id);
  return (
    <>
      <h1 className='text-center p-3 mt-3'>Update details of Employee</h1>
<div className='text-center p-3 fs-5'>
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
        <Form.Control value={uname} onChange={(e)=>{setUname(e.target.value)}} type="text"  />
       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Employee Age</Form.Label>
        <Form.Control value={age} onChange={(e)=>{setAge(e.target.value)}} type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control value={design} onChange={(e)=>{setDesign(e.target.value)}} type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Employee Salary</Form.Label>
        <Form.Control value={salary} onChange={(e)=>{setSalary(e.target.value)}} type="text"  />
      </Form.Group>
      <Button onClick={(e)=>{handleUpdate(e)}} variant="outline-primary" type="submit">
        Update
      </Button>
    </Form>
    </Col>
  </Row>
</Container>
    </>
  )
}

export default Edit
