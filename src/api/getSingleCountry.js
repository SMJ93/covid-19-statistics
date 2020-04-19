import {formatCountry} from '../helpers';
import get from './service';

export default async function getSingleCountry(countryCode) {
  const response = await get(`countries/${countryCode}`);

  if (response && response.data) {
    return formatCountry(response.data);
  }
  return response;
}
