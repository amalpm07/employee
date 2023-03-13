import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { json, Link,useNavigate } from 'react-router-dom';

function Home() {
let history=useNavigate()
  const handleDelete=(id)=>{    //indexOf:-used to find index
                                   //splice:-is used to remove item in array
      let index= employee.map(item=>item.id).indexOf(id)
        employee.splice(index,1) 
        history('/')                          
    
  }
  const handleEdit=(id,uname,age,design,salary)=>{
    localStorage.setItem("id",JSON.stringify(id))
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",JSON.stringify(age))
    localStorage.setItem("design",design)
    localStorage.setItem("salary",JSON.stringify(salary))

  }
  return (
    <>
      <h1 className='text-center p-5 mt-3'>employee Management system</h1>
      <div className='text-center'>
        <p className='text-center p-2 fs-5'>An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically.
          The employee management system lowers the burden and the pressure on HRs and the business managers.
          Thanks to the technology which offers us a plethora of solutions which makes the work easier and faster.</p>

        <Link to='/add'>
          <Button className='mt-3' variant='outline-info'>Add New Employee  <br></br><i class="fa-solid fa-user-plus"></i></Button>

        </Link>
        <Table striped bordered hover style={{ margin: '7rem', width: '85%' }}>
          <thead>
            <tr>
              <th>id</th>
              <th> Name</th>
              <th>Age</th>
              <th>Design</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employee && employee.length > 0 ?
                employee.map(item => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.design}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link to='/edit'>
                        <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.design,item.salary)} className='ms-2 me-3' variant="outline-success"><i class="fa-solid fa-user-pen"></i></Button>{' '}

                      </Link>
                      <Button onClick={()=>handleDelete(item.id)} className='ms-2 me-3' variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>{' '}
                    </td>
                  </tr>

                ))

                : 'no tabale data'
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Home
