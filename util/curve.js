import Time from './time'

function linear(duration) {
  return Time.getTimeFraction(duration);
}

function quad(x) {
  return Math.pow(x, 2)
}
  

function circ(x) {
  const value = 1 - Math.sin(Math.acos(x))
  if(isNaN(value)) return 
  else return value
}

function back(x, duration) {
  const timeFraction = Time.getTimeFraction(duration)
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}

function bounce(duration) {
  const timeFraction = Time.getTimeFraction(duration)
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

function elastic(x, duration) {
  const timeFraction = Time.getTimeFraction(duration)
  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
}

const Curve = {
  linear,
  quad,
  circ,
  back,
  bounce,
  elastic
}

export default Curve