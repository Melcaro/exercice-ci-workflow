import axios from 'axios';

export async function fetchResult(val1, val2) {
  const { data } = await axios.get('/api/v1', { params: { val1, val2 } });
  return data;
}
