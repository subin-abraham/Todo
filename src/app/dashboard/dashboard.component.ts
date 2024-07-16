import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoServicesService } from '../todo-services.service';
import { TodoInterface } from '../todo-interface';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  todoInput: string = "";
  editmode = false;
  todoArray: TodoInterface[] = [];
  formData: TodoInterface = {
    id: '',
    todo: ''
  }
  constructor(private todoService: TodoServicesService) { }
  ngOnInit(): void {
    this.getTodo();
  }
  getTodo() {
    this.todoService.getData().subscribe((data) => {
      this.todoArray = data;
      this.formData.id = String(this.todoArray.length + 1)
    })
  }
  addTodo() {
    this.todoService.postdata(this.formData).subscribe(
      () => {
        this.getTodo();
        this.formData.todo = ""
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editTodo(ID: string) {
    this.todoService.editData(ID).subscribe((data) => {
      this.formData.todo = data.todo
      this.editmode = true;
    })

  }
  deleteTodo(ID: string) {
    this.todoArray = this.todoArray.filter(data => data.id !== ID);

    this.todoService.postdata(this.formData).subscribe

  };


}

