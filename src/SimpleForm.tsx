import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

/**
 * This import does't work. 
 * Uncaught SyntaxError: The requested module '../_snowpack/pkg/@hookform/resolvers/yup.js' does not provide an export named 'yupResolver'
 */
import { yupResolver } from '@hookform/resolvers/yup';

/**
 * This is the workaround that's working for now.
 */
// import hookformResolvers from '@hookform/resolvers/yup';
// const yupResolver = hookformResolvers.yupResolver;

interface SimpleFormInputs {
  first: string;
  last: string;
}

export const SimpleForm = (): JSX.Element => {
  const schema = yup.object().shape({
    first: yup.string().required(),
    last: yup.string().required(),
  });

  const { register, handleSubmit } = useForm<SimpleFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (inputs: SimpleFormInputs) => {
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <input
        name="first"
        type="text"
        required
        placeholder="First"
        ref={register}
      />
      <input
        name="last"
        type="text"
        required
        placeholder="Last"
        ref={register}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
