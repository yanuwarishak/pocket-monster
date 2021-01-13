const breakpoints = {
  xs: 325,
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mediaQuery = (n) => {
  const bpArray = Object.keys(breakpoints).map((key) => [key, breakpoints[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

export default mediaQuery;