module.exports = function getZerosCount(number, base) {
  var multipliers = getMultipliers(number, base);
  function getMultipliers(number, base) {
    var multipliers = [];
    if (base > 1) { 
      for (var i = 2; i <= base; i++) { 
        while (base % i == 0 && base > 1) { 
          multipliers.push(i); 
          base = base/i; 
        } 
        if (base/i == 1) { 
          multipliers.push(base); 
        } 
      } 
    }  
    return multipliers;
  }
  var zerosArray = [];
  for (var i = 0; i < multipliers.length; i++) {
    var currentMultiplier = multipliers[i];
    var components = 0;
    for (var n = 1; Math.pow(currentMultiplier, n) <= number; n++) { 
      components += Math.floor(number/Math.pow(currentMultiplier, n));  
    } 
    zerosArray.push(components);
  }
  var zerosTotal = Math.min(...zerosArray); 
  return zerosTotal; 
}