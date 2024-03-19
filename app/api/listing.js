/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import client from './client';
const endPoint = '/products';

const getListing = () => client.get(endPoint);

export default {getListing};
