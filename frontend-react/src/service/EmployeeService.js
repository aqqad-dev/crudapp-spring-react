import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080'

export const listEmployees = () => axios.get(`${REST_API_BASE_URL}/api/employees`);

export const createEmployee = (employee) => axios.post(`${REST_API_BASE_URL}/api/employees`, employee);

export const getEmployee = (employeeId) => axios.get(`${REST_API_BASE_URL}/api/employees/${employeeId}`);

export const updateEmployee = (employeeId, employee) => axios.put(`${REST_API_BASE_URL}/api/employees/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => axios.delete(`${REST_API_BASE_URL}/api/employees/${employeeId}`);

