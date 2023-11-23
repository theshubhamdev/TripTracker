import { it, expect, describe } from "@jest/globals";
import { convertDateTimeToDDMonthFormat } from "../src/Utils";

describe("Date Time util helper", () => {
  it("convertDateTimeToDDMonthFormat - this will fail, expected should be 24 Nov", () => {
    const specificDate = new Date(2023, 10, 24);
    expect(convertDateTimeToDDMonthFormat(specificDate)).toBe("15 Jan");
  });

  it("convertDateTimeToDDMonthFormat - current date", () => {
    const result = convertDateTimeToDDMonthFormat();
    expect(typeof result).toBe("string");
  });
});
