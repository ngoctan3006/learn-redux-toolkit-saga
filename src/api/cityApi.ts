import API from '.';
import { City, ListResponse } from 'models';

const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    const url = '/cities';
    return API.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default cityApi;
