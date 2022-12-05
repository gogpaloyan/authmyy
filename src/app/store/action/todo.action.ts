

export class getDataTodos{
  static readonly type = '[Users] get data todo'
}

export class setDataTodo{
  static readonly type = '[User] set data todo'
  constructor(public payload: any) {}
}

export class onDeleteTodo{
  static readonly type = '[User] delete todo data'
  constructor(public id: any) {}
}
