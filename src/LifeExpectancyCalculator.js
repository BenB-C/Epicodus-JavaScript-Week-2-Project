// A class for calculating a person's average life expectancy at birth from their age.
// Assumes the person was born in the United States and doesn't differentiate based on gender or other attributes.
export class LifeExpectancyCalculator {
  // Loads life expectancy data
  constructor() {
    this.currentYear = 2019;
    this.data = [
      { year:1901, lifeExpectancy:49.299999 },
      { year:1902, lifeExpectancy:50.5 },
      { year:1903, lifeExpectancy:50.599998 },
      { year:1904, lifeExpectancy:49.599998 },
      { year:1905, lifeExpectancy:50.299999 },
      { year:1906, lifeExpectancy:50.099998 },
      { year:1907, lifeExpectancy:50.200001 },
      { year:1908, lifeExpectancy:51.900002 },
      { year:1909, lifeExpectancy:52.799999 },
      { year:1910, lifeExpectancy:51.799999 },
      { year:1911, lifeExpectancy:53.400002 },
      { year:1912, lifeExpectancy:54.099998 },
      { year:1913, lifeExpectancy:53.5 },
      { year:1914, lifeExpectancy:54.599998 },
      { year:1915, lifeExpectancy:55.099998 },
      { year:1916, lifeExpectancy:54.200001 },
      { year:1917, lifeExpectancy:54 },
      { year:1918, lifeExpectancy:47.200001 },
      { year:1919, lifeExpectancy:55.299999 },
      { year:1920, lifeExpectancy:55.400002 },
      { year:1921, lifeExpectancy:58.200001 },
      { year:1922, lifeExpectancy:58.099998 },
      { year:1923, lifeExpectancy:57.5 },
      { year:1924, lifeExpectancy:58.5 },
      { year:1925, lifeExpectancy:58.5 },
      { year:1926, lifeExpectancy:57.900002 },
      { year:1927, lifeExpectancy:59.400002 },
      { year:1928, lifeExpectancy:58.299999 },
      { year:1929, lifeExpectancy:58.5 },
      { year:1930, lifeExpectancy:59.599998 },
      { year:1931, lifeExpectancy:60.299999 },
      { year:1932, lifeExpectancy:61 },
      { year:1933, lifeExpectancy:60.880001 },
      { year:1934, lifeExpectancy:60.23 },
      { year:1935, lifeExpectancy:60.889999 },
      { year:1936, lifeExpectancy:60.349998 },
      { year:1937, lifeExpectancy:61.049999 },
      { year:1938, lifeExpectancy:62.389999 },
      { year:1939, lifeExpectancy:63.07 },
      { year:1940, lifeExpectancy:63.23 },
      { year:1941, lifeExpectancy:63.799999 },
      { year:1942, lifeExpectancy:64.589996 },
      { year:1943, lifeExpectancy:64.300003 },
      { year:1944, lifeExpectancy:65.089996 },
      { year:1945, lifeExpectancy:65.580002 },
      { year:1946, lifeExpectancy:66.279999 },
      { year:1947, lifeExpectancy:66.690002 },
      { year:1948, lifeExpectancy:67.25 },
      { year:1949, lifeExpectancy:67.629997 },
      { year:1950, lifeExpectancy:68.206001 },
      { year:1951, lifeExpectancy:68.342003 },
      { year:1952, lifeExpectancy:68.605003 },
      { year:1953, lifeExpectancy:68.847 },
      { year:1954, lifeExpectancy:69.067001 },
      { year:1955, lifeExpectancy:69.265999 },
      { year:1956, lifeExpectancy:69.444 },
      { year:1957, lifeExpectancy:69.599998 },
      { year:1958, lifeExpectancy:69.735001 },
      { year:1959, lifeExpectancy:69.848 },
      { year:1960, lifeExpectancy:69.939003 },
      { year:1961, lifeExpectancy:70.010002 },
      { year:1962, lifeExpectancy:70.063004 },
      { year:1963, lifeExpectancy:70.105003 },
      { year:1964, lifeExpectancy:70.143997 },
      { year:1965, lifeExpectancy:70.188004 },
      { year:1966, lifeExpectancy:70.248001 },
      { year:1967, lifeExpectancy:70.330002 },
      { year:1968, lifeExpectancy:70.441002 },
      { year:1969, lifeExpectancy:70.587997 },
      { year:1970, lifeExpectancy:70.778 },
      { year:1971, lifeExpectancy:71.017998 },
      { year:1972, lifeExpectancy:71.302002 },
      { year:1973, lifeExpectancy:71.623001 },
      { year:1974, lifeExpectancy:71.971001 },
      { year:1975, lifeExpectancy:72.333 },
      { year:1976, lifeExpectancy:72.695999 },
      { year:1977, lifeExpectancy:73.044998 },
      { year:1978, lifeExpectancy:73.371002 },
      { year:1979, lifeExpectancy:73.663002 },
      { year:1980, lifeExpectancy:73.914001 },
      { year:1981, lifeExpectancy:74.122002 },
      { year:1982, lifeExpectancy:74.293999 },
      { year:1983, lifeExpectancy:74.438004 },
      { year:1984, lifeExpectancy:74.560997 },
      { year:1985, lifeExpectancy:74.668999 },
      { year:1986, lifeExpectancy:74.772003 },
      { year:1987, lifeExpectancy:74.876999 },
      { year:1988, lifeExpectancy:74.988998 },
      { year:1989, lifeExpectancy:75.112999 },
      { year:1990, lifeExpectancy:75.251999 },
      { year:1991, lifeExpectancy:75.405998 },
      { year:1992, lifeExpectancy:75.568001 },
      { year:1993, lifeExpectancy:75.734001 },
      { year:1994, lifeExpectancy:75.903 },
      { year:1995, lifeExpectancy:76.07 },
      { year:1996, lifeExpectancy:76.230003 },
      { year:1997, lifeExpectancy:76.384003 },
      { year:1998, lifeExpectancy:76.531998 },
      { year:1999, lifeExpectancy:76.674004 },
      { year:2000, lifeExpectancy:76.815002 },
      { year:2001, lifeExpectancy:76.962997 },
      { year:2002, lifeExpectancy:77.121002 },
      { year:2003, lifeExpectancy:77.292 },
      { year:2004, lifeExpectancy:77.474998 },
      { year:2005, lifeExpectancy:77.667 },
      { year:2006, lifeExpectancy:77.859001 },
      { year:2007, lifeExpectancy:78.045998 },
      { year:2008, lifeExpectancy:78.223 },
      { year:2009, lifeExpectancy:78.387001 },
      { year:2010, lifeExpectancy:78.539001 },
      { year:2011, lifeExpectancy:78.681999 },
      { year:2012, lifeExpectancy:78.820999 },
      { year:2013, lifeExpectancy:78.959999 },
      { year:2014, lifeExpectancy:79.099998 },
      { year:2015, lifeExpectancy:79.244003 }
    ];
  }

  // Returns the average life expectancy at birth for a person born in the USA of the given age
  getLifeExpectancy(age) {
    const firstData = this.data[0];
    if (age >= this.currentYear - firstData.year) {
      return firstData.lifeExpectancy - age;
    }
    const lastData = this.data[this.data.length - 1];
    if (age <= this.currentYear - lastData.year) {
      return lastData.lifeExpectancy - age;
    }
    for (let i = 0; i < this.data.length; i++) {
      const data = this.data[i];
      if (age === this.currentYear - data.year) {
        return data.lifeExpectancy - age;
      }
    }
  }
}
