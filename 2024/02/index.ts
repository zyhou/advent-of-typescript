import type { Expect, Equal } from "type-testing";

type Demand = 900_000;

// ------------------- Test section ---------------------

type t0_actual = Demand; // =>
type t0_expected = 900_000; // =>
type test_t0 = Expect<Equal<t0_actual, t0_expected>>;

/*
 * Sometimes, throughout Advent of TypeScript, you'll see a test that asserts there _is_ a type error, often to ensure that you're providing a correct implementation.
 * In this example, passing `number` isn't good enough, so we're highlighting that to you by showing that would cause a type error if `number` is the value of `Demand`.
 */

// @ts-expect-error disallowing `number` as a valid value for `Demand`
type test_to = Expect<Equal<Demand, number>>;
