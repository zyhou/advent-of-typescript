type DynamicParamsCurrying<F> = F extends (...args: infer P) => infer R
  ? <T extends unknown[]>(
      ...args: P extends [...T, ...unknown[]] ? T : []
    ) => P extends [...T, ...infer Rest]
      ? DynamicParamsCurrying<(...args: Rest) => R>
      : DynamicParamsCurrying<F>
  : never;

declare function DynamicParamsCurrying<F>(fn: F): DynamicParamsCurrying<F>;

// ------------------- Test section ---------------------

const originalCurry = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ingredient1: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ingredient2: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ingredient3: boolean,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ingredient4: Date,
) => true;

const spikedCurry = DynamicParamsCurrying(originalCurry);

// Direct call
const t0 = spikedCurry(0, "Ziltoid", true, new Date());

// Partially applied
const t1 = spikedCurry(1)("The", false, new Date());

// Another partial
const t2 = spikedCurry(0, "Omniscient", true)(new Date());

// You can keep callin' until the cows come home: it'll wait for the last argument
const t3 = spikedCurry()()()()(0, "Captain", true)()()()(new Date());

// currying is ok
const t4 = spikedCurry(0, "Spectacular", true);

// @ts-expect-error arguments provided in the wrong order
const e0 = spikedCurry("Nebulo9", 0, true)(new Date());
