/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import client from './client';
const endPoint = '/products';

const getListing = () => client.get(endPoint);
const addListing = listing => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('category', listing.category.value);
  data.append('description', listing.description);
  //   listing.images.forEach((image, index) =>
  //     data.append('image', listing.images),
  //   );
  console.log('submit', data);
  return client.post('/products', data);
};

export default {getListing, addListing};
