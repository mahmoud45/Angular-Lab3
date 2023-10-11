import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    studentName:string = '';
    nameErrors:string = '';

    studentAge:number = 0;
    ageErrors:string = '';

    students:{Name:string, Age: number}[] = [];

    validateName(nameInput : any): boolean{
        let name = nameInput.value;
        this.nameErrors = '';

        if(name === ''){
            this.nameErrors = "Name is required";
            return false;
        }

        else if(name.length < 3){
            this.nameErrors = "Name length must be 3 or more";
            return false;
        }

        this.studentName = name;
        return true;
    }

    validateAge(ageInput : any): boolean{
        let age = ageInput.value;
        this.ageErrors = '';

        if(isNaN(age) || age === ''){
            this.ageErrors = "Age is required";
            return false;
        }

        else if(age < 18){
            this.ageErrors = "Age must be 18 or higher";
            return false;
        }

        this.studentAge = age;
        return true;
    }

    addStudent(nameInput: any, ageInput: any){
        let checkName:boolean = this.validateName(nameInput);
        let checkAge: boolean = this.validateAge(ageInput);

        if( checkName && checkAge ){
            let student: {Name:string, Age: number} = {Name: this.studentName, Age: this.studentAge}

            let check: boolean = this.students.some((_student) => {
                return _student.Name === student.Name && _student.Age === student.Age
            })

            if(!check)
                this.students.push(student);
        }
    }

    delete(id: number){
        this.students = this.students.filter((student, index) => index != id);
    }
}
