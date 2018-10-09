 module.exports = function getZerosCount(number, base) {
  const multipliers = getMultipliers(number, base);
  const zerosArray = [];
 
  for (let i = 0; i < multipliers.length; i++) {
    const currentMultiplier = multipliers[i].value;
    let components = 0;
 
    for (let n = 1; Math.pow(currentMultiplier, n) <= number; n++) {
      components += Math.floor(number / Math.pow(currentMultiplier, n));
    }
 
    zerosArray.push(Math.floor(components / multipliers[i].count));
  }
 
  return Math.min(...zerosArray);
}
 
function getMultipliers(number, base) {
  const multipliers = [];
 
  if (base > 1) {
    for (let i = 2; i <= base; i++) {
      while (base % i === 0 && base > 1) {
        multipliers.push(i);
        base = base / i;
      }
      if (base / i === 1) {
        multipliers.push(base);
      }
    }
  }
 
  return getUniqMultipliers(multipliers)
}
 
function getUniqMultipliers(array) {
  const uniqMultipliers = [];
 
  for (let i = 0; i < array.length; i++) {
    if (!uniqMultipliers.includes(array[i])) {
      uniqMultipliers.push(array[i]);
    }
  }
 
  return uniqMultipliers.map((uniqMultiplier) => {
    const count = array.filter(multiplier => multiplier === uniqMultiplier).length;
 
    return {
      value: uniqMultiplier,
      count: count
    }
  });
}