/* eslint-disable no-self-assign */
import type { Expect, Equal } from "type-testing";

type Inv<T> = (x: T) => T;

interface Demand<T, S extends Inv<T> = Inv<T>> {
  demand: ReturnType<S>;
}

// ------------------- Test section ---------------------

declare let demand1: Demand<unknown>;
declare let demand2: Demand<string>;
declare let demand3: Demand<"Immediate 4% Pay Increase">;
declare let demand4: Demand<"3 Days Paid Time Off Per Year">;

type t1 = Expect<Equal<typeof demand1, { demand: unknown }>>;
demand1 = demand1; // ✅
// @ts-expect-error
demand1 = demand2;
// @ts-expect-error
demand1 = demand3;
// @ts-expect-error
demand1 = demand4;

type t2 = Expect<Equal<typeof demand2, { demand: string }>>;
// @ts-expect-error
demand2 = demand1;
demand2 = demand2; // ✅
// @ts-expect-error
demand2 = demand3;
// @ts-expect-error
demand2 = demand4;

type t3 = Expect<
  Equal<typeof demand3, { demand: "Immediate 4% Pay Increase" }>
>;
// @ts-expect-error
demand3 = demand1;
// @ts-expect-error
demand3 = demand2;
demand3 = demand3; // ✅
// @ts-expect-error
demand3 = demand4;

type t4 = Expect<
  Equal<typeof demand4, { demand: "3 Days Paid Time Off Per Year" }>
>;
// @ts-expect-error
demand4 = demand1;
// @ts-expect-error
demand4 = demand2;
// @ts-expect-error
demand4 = demand3;
demand4 = demand4; // ✅
