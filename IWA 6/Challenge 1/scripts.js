const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

// ok so this method(!isNaN) checks if the variables are numbers (number is not equal to NaN.) 
const primaryValid = typeof primaryPhone  === 'string' && !isNaN(primaryPhone);
const secondaryValid = typeof secondaryPhone === 'string' && !isNaN(secondaryPhone);

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

