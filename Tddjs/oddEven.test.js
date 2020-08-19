const square = require("./oddEven");
const { TestScheduler } = require("jest");
test("OddEven test of number 2", ()=>{
    expect(square(2)).toBe(true)
});
test("OddEven test of number 3", ()=>{
    expect(square(3)).toBe(false)
});

test("OddEven test of number 0", ()=>{
    expect(square(0)).toEqual("Either Even or Odd")
});