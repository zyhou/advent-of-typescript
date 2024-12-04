import type { Expect, Equal } from "type-testing";

const survivalRatio = (input: string | number) => {
  const quarter = typeof input === "string" ? input : `${input.toString()} Q1`;
  const data = quarterlyData[quarter];
  if (!data) {
    throw new Error("Data not found");
  }
  return data.housingIndex / data.minimumWage;
};

type QuarterlyData = Record<
  string,
  {
    /** inflation corrected housing price index */
    housingIndex: number;

    /** inflation corrected North Pole minimum wage */
    minimumWage: number;
  }
>;

const quarterlyData: QuarterlyData = {
  "1975 Q1": {
    housingIndex: 100,
    minimumWage: 100,
  },
  "1975 Q2": {
    housingIndex: 100.08193,
    minimumWage: 98.79568,
  },
  "1975 Q3": {
    housingIndex: 98.21265,
    minimumWage: 96.98526,
  },
  "1975 Q4": {
    housingIndex: 98.33523,
    minimumWage: 95.38534,
  },
  "1976 Q1": {
    housingIndex: 98.27736,
    minimumWage: 103.32457,
  },
  "1976 Q2": {
    housingIndex: 101.07556,
    minimumWage: 102.46292,
  },
  "1976 Q3": {
    housingIndex: 101.23096,
    minimumWage: 100.92353,
  },
  "1976 Q4": {
    housingIndex: 101.2079,
    minimumWage: 99.35412,
  },
  "1977 Q1": {
    housingIndex: 102.7676,
    minimumWage: 97.59367,
  },
  "1977 Q2": {
    housingIndex: 105.21619,
    minimumWage: 95.95533,
  },
  "1977 Q3": {
    housingIndex: 106.20905,
    minimumWage: 94.53244,
  },
  "1977 Q4": {
    housingIndex: 109.26276,
    minimumWage: 93.2085,
  },
  "1978 Q1": {
    housingIndex: 111.04657,
    minimumWage: 105.66591,
  },
  "1978 Q2": {
    housingIndex: 112.5045,
    minimumWage: 103.53898,
  },
  "1978 Q3": {
    housingIndex: 113.58596,
    minimumWage: 101.75163,
  },
  "1978 Q4": {
    housingIndex: 114.74522,
    minimumWage: 99.86212,
  },
  "1979 Q1": {
    housingIndex: 117.02926,
    minimumWage: 107.25895,
  },
  "1979 Q2": {
    housingIndex: 117.07014,
    minimumWage: 104.40164,
  },
  "1979 Q3": {
    housingIndex: 116.20939,
    minimumWage: 101.87265,
  },
  "1979 Q4": {
    housingIndex: 115.79895,
    minimumWage: 99.46055,
  },
  "1980 Q1": {
    housingIndex: 113.90851,
    minimumWage: 103.22166,
  },
  "1980 Q2": {
    housingIndex: 112.464,
    minimumWage: 100.75263,
  },
  "1980 Q3": {
    housingIndex: 112.99455,
    minimumWage: 98.44895,
  },
  "1980 Q4": {
    housingIndex: 110.78447,
    minimumWage: 96.06931,
  },
  "1981 Q1": {
    housingIndex: 108.28613,
    minimumWage: 101.18786,
  },
  "1981 Q2": {
    housingIndex: 108.16242,
    minimumWage: 99.51899,
  },
  "1981 Q3": {
    housingIndex: 107.43057,
    minimumWage: 97.90656,
  },
  "1981 Q4": {
    housingIndex: 104.57438,
    minimumWage: 96.43208,
  },
  "1982 Q1": {
    housingIndex: 102.20359,
    minimumWage: 95.22819,
  },
  "1982 Q2": {
    housingIndex: 103.63057,
    minimumWage: 94.32303,
  },
  "1982 Q3": {
    housingIndex: 100.11675,
    minimumWage: 92.861,
  },
  "1982 Q4": {
    housingIndex: 103.67683,
    minimumWage: 91.85075,
  },
  "1983 Q1": {
    housingIndex: 106.0303,
    minimumWage: 91.10143,
  },
  "1983 Q2": {
    housingIndex: 106.06001,
    minimumWage: 90.27658,
  },
  "1983 Q3": {
    housingIndex: 105.7164,
    minimumWage: 89.10483,
  },
  "1983 Q4": {
    housingIndex: 105.5445,
    minimumWage: 88.51719,
  },
  "1984 Q1": {
    housingIndex: 105.9473,
    minimumWage: 87.56581,
  },
  "1984 Q2": {
    housingIndex: 106.30352,
    minimumWage: 86.72257,
  },
  "1984 Q3": {
    housingIndex: 106.2353,
    minimumWage: 86.05782,
  },
  "1984 Q4": {
    housingIndex: 106.47633,
    minimumWage: 85.52877,
  },
  "1985 Q1": {
    housingIndex: 107.41045,
    minimumWage: 84.53429,
  },
  "1985 Q2": {
    housingIndex: 107.82844,
    minimumWage: 83.85382,
  },
  "1985 Q3": {
    housingIndex: 109.0026,
    minimumWage: 83.20074,
  },
  "1985 Q4": {
    housingIndex: 109.39813,
    minimumWage: 82.62454,
  },
  "1986 Q1": {
    housingIndex: 111.56703,
    minimumWage: 82.04019,
  },
  "1986 Q2": {
    housingIndex: 114.7173,
    minimumWage: 82.12546,
  },
  "1986 Q3": {
    housingIndex: 115.74266,
    minimumWage: 81.69449,
  },
  "1986 Q4": {
    housingIndex: 117.02931,
    minimumWage: 81.2034,
  },
  "1987 Q1": {
    housingIndex: 118.00854,
    minimumWage: 80.44374,
  },
  "1987 Q2": {
    housingIndex: 118.26679,
    minimumWage: 79.6754,
  },
  "1987 Q3": {
    housingIndex: 118.38172,
    minimumWage: 78.92905,
  },
  "1987 Q4": {
    housingIndex: 118.24629,
    minimumWage: 78.25353,
  },
  "1988 Q1": {
    housingIndex: 119.69701,
    minimumWage: 77.64127,
  },
  "1988 Q2": {
    housingIndex: 120.40172,
    minimumWage: 76.7927,
  },
  "1988 Q3": {
    housingIndex: 120.09261,
    minimumWage: 75.8579,
  },
  "1988 Q4": {
    housingIndex: 119.85572,
    minimumWage: 75.0988,
  },
  "1989 Q1": {
    housingIndex: 119.96228,
    minimumWage: 74.24402,
  },
  "1989 Q2": {
    housingIndex: 119.30773,
    minimumWage: 73.25566,
  },
  "1989 Q3": {
    housingIndex: 121.2185,
    minimumWage: 72.82506,
  },
  "1989 Q4": {
    housingIndex: 121.13231,
    minimumWage: 72.25459,
  },
  "1990 Q1": {
    housingIndex: 119.55545,
    minimumWage: 71.21991,
  },
  "1990 Q2": {
    housingIndex: 118.91882,
    minimumWage: 80.05968,
  },
  "1990 Q3": {
    housingIndex: 117.89096,
    minimumWage: 79.05505,
  },
  "1990 Q4": {
    housingIndex: 115.0488,
    minimumWage: 78.02275,
  },
  "1991 Q1": {
    housingIndex: 115.32366,
    minimumWage: 77.61607,
  },
  "1991 Q2": {
    housingIndex: 115.36654,
    minimumWage: 86.33767,
  },
  "1991 Q3": {
    housingIndex: 114.87233,
    minimumWage: 85.75652,
  },
  "1991 Q4": {
    housingIndex: 115.58281,
    minimumWage: 85.13946,
  },
  "1992 Q1": {
    housingIndex: 115.84929,
    minimumWage: 84.61064,
  },
  "1992 Q2": {
    housingIndex: 114.72263,
    minimumWage: 84.05244,
  },
  "1992 Q3": {
    housingIndex: 115.27285,
    minimumWage: 83.51992,
  },
  "1992 Q4": {
    housingIndex: 114.79157,
    minimumWage: 82.94099,
  },
  "1993 Q1": {
    housingIndex: 114.07824,
    minimumWage: 82.44929,
  },
  "1993 Q2": {
    housingIndex: 114.25063,
    minimumWage: 81.89894,
  },
  "1993 Q3": {
    housingIndex: 114.84615,
    minimumWage: 81.54445,
  },
  "1993 Q4": {
    housingIndex: 114.81677,
    minimumWage: 81.07654,
  },
  "1994 Q1": {
    housingIndex: 115.1063,
    minimumWage: 80.78804,
  },
  "1994 Q2": {
    housingIndex: 114.98261,
    minimumWage: 80.33968,
  },
  "1994 Q3": {
    housingIndex: 114.50899,
    minimumWage: 79.76671,
  },
  "1994 Q4": {
    housingIndex: 113.80919,
    minimumWage: 79.3936,
  },
  "1995 Q1": {
    housingIndex: 113.62889,
    minimumWage: 79.00634,
  },
  "1995 Q2": {
    housingIndex: 114.46298,
    minimumWage: 78.5496,
  },
  "1995 Q3": {
    housingIndex: 115.9191,
    minimumWage: 78.22921,
  },
  "1995 Q4": {
    housingIndex: 116.2317,
    minimumWage: 77.88744,
  },
  "1996 Q1": {
    housingIndex: 116.60251,
    minimumWage: 77.45706,
  },
  "1996 Q2": {
    housingIndex: 115.44371,
    minimumWage: 76.94216,
  },
  "1996 Q3": {
    housingIndex: 115.57723,
    minimumWage: 76.61594,
  },
  "1996 Q4": {
    housingIndex: 115.47408,
    minimumWage: 85.04943,
  },
  "1997 Q1": {
    housingIndex: 115.8333,
    minimumWage: 84.67466,
  },
  "1997 Q2": {
    housingIndex: 116.46239,
    minimumWage: 84.46268,
  },
  "1997 Q3": {
    housingIndex: 117.81721,
    minimumWage: 86.60565,
  },
  "1997 Q4": {
    housingIndex: 118.84159,
    minimumWage: 91.0482,
  },
  "1998 Q1": {
    housingIndex: 120.82807,
    minimumWage: 91.04048,
  },
  "1998 Q2": {
    housingIndex: 121.34004,
    minimumWage: 90.87726,
  },
  "1998 Q3": {
    housingIndex: 122.83201,
    minimumWage: 90.59846,
  },
  "1998 Q4": {
    housingIndex: 123.94585,
    minimumWage: 90.36066,
  },
  "1999 Q1": {
    housingIndex: 124.95692,
    minimumWage: 90.18471,
  },
  "1999 Q2": {
    housingIndex: 125.35531,
    minimumWage: 89.67593,
  },
  "1999 Q3": {
    housingIndex: 126.39729,
    minimumWage: 89.18645,
  },
  "1999 Q4": {
    housingIndex: 126.66781,
    minimumWage: 88.64731,
  },
  "2000 Q1": {
    housingIndex: 127.98519,
    minimumWage: 87.93292,
  },
  "2000 Q2": {
    housingIndex: 128.60192,
    minimumWage: 87.51455,
  },
  "2000 Q3": {
    housingIndex: 130.00594,
    minimumWage: 86.95308,
  },
  "2000 Q4": {
    housingIndex: 131.1788,
    minimumWage: 86.46259,
  },
  "2001 Q1": {
    housingIndex: 133.31434,
    minimumWage: 85.82402,
  },
  "2001 Q2": {
    housingIndex: 134.20207,
    minimumWage: 85.42316,
  },
  "2001 Q3": {
    housingIndex: 136.65825,
    minimumWage: 85.3801,
  },
  "2001 Q4": {
    housingIndex: 139.21842,
    minimumWage: 85.34615,
  },
  "2002 Q1": {
    housingIndex: 141.38489,
    minimumWage: 85.17564,
  },
  "2002 Q2": {
    housingIndex: 142.14071,
    minimumWage: 84.5492,
  },
  "2002 Q3": {
    housingIndex: 144.56494,
    minimumWage: 84.11505,
  },
  "2002 Q4": {
    housingIndex: 146.02126,
    minimumWage: 83.72451,
  },
  "2003 Q1": {
    housingIndex: 146.26617,
    minimumWage: 83.08912,
  },
  "2003 Q2": {
    housingIndex: 147.63484,
    minimumWage: 83.00663,
  },
  "2003 Q3": {
    housingIndex: 149.31354,
    minimumWage: 82.4633,
  },
  "2003 Q4": {
    housingIndex: 153.56408,
    minimumWage: 82.06072,
  },
  "2004 Q1": {
    housingIndex: 154.56603,
    minimumWage: 81.43272,
  },
  "2004 Q2": {
    housingIndex: 155.95936,
    minimumWage: 80.88941,
  },
  "2004 Q3": {
    housingIndex: 161.54464,
    minimumWage: 80.49294,
  },
  "2004 Q4": {
    housingIndex: 163.49292,
    minimumWage: 79.81138,
  },
  "2005 Q1": {
    housingIndex: 166.69477,
    minimumWage: 79.35,
  },
  "2005 Q2": {
    housingIndex: 169.24902,
    minimumWage: 78.85142,
  },
  "2005 Q3": {
    housingIndex: 171.66174,
    minimumWage: 78.00869,
  },
  "2005 Q4": {
    housingIndex: 174.30899,
    minimumWage: 77.39163,
  },
  "2006 Q1": {
    housingIndex: 176.7019,
    minimumWage: 76.99087,
  },
  "2006 Q2": {
    housingIndex: 175.27428,
    minimumWage: 76.32001,
  },
  "2006 Q3": {
    housingIndex: 176.10645,
    minimumWage: 75.77473,
  },
  "2006 Q4": {
    housingIndex: 180.55586,
    minimumWage: 75.9007,
  },
  "2007 Q1": {
    housingIndex: 179.63371,
    minimumWage: 75.21345,
  },
  "2007 Q2": {
    housingIndex: 175.37163,
    minimumWage: 74.58086,
  },
  "2007 Q3": {
    housingIndex: 173.36135,
    minimumWage: 84.24084,
  },
  "2007 Q4": {
    housingIndex: 171.06986,
    minimumWage: 83.39258,
  },
  "2008 Q1": {
    housingIndex: 167.83683,
    minimumWage: 82.71719,
  },
  "2008 Q2": {
    housingIndex: 158.89899,
    minimumWage: 81.91846,
  },
  "2008 Q3": {
    housingIndex: 151.7372,
    minimumWage: 90.75183,
  },
  "2008 Q4": {
    housingIndex: 156.71196,
    minimumWage: 92.22482,
  },
  "2009 Q1": {
    housingIndex: 159.50891,
    minimumWage: 92.85234,
  },
  "2009 Q2": {
    housingIndex: 153.21658,
    minimumWage: 92.48525,
  },
  "2009 Q3": {
    housingIndex: 147.7367,
    minimumWage: 101.66865,
  },
  "2009 Q4": {
    housingIndex: 145.75099,
    minimumWage: 100.89109,
  },
  "2010 Q1": {
    housingIndex: 143.02079,
    minimumWage: 100.50286,
  },
  "2010 Q2": {
    housingIndex: 140.7908,
    minimumWage: 100.34818,
  },
  "2010 Q3": {
    housingIndex: 142.07053,
    minimumWage: 100.15522,
  },
  "2010 Q4": {
    housingIndex: 140.50101,
    minimumWage: 99.51734,
  },
  "2011 Q1": {
    housingIndex: 134.38007,
    minimumWage: 98.68833,
  },
  "2011 Q2": {
    housingIndex: 128.96178,
    minimumWage: 97.72631,
  },
  "2011 Q3": {
    housingIndex: 129.52087,
    minimumWage: 97.27632,
  },
  "2011 Q4": {
    housingIndex: 130.6231,
    minimumWage: 96.95579,
  },
  "2012 Q1": {
    housingIndex: 128.14281,
    minimumWage: 96.31795,
  },
  "2012 Q2": {
    housingIndex: 126.36896,
    minimumWage: 96.08615,
  },
  "2012 Q3": {
    housingIndex: 127.95682,
    minimumWage: 95.80782,
  },
  "2012 Q4": {
    housingIndex: 129.1687,
    minimumWage: 95.27401,
  },
  "2013 Q1": {
    housingIndex: 129.07457,
    minimumWage: 94.94066,
  },
  "2013 Q2": {
    housingIndex: 130.37859,
    minimumWage: 94.89294,
  },
  "2013 Q3": {
    housingIndex: 131.90325,
    minimumWage: 94.50406,
  },
  "2013 Q4": {
    housingIndex: 133.81758,
    minimumWage: 94.15747,
  },
  "2014 Q1": {
    housingIndex: 133.94671,
    minimumWage: 93.72707,
  },
  "2014 Q2": {
    housingIndex: 134.71041,
    minimumWage: 93.31019,
  },
  "2014 Q3": {
    housingIndex: 136.89828,
    minimumWage: 93.05534,
  },
  "2014 Q4": {
    housingIndex: 140.04196,
    minimumWage: 93.17875,
  },
  "2015 Q1": {
    housingIndex: 143.30408,
    minimumWage: 93.59833,
  },
  "2015 Q2": {
    housingIndex: 143.61692,
    minimumWage: 93.13279,
  },
  "2015 Q3": {
    housingIndex: 145.71922,
    minimumWage: 92.89224,
  },
  "2015 Q4": {
    housingIndex: 148.35519,
    minimumWage: 92.9637,
  },
  "2016 Q1": {
    housingIndex: 150.21623,
    minimumWage: 92.9189,
  },
  "2016 Q2": {
    housingIndex: 151.05571,
    minimumWage: 92.33292,
  },
  "2016 Q3": {
    housingIndex: 153.69172,
    minimumWage: 92.01605,
  },
  "2016 Q4": {
    housingIndex: 155.0018,
    minimumWage: 91.59663,
  },
  "2017 Q1": {
    housingIndex: 154.90384,
    minimumWage: 91.06557,
  },
  "2017 Q2": {
    housingIndex: 157.67427,
    minimumWage: 90.88292,
  },
  "2017 Q3": {
    housingIndex: 159.80954,
    minimumWage: 90.56234,
  },
  "2017 Q4": {
    housingIndex: 160.88379,
    minimumWage: 90.02349,
  },
  "2018 Q1": {
    housingIndex: 161.67095,
    minimumWage: 89.39745,
  },
  "2018 Q2": {
    housingIndex: 162.9029,
    minimumWage: 88.92989,
  },
  "2018 Q3": {
    housingIndex: 164.73017,
    minimumWage: 88.63245,
  },
  "2018 Q4": {
    housingIndex: 165.92442,
    minimumWage: 88.2974,
  },
  "2019 Q1": {
    housingIndex: 167.71417,
    minimumWage: 88.11883,
  },
  "2019 Q2": {
    housingIndex: 168.38718,
    minimumWage: 87.62891,
  },
  "2019 Q3": {
    housingIndex: 170.51542,
    minimumWage: 87.42013,
  },
  "2019 Q4": {
    housingIndex: 171.87477,
    minimumWage: 87.07911,
  },
  "2020 Q1": {
    housingIndex: 173.5093,
    minimumWage: 86.81302,
  },
  "2020 Q2": {
    housingIndex: 177.01022,
    minimumWage: 87.1637,
  },
  "2020 Q3": {
    housingIndex: 177.56525,
    minimumWage: 86.46598,
  },
  "2020 Q4": {
    housingIndex: 181.00634,
    minimumWage: 86.05383,
  },
  "2021 Q1": {
    housingIndex: 182.89259,
    minimumWage: 85.10033,
  },
  "2021 Q2": {
    housingIndex: 187.50183,
    minimumWage: 83.7973,
  },
  "2021 Q3": {
    housingIndex: 194.41239,
    minimumWage: 82.6555,
  },
  "2021 Q4": {
    housingIndex: 197.62577,
    minimumWage: 81.30956,
  },
  "2022 Q1": {
    housingIndex: 199.43678,
    minimumWage: 79.80175,
  },
  "2022 Q2": {
    housingIndex: 205.27266,
    minimumWage: 78.35561,
  },
  "2022 Q3": {
    housingIndex: 206.49922,
    minimumWage: 77.4536,
  },
  "2022 Q4": {
    housingIndex: 205.65853,
    minimumWage: 76.69393,
  },
  "2023 Q1": {
    housingIndex: 205.8372,
    minimumWage: 75.95666,
  },
  "2023 Q2": {
    housingIndex: 210.25151,
    minimumWage: 75.41248,
  },
  "2023 Q3": {
    housingIndex: 212.89952,
    minimumWage: 74.91317,
  },
  "2023 Q4": {
    housingIndex: 214.31341,
    minimumWage: 74.6079,
  },
  "2024 Q1": {
    housingIndex: 214.9681,
    minimumWage: 73.98181,
  },
  "2024 Q2": {
    housingIndex: 218.21312,
    minimumWage: 73.52088,
  },
};

// ------------------- Test section ---------------------

// We can pass numbers like `2009`:

const start = survivalRatio(2009);
type t0_actual = typeof start; // =>
type t0_expected = number; // =>
type t0 = Expect<Equal<t0_actual, t0_expected>>;

const now = survivalRatio(2024);
type t1_actual = typeof now; // =>
type t1_expected = number; // =>
type t1 = Expect<Equal<t1_actual, t1_expected>>;

// We can pass strings like `'2009 Q2'`:

const q1_2009 = survivalRatio("2009 Q1");
type t2_actual = typeof q1_2009; // =>
type t2_expected = number; // =>
type t2 = Expect<Equal<t2_actual, t2_expected>>;

const q2_2024 = survivalRatio("2024 Q2");
type t3_actual = typeof q2_2024; // =>
type t3_expected = number; // =>
type t3 = Expect<Equal<t3_actual, t3_expected>>;

// Other data types are not allowed by TypeScript:

// @ts-expect-error
survivalRatio(true);

// @ts-expect-error
survivalRatio([1]);

// @ts-expect-error
survivalRatio({ 1: 1 });
