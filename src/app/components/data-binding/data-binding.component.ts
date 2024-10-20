import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string = "Angular 18";

  provinceName: string = "Punjab";

  inputType = "checkbox";

  myClassName:string = "bg-primary"

  rollNo: number = 123;

  isPakistani: boolean = false;

  currentDate: Date = new Date();
  
  firstName = signal("Wasif");

  constructor(){
  }

  changeCourseName() {
    this.courseName = "React JS";
    this.firstName.set("VVasif Ali");
  }

  showAlert(message:string) {
    alert(message);
  }

}
