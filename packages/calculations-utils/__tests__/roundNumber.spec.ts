import { roundNumber } from '../lib';

describe('limitedStock', () => {
  it('round value', () => {
    const value = '350.6789';

    const newValue = roundNumber(value, 2);

    expect(newValue).toBe(350.68);
  });

  it('round value number', () => {
    const value = 350;

    const newValue = roundNumber(value, 0);

    expect(newValue).toBe(350);
  });

  it('return 0 when value is undefined', () => {
    const round = roundNumber(undefined, 2);

    expect(round).toBe(0);
  });

  it('return 0 when value is null', () => {
    const round = roundNumber(null, 2);

    expect(round).toBe(0);
  });
});
