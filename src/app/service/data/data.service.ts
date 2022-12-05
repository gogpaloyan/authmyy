import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database:any;
  data: any = [
    {
      "id": 0,
      "name": "Admin",
      "surName": "Admin",
      "birtDay": "Sat Nov 19 2022 15:36:07 GMT+0400 (Армения, стандартное время)",
      "auth": {
        "userEmail": "admin@mail.ru",
        "userPassword": "admin"
      },
      "data": [
        {"id": 0,"title": "Learn Angular","completed": false},
        {"id": 1,"title": "Learn Redux","completed": false},
        {"id": 2,"title": "Learn React","completed": false}
      ],
      "pays":[
        {"id": 465465465, "title": "milk"},
        {"id": 4465456465149815, "title": "rgb light"},
        {"id": 954956165415, "title": "bal"}
      ]
    },
    {
      "id": 1,
      "name": "Grigor",
      "surName": "Paloyan",
      "birtDay": "Sat Nov 19 2022 15:36:07 GMT+0400 (Армения, стандартное время)",
      "auth": {
        "userEmail": "g@mail.ru",
        "userPassword": "1111"
      },
      "data": [
        {"id": 0,"title": "Learn Angular","completed": false},
        {"id": 1,"title": "Learn Redux","completed": false},
        {"id": 2,"title": "Learn React","completed": false}
      ],
      "pays":[
        {"id": 5665464, "title": "milk"},
        {"id": 65465465, "title": "rgb light"},
        {"id": 64654654, "title": "bal"}
      ]
    }
  ]
  pays:any;
  btn: boolean = true

  onAdd(title:string){
    return this.database.data.push({
      "id": Math.random(),
      "title": title,
      "completed": false
    })
  }
  onDelete(id:number){
    return this.database.data = this.database.data.filter((todo:any)=>{
      return id !== todo.id
    })
}
  getData(){
    return this.data
  }
  setDataRegister(name:string, surName:string, birtDay: string, login:string, password:string){
  return this.data.push(
    {
      "id": Math.random(),
      "name": name,
      "surName": surName,
      "birtDay": birtDay,
      "auth": {
        "userEmail": login,
        "userPassword": password
      },
      "data": [
        {"id": Math.random(),"title": "Learn Angular","completed": false},
        {"id": Math.random(),"title": "Learn Redux","completed": false},
        {"id": Math.random(),"title": "Learn React","completed": true}
      ],
      "pays":[]
    }
  )

  }
  getPay(){
    return this.database.pays
  }
  onDeletePay(id:number){

    return this.database.pays = this.database.pays.filter((todo:any) => todo.id !== id)
  }
  removePay(id: string){
    return this.database.pays = this.database.pays.filter((i:any) => i.id !== id)
  }
  setPay(title:string, id: string){
    return this.database.pays.push({
      id: id,
      title: title
    })
  }

  constructor(private http: HttpClient) { }


  getDataTodo(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  setDataTodo(payload: any){
    return this.http.post('https://jsonplaceholder.typicode.com/todos', payload)
  }
  deleteDataTodo(id: number){
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/' + id)
  }
}
