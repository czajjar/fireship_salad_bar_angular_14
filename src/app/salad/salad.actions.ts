export class AddTopping {
  static readonly type = '[salad] add topping';
  constructor(public payload: string) {}
}
export class RemoveLastTopping {
  static readonly type = '[salad] remove last topping';
}

export class StartOver {
  static readonly type = '[salad] start over';
}
