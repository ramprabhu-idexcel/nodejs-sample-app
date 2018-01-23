'use strict'

let fs = require("fs")
let _ = require("underscore")

module.exports = {

  index: (request, response, next) => {
    const employees = fs.readFileSync("data_files/employee.json")
    const employees_json = JSON.parse(employees)
    //response.send({ employee_json })
    response.render('employees/index', { employees: employees_json })
  },

  show: (request, response, next) => {
    const { id } = request.params
    const employees = fs.readFileSync("data_files/employee.json")
    const employee_json = JSON.parse(employees)
    const filtered = _.where(employee_json, { id: id })
    response.render('employees/show', { employees: filtered })
  }

}
