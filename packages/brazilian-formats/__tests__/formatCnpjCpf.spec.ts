import { formatCnpjCpf } from '../lib';

describe('limitedStock', () => {
  it('format the cpf', () => {
    const value = '12334567890';

    const newValue = formatCnpjCpf(value);

    expect(newValue).toBe('123.345.678-90');
  });

  it('format the cnpj', () => {
    const value = '13456789000190';

    const newValue = formatCnpjCpf(value);

    expect(newValue).toBe('13.456.789/0001-90');
  });

  it('if value is empty, returns empty string', () => {
    const value = undefined;

    const newValue = formatCnpjCpf(value);

    expect(newValue).toBe('');
  });
});
