import { shuffle } from "../src/shuffle.js";
import { expect } from "chai";

describe("Shuffle function", () => {
  it("should shuffle an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).to.have.members(arr); // نفس العناصر
    expect(shuffled).to.not.eql(arr); // ترتيب مختلف غالباً
  });
});
