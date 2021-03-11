import * as Yup from 'yup';
import { getValidationErrors } from '../lib';

describe('GetValidationErrors', () => {
  it('should be able for convert yup error for unform error validation', async () => {
    async function validationErrors() {
      const data = {};
      try {
        const schema = Yup.object().shape({
          password: Yup.string().required('A Senha é obrigatório'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        return null;
      } catch (err) {
        return err;
      }
    }

    const error = await validationErrors();

    expect(getValidationErrors(error)).toHaveProperty('password');
  });
});
