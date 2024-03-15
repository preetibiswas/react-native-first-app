/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';

function AppFormField({name, ...otherProps}) {
  const {setFieldTouched, touched, handleChange, errors} = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={() => handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
