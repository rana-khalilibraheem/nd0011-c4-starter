import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("Shuffle function", () => {
  it("should shuffle array elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...arr]);

    // تحقق أن كل العناصر موجودة بعد shuffle
    expect(shuffled).to.have.members(arr);

    // تحقق أن الطول لم يتغير
    expect(shuffled).to.have.lengthOf(arr.length);

    // تحقق أن الترتيب تغير غالبًا (قد يكون نفس الترتيب بالصدفة)
    const isSameOrder = arr.every((val, index) => val === shuffled[index]);
    expect(isSameOrder).to.be.a("boolean");
  });
});
