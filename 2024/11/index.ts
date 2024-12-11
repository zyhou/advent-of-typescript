import type { Expect, Equal } from "type-testing";

type Excuse<T> = new (
  params: T,
) => `${keyof T & string}: ${T[keyof T] & string}`;

// Possible with conditional types and infer
// type Excuse<T> = new (
//   params: T,
// ) => T extends Record<infer K extends string, infer V extends string>
//   ? `${K}: ${V}`
//   : never;

// ------------------- Test section ---------------------

const existingExcuses = {
  karaoke: ["Kendrick Lamar, Opeth"],
  margarita: "Peppermint-Jalapeño Mojito",
};

const helpingTheReindeer = {
  helping: "the reindeer",
} as const;
declare const Excuse0: Excuse<typeof helpingTheReindeer>;
const excuse0 = new Excuse0({
  ...existingExcuses,
  ...helpingTheReindeer,
});
type t0_actual = typeof excuse0; // =>
type t0_expected = "helping: the reindeer"; // =>
type t0 = Expect<Equal<t0_actual, t0_expected>>;

const eatingFudge = {
  eating: "fudge",
} as const;
declare const Excuse1: Excuse<typeof eatingFudge>;
const excuse1 = new Excuse1({
  ...existingExcuses,
  ...eatingFudge,
});
type t1_actual = typeof excuse1; // =>
type t1_expected = "eating: fudge"; // =>
type t1 = Expect<Equal<t1_actual, t1_expected>>;
