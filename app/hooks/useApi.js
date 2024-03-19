/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {useState} from 'react';

export default useApi = apifun => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const request = async () => {
    setLoading(true);
    const response = await apifun();
    setLoading(false);
    if (!response.ok) {
      return setError(true);
    }
    setError(false);
    setData(response.data);
  };

  return {request, data, error, loading};
};
