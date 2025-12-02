import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("Shuffle Function", () => {
  it("should rearrange the elements of an array", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).to.have.lengthOf(originalArray.length);
    expect(shuffledArray).to.have.members(originalArray);

    let isDifferent = false;
    for (let i = 0; i < 5; i++) {
      if (
        JSON.stringify(shuffle(originalArray)) !== JSON.stringify(originalArray)
      ) {
        isDifferent = true;
        break;
      }
    }
    expect(isDifferent).to.be.true;
  });
});
