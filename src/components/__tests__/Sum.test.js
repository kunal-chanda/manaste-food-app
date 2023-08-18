import Sum  from "../Sum"

test("Result of the Sum should be the sum of two munbers", ()=>{
    const result = Sum(2,3);

    expect(result).toBe(5);
})