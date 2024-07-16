import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoInterface } from './todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {

  constructor(private HttpClient: HttpClient) { }
  getData() {
    return this.HttpClient.get<TodoInterface[]>("http://localhost:3000/todoList");
  }
  postdata(data: TodoInterface) {
    return this.HttpClient.post("http://localhost:3000/todoList", data);
  }
  editData(id: any){
    return this.HttpClient.get<TodoInterface>(`http://localhost:3000/todoList/${id}`);
  }
}

