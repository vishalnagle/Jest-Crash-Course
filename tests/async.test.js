const fetchData = require("../functions/async");

it("It should return correct todo",async ()=>{
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);

})