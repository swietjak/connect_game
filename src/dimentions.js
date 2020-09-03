let returnDimentions = width => {
  if (width > 840) return ["6rem", "3rem", "2.5rem", "0.4rem"];
  else if (width > 560 && width < 840)
    return ["4rem", "2rem", "1.7rem", "0.3rem"];
  else if (width > 282 && width < 560)
    return ["2rem", "1rem", "0.8rem", "0.2rem"];
  else return ["1.5rem", "0.75rem", "0.6rem", "0.1rem"];
};
let funcArr = {
  returnDimentions
};
module.exports = funcArr;
