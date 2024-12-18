import type { Expect, Equal } from "type-testing";

const createStreetLight = <T>(colors: T[], defaultColor: NoInfer<T>) => {
  console.log(colors);
  return defaultColor;
};

// ------------------- Test section ---------------------

const colors = ["red" as const, "yellow" as const, "green" as const];
//    ^?
type Color = (typeof colors)[number];
//   ^?

// red is a valid color, no generic parameters needed
const t0_const = createStreetLight(colors, "red");
type t0_actual = typeof t0_const; // =>
type t0_expected = Color; // =>
type t0 = Expect<Equal<t0_actual, t0_expected>>;

// one generic parameter is ok
const t1_const = createStreetLight<Color>(colors, "red");
type t1_actual = typeof t1_const; // =>
type t1_expected = Color; // =>
type t1 = Expect<Equal<t1_actual, t1_expected>>;

// @ts-expect-error (no generic parameters) blue is not a valid option
const e0 = createStreetLight(colors, "blue");

// @ts-expect-error does not accept two generic parameters, even providing a valid option
const e1 = createStreetLight<Color, "red">(colors, "red");

// @ts-expect-error does not accept two generic parameters, and blue isn't a valid option
const e2 = createStreetLight<Color, "blue">(colors, "blue");

// @ts-expect-error (with one generic parameter) blue is not a valid option
const e3 = createStreetLight<Color>(colors, "blue");
