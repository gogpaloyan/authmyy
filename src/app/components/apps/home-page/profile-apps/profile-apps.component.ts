import {Component, Input, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AppState, UsersModel} from "../../../../store/state/todo.state";
import {Observable} from "rxjs";
import {getDataTodos, onDeleteTodo, setDataTodo} from "../../../../store/action/todo.action";

@Component({
  selector: 'app-profile-apps',
  templateUrl: './profile-apps.component.html',
  styleUrls: ['./profile-apps.component.sass']
})
export class ProfileAppsComponent implements OnInit {
  data: [] | any;
  text: string = "";

  constructor(private store: Store) { }
  @Select(AppState.selectDataTodo) data$: Observable<UsersModel> | undefined


  ngOnInit(): void {
    this.store.dispatch(new getDataTodos())
    this.data$?.subscribe((data) => {
      this.data = data
    })
  }

  onDelete(id: number){
    return this.store.dispatch(new onDeleteTodo(id))
  }
  setDate(){
    this.store.dispatch(new setDataTodo({
      "userId": 300,
      "title": this.text,
      "completed": false,
      id: 400,
    }))
    return this.text = ""
  }
}
