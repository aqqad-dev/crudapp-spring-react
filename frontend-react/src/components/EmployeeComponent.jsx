import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {createEmployee, getEmployee, updateEmployee} from "../service/EmployeeService.js";

export const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    useEffect(() => {
        if (id) {
            getEmployeeById(id)
        }
    }, [])

    const navigator = useNavigate();

    const {id} = useParams();
    function saveEmployee(e) {
        e.preventDefault();

        if (validateForm) {
            const employee = {firstName, lastName, email}

            createEmployee(employee).then(() => {
                navigator('/employees')
            })
        }
    }

    function EditEmployee(e) {
        e.preventDefault();

        if (validateForm) {
            const employee = {firstName, lastName, email}

            updateEmployee(id,employee).then(() => {
                navigator('/employees')
            })
        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = {... errors}
        if(firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required!';
            valid = false;
        }

        if(lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required!';
            valid = false;
        }

        if(lastName.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Last name is required!';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;

    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    function getEmployeeById(employeeId) {
        getEmployee(employeeId).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-abel'> First Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                >
                                </input>
                                { errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
                                <br />
                                <label className='form-abel'> Last Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                >
                                </input>
                                { errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
                                <br />
                                <label className='form-abel'> E-mail</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee E-mail'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid': ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                                { errors.email && <div className='invalid-feedback'> {errors.email} </div>}
                                <br />
                                <button className='btn btn-success' onClick={id ? EditEmployee : saveEmployee}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}