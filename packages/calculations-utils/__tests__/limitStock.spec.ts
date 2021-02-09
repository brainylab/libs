import { limitedStock } from '../lib';

describe('limitedStock', () => {
  it('returns the value of the limited stock', () => {
    const stock = 350; // value for stock
    const limited = 50; // limited estoque for 50%

    const newStock = limitedStock(stock, limited);

    expect(newStock).toBe(175);
  });

  it('if the stock is equal to 0 or negative, returns 0', () => {
    const stock = -3; // value for stock
    const limited = 50; // limited estoque for 50%

    const newStock = limitedStock(stock, limited);

    expect(newStock).toBe(0);
  });

  it('if the stock is equal to 1 or a non-integer number, returns 1', () => {
    const stock = 1; // value for stock
    const limited = 50; // limited estoque for 50%

    const newStock = limitedStock(stock, limited);

    expect(newStock).toBe(1);
  });
});
