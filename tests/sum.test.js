const sum = require("../functions/sum")

describe("example tests",()=>{
    it("should add 1 + 2 equals 3",()=>{
        const result = sum(1,2);
        expect(result).toBe(3)
    })

    it("object assignment",()=>{
        const obj={};

        expect(obj).toEqual({})
    })
})


describe("truthy and falsy",()=>{
    it("null",()=>{
        const n = null;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
    })
})


describe("numbers",()=>{
    it("two plus two",()=>{
        const value = 2+2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4)
    })

    it("adding floats",()=>{
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.29999999999)
    })
})


describe("strings",()=>{
    it("There is no I in team",()=>{
        expect("team").not.toMatch(/I/)
    })
})


describe("arrays",()=>{
    const shoppingList = ["grocery","paper","milk"];
    expect(shoppingList).toContain("milk")
})

function compileAndroidCode(){
    throw new Error("you are using wrong JDK")
}

describe("exceptions",()=>{
    it("compiling android goes as expected",()=>{
        expect(()=>compileAndroidCode()).toThrow(
            "you are using wrong JDK"
        );
    })
})