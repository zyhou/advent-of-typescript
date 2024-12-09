import type { Expect, Equal } from "type-testing";
import type { Status, Child, List } from "santas-special-list";

declare module "santas-special-list" {
  type Status = "naughty" | "nice";

  interface Child {
    name: string;
    status: Status;
  }

  type List = Child[];
}

// ------------------- Test section ---------------------

type t0_actual = Status; // =>
type t0_expected = "naughty" | "nice"; // =>
type t0 = Expect<Equal<t0_actual, t0_expected>>;

type t1_actual = Child; // =>
interface t1_expected {
  // =>
  name: string;
  status: Status;
}
type t1 = Expect<Equal<t1_actual, t1_expected>>;

type t2_actual = List; // =>
type t2_expected = Child[]; // =>
type t2 = Expect<Equal<t2_actual, t2_expected>>;
