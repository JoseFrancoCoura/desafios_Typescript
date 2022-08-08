// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*let employee = {};
employee.code = 10;
employee.name = "John";*/

//Respostas:

let Employee1 = {
    code: 10,
    name: "John"
}

let Employee2: {code: number, name: string} = {
    code: 10,
    name: "John"
}

interface IEmployee {
    code: Number,
    name: String
}

let employee3: IEmployee = {
    code: 10,
    name: "John"
}

const EmployeeObj = {} as IEmployee;
EmployeeObj.code = 10;
EmployeeObj.name = 'João';

let EmployeeOb1: IEmployee = {
    code: 10,
    name: 'João'
}
