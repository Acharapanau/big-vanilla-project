type UserType = {
    [key:string]:{id:number, name:string}
};

let users:UserType

beforeEach(() => {
     users = {
        '101': {id: 101, name: 'Dimych'},
        '1212': {id: 1212, name: 'Natasha'},
        '123124': {id: 123124, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})


test("should update be corresponding user", () => {
   delete users['1']

    expect(users['1']).toBeUndefined()
})