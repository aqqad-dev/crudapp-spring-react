import {useEffect, useState} from 'react'
import {deleteEmployee, listEmployees} from '../service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(
            error => {
                console.error(error)
            }
        )
    }

    function updateEmployee(employeeId) {
        navigator(`/edit-employee/${employeeId}`)
    }

    function removeEmployee(employeeId) {
        deleteEmployee(employeeId).then(() => {
            getAllEmployees();
        }).catch(error => {
            console.error(error)
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    return (
        <div className='container'>

            <h2 className='text-center'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee first name</th>
                    <th>Employee last name</th>
                    <th>Employee email Id</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-success mb-2 m-1' onClick={() => updateEmployee(employee.id)}>Edit</button>
                                <button className='btn btn-danger mb-2 m-1' onClick={() => removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent