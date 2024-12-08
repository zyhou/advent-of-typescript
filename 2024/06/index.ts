import type { Expect, Equal } from "type-testing";

const createRoute = <Route extends string | number>(
  author: string,
  route: Route,
) => {
  console.log(
    `[createRoute] route created by ${author} at ${Date.now().toLocaleString()}`,
  );
  return route;
};

// ------------------- Test section ---------------------

const oneMill = createRoute("🌩️Donner", 100_000_000);
type t0_actual = typeof oneMill; // =>
type t0_expected = 100_000_000; // =>
type t0 = Expect<Equal<t0_actual, t0_expected>>;

const two = createRoute("🔴Rudolph", 2);
type t1_actual = typeof two; // =>
type t1_expected = 2; // =>
type t1 = Expect<Equal<t1_actual, t1_expected>>;

const three = createRoute("💨Dasher", "3");
type t2_actual = typeof three; // =>
type t2_expected = "3"; // =>
type t2 = Expect<Equal<t2_actual, t2_expected>>;

// @ts-expect-error
createRoute("🌟Vixen", true);

// @ts-expect-error
createRoute("💃Dancer", [1]);

// @ts-expect-error
createRoute("☄️Comet", { 1: 1 });
