import type { Expect, Equal } from "type-testing";

interface GiftWrapper<Gift1, Gift2, Gitf3> {
  present: Gift1;
  from: Gift2;
  to: Gitf3;
}

// ------------------- Test section ---------------------

type test_SantaToTrash_actual = GiftWrapper<"Car", "Santa", "Trash">;
//   ^?
interface test_SantaToTrash_expected {
  present: "Car";
  from: "Santa";
  to: "Trash";
}
type test_SantaToTrash = Expect<
  Equal<test_SantaToTrash_actual, test_SantaToTrash_expected>
>;

type test_TrashToPrime_actual = GiftWrapper<"vscode", "Trash", "Prime">;
//   ^?
interface test_TrashToPrime_expected {
  present: "vscode";
  from: "Trash";
  to: "Prime";
}
type test_TrashToPrime = Expect<
  Equal<test_TrashToPrime_actual, test_TrashToPrime_expected>
>;

type test_DanToEvan_actual = GiftWrapper<"javascript", "Dan", "Evan">;
//   ^?
interface test_DanToEvan_expected {
  present: "javascript";
  from: "Dan";
  to: "Evan";
}
type test_DanToEvan = Expect<
  Equal<test_DanToEvan_actual, test_DanToEvan_expected>
>;
