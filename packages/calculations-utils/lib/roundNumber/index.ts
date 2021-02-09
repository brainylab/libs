function roundNumber(
  value: string | number | undefined | null,
  decimals: number,
): number {
  if (!value) {
    return 0;
  }

  let newValue: number;

  if (typeof value === 'string') {
    newValue = parseFloat(value);
  } else {
    newValue = value;
  }

  const fixedValue = newValue.toFixed(decimals);

  return Number(fixedValue);
}

export { roundNumber };
