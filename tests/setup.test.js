let animals = ["elephant","tiger"];

beforeAll(()=>{
    console.log("It will run before all")
})


beforeEach(()=>{
    console.log("beforeEach")
    animals = ["elephant","tiger"]
})

afterEach(()=>{
    console.log("afterEach")
})

afterAll(()=>{
    console.log("afterAll")
})

describe("animals array",()=>{
    it("add aligator to end of array",()=>{
        animals.push("aligator");
        expect(animals[animals.length-1]).toBe("aligator")
    })

    it("add monkey to beginning of array",()=>{
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey")
    })

    it("array length should be 2",()=>{
        expect(animals.length).toBe(2)
    })
})