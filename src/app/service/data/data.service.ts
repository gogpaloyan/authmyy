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
        {"id": 5665464, "title": "milk", "image": 'https://img.taste.com.au/JYIB8oVz/taste/2016/11/milk-48958-1.jpg'},
        {"id": 65465465, "title": "rgb light", "image": "https://content.instructables.com/F8A/2KGW/L2EQEVZZ/F8A2KGWL2EQEVZZ.jpg?auto=webp&frame=1&crop=3:2&width=800&height=1024&fit=bounds&md=d74617c505310b3f29fb94806aef33bd"},
        {"id": 64654654, "title": "bal", "image": "https://image.intertoys.nl/wcsstore/IntertoysCAS/images/catalog/full/1047095-bfa69d56.jpg"}
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
        {"id": 5665464, "title": "milk", "image": 'https://img.taste.com.au/JYIB8oVz/taste/2016/11/milk-48958-1.jpg'},
        {"id": 65465465, "title": "rgb light", "image": "https://content.instructables.com/F8A/2KGW/L2EQEVZZ/F8A2KGWL2EQEVZZ.jpg?auto=webp&frame=1&crop=3:2&width=800&height=1024&fit=bounds&md=d74617c505310b3f29fb94806aef33bd"},
        {"id": 64654654, "title": "bal", "image": "https://image.intertoys.nl/wcsstore/IntertoysCAS/images/catalog/full/1047095-bfa69d56.jpg"}
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
  setPay(title:string, id: string, img:string){
    return this.database.pays.push({
      id: id,
      title: title,
      image: img

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
