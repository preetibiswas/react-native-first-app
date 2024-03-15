/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import AppButton from './AppButton';
import {useFormikContext} from 'formik';

function SubmitButton({title}) {
  const {handleSubmit} = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}
export default SubmitButton;
