import { formatPrice } from '../lib';

describe('FormatPrice', () => {
  it('formatting local currency', () => {
    const value = 350;

    const newValue = formatPrice(value);

    expect(newValue);
  });
});
