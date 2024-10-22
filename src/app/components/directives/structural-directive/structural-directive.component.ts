import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visisble:boolean = false;

  isDiv2Visible:boolean = false;

  num1:string = '';

  num2:string = '';

  isActive: boolean = false;

  selectedState:string = '';

  cityArray:string []=['Islamabad','Peshawar','Lahore','Quetta','Karachi'];

  studentList: any []=[
    {studentId:1, name:'Ayesha', city:'Lahore', isActive:true},
    {studentId:2, name:'Mariyam', city:'Lahore', isActive:false},
    {studentId:3, name:'Wasif', city:'Islamabad', isActive:true},
    {studentId:4, name:'Wahaj', city:'Peshawar', isActive:false},
    {studentId:5, name:'Areeba', city:'Quetta', isActive:false},
    {studentId:6, name:'Hassan', city:'Islamabad', isActive:false},
    {studentId:7, name:'Laiba', city:'Karachi', isActive:true}

  ];

  showDiv1(){
    this.isDiv1Visisble = true;
  }

  hideDiv1(){
    this.isDiv1Visisble = false;
  }

  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
