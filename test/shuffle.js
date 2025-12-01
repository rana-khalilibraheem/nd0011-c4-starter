import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("Shuffle function", () => {
  it("should shuffle array elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...arr]);
    expect(shuffled).to.have.members(arr);
    expect(shuffled).to.not.eql(arr); // ممكن تختلف أحياناً إذا حصل shuffle نفس الترتيب
  });
});
