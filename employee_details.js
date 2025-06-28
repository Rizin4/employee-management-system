const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Sarah Wilson', age: 32, department: 'HR', salary: 48000 },
    { id: 5, name: 'Mike Davis', age: 29, department: 'IT', salary: 55000 }
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map(employee => 
        `<p><strong>ID:</strong> ${employee.id} | <strong>Name:</strong> ${employee.name} | <strong>Department:</strong> ${employee.department} | <strong>Salary:</strong> $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    document.getElementById('employeesDetails').innerHTML = `<h3>Total Salaries: $${totalSalaries.toLocaleString()}</h3>`;
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map(employee => 
        `<p><strong>ID:</strong> ${employee.id} | <strong>Name:</strong> ${employee.name} | <strong>Department:</strong> ${employee.department} | <strong>Salary:</strong> $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay || '<p>No HR employees found</p>';
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = 
            `<p><strong>Found Employee:</strong><br>
            <strong>ID:</strong> ${foundEmployee.id} | <strong>Name:</strong> ${foundEmployee.name} | <strong>Department:</strong> ${foundEmployee.department} | <strong>Salary:</strong> $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = '<p>No employee found with this ID</p>';
    }
}