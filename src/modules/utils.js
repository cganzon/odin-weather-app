export function FahrenheitToCelsius(temp) {
  return (((temp - 32) * 5) / 9).toFixed(1);
}

export function celsiusToFahrenheit(temp) {
  return ((temp * 9) / 5 + 32).toFixed(1);
}
