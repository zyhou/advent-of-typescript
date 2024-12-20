import type { Expect, Equal } from "type-testing";

type AnalyzeScope<T> = T extends `${" " | "\n" | "\t" | "\r"}${infer Tail}`
  ? AnalyzeScope<Tail>
  : T extends `${"let" | "const" | "var"} ${infer Variable} = "${string}";${infer Tail}`
    ? {
        declared: [Variable, ...AnalyzeScope<Tail>["declared"]];
        used: AnalyzeScope<Tail>["used"];
      }
    : T extends `${string}(${infer Param});${infer Tail}`
      ? {
          declared: AnalyzeScope<Tail>["declared"];
          used: [Param, ...AnalyzeScope<Tail>["used"]];
        }
      : { declared: []; used: [] };

// ------------------- Test section ---------------------

type t0_actual = AnalyzeScope<`
let teddyBear = "standard_model";
`>;
interface t0_expected {
  declared: ["teddyBear"];
  used: [];
}
type t0 = Expect<Equal<t0_actual, t0_expected>>;

type t1_actual = AnalyzeScope<`
buildToy(teddyBear);
`>;
interface t1_expected {
  declared: [];
  used: ["teddyBear"];
}
type t1 = Expect<Equal<t1_actual, t1_expected>>;

type t2_actual = AnalyzeScope<`
let robotDog = "deluxe_model";
assembleToy(robotDog);
`>;
interface t2_expected {
  declared: ["robotDog"];
  used: ["robotDog"];
}
type t2 = Expect<Equal<t2_actual, t2_expected>>;

type t3_actual = AnalyzeScope<`
  let robotDog = "standard_model";
  const giftBox = "premium_wrap";
    var ribbon123 = "silk";

  \t
  wrapGift(giftBox);
  \r\n
      addRibbon(ribbon123);
`>;
interface t3_expected {
  declared: ["robotDog", "giftBox", "ribbon123"];
  used: ["giftBox", "ribbon123"];
}
type t3 = Expect<Equal<t3_actual, t3_expected>>;

type t4_input = "\n\t\r \t\r ";
type t4_actual = AnalyzeScope<t4_input>;
interface t4_expected {
  declared: [];
  used: [];
}
type t4 = Expect<Equal<t4_actual, t4_expected>>;
