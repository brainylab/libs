import { arrayConvert } from '../lib';

describe('ArrayConvert', () => {
  it('should be able for convert array in format to react-select', () => {
    const array = [
      {
        id: 1,
        description: 'New Device',
        device: 'Motorola',
        os: 'android',
      },
      {
        id: 2,
        description: 'New Device',
        device: 'iPhone Xr',
        os: 'ios',
      },
    ];

    const firstObject = {
      label: 'Choose Option',
      value: 'null',
    };

    const newArray = arrayConvert({
      array,
      arrayLabel: 'device',
      arrayValue: 'os',
    });

    const newArrayWithFirstObject = arrayConvert({
      initialObject: firstObject,
      array,
      arrayLabel: 'device',
      arrayValue: 'os',
    });

    expect(newArray).toEqual(
      expect.arrayContaining(
        [] as Array<{ labe: string; value: string | number }>,
      ),
    );
    expect(newArrayWithFirstObject).toEqual(
      expect.arrayContaining(
        [] as Array<{ labe: string; value: string | number }>,
      ),
    );
  });
});
