import { IArrayPropsInterface } from './index.d';

const arrayConvert = ({
  initialObject,
  array,
  arrayLabel,
  arrayValue,
}: IArrayPropsInterface): Array<any> => {
  let arrayConverted: Array<any> = initialObject ? [initialObject] : [];

  array.map((item: any) => {
    arrayConverted = [
      ...arrayConverted,
      { label: item[arrayLabel], value: item[arrayValue] },
    ];
    return null;
  });

  return arrayConverted;
};

export { arrayConvert };
