/* eslint-disable prettier/prettier */
import {Formik} from 'formik';
import React from 'react';

function AppForm({initialValue, onSubmit, validationSchema, children}) {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
