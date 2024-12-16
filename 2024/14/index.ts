/* eslint-disable @typescript-eslint/require-await */
import type { Expect, Equal } from "type-testing";

type PerfReview<T> =
  T extends AsyncGenerator<infer Y, unknown, never> ? Y : never;

// ------------------- Test section ---------------------

async function* numberAsyncGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
type t0_type = typeof numberAsyncGenerator;
type t0_actual = PerfReview<ReturnType<t0_type>>;
type t0_expected = 1 | 2 | 3;
type t0 = Expect<Equal<t0_actual, t0_expected>>;

async function* stringAsyncGenerator() {
  yield "1%";
  yield "2%";
}
type t1_type = typeof stringAsyncGenerator;
type t1_actual = PerfReview<ReturnType<t1_type>>;
type t1_expected = "1%" | "2%";
type t1 = Expect<Equal<t1_actual, t1_expected>>;
