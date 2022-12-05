import {Action, Selector, State, StateContext} from "@ngxs/store";
import {DataService} from "../../service/data/data.service";
import {tap} from "rxjs";
import {getDataTodos, onDeleteTodo, setDataTodo} from "../action/todo.action";
import {Injectable} from "@angular/core";


export class UsersModel{
  users: any
}


@State<UsersModel>({
  name:'appState',
  defaults:{
    users: []
  }
})

@Injectable()
export class AppState{
  constructor(private data: DataService) {}


  @Action(getDataTodos)
  getData(can: StateContext<UsersModel>){
    return this.data.getDataTodo().pipe(tap(da => {
      const state = can.getState()
      can.setState({
        ...state,
        users: da
      })
    }))
  }


  @Action(setDataTodo)
  setDataTodoState(ctx: StateContext<UsersModel>, {payload}: setDataTodo){
    return this.data.setDataTodo(payload).pipe(tap((data) => {
      const state = ctx.getState()
      ctx.patchState({
        users: [data, ...state.users]
      })
    }))
  }

  @Action(onDeleteTodo)
  onDeleteTodo(ctx: StateContext<UsersModel>, {id}:onDeleteTodo){
   return this.data.deleteDataTodo(id).pipe(tap(() => {
      const state = ctx.getState()
      const filteredArray = state.users.filter((todo:any) => todo.id !== id)
      ctx.setState({
        ...state,
        users: filteredArray
      })
    }))
  }

  @Selector()
  static selectDataTodo(state: UsersModel){
    return state.users
  }


}


