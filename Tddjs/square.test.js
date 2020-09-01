const square = require("./square");
const { TestScheduler } = require("jest");
test("Test Square of a number Positive", ()=>{
    expect(square(2)).toBe(4)
});
test("Test Square of a number Negative", ()=>{
    expect(square(-2)).toBe(4)
});      
test("Test Square of a number Zero", ()=>{
    expect(square(0)).toBe(0)
});

/*test("Test Square of a number 10", ()=>{
    expect(square(10)).toBe(100)
});*/

test("Test Square of a number 0", ()=>{
    expect(square(`${NaN}`)).toBe(NaN);

});