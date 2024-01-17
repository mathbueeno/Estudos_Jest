const calc = require("./calc.js")

test('Somar cinco mais cinco é igual a 10', () => {
    expect(calc.somar(5, 5)).toBe(10); // toBe = será
  });
test('Subtrair cinco menos cinco é igual a zero', () => {
    expect(calc.subtrair(5, 5)).toBe(0); // toBe = será
  });
test('Dividir cinco por cinco é igual a um', () => {
    expect(calc.dividir(5, 5)).toBe(1); // toBe = será
  });
test('Multiplicar cinco por cinco é igual a vinte e cinco', () => {
    expect(calc.multiplicar(5, 5)).toBe(25); // toBe = será
  });