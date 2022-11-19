import {Injectable} from '@angular/core';

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
      "birtDay": "12.12.12",
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
      "birtDay": "12.12.12",
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
      ]
    }
  )

  }

  getPay(){
    return this.database.pays
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

  constructor() { }
}
