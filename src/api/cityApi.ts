import { City, ListResponse } from 'models';
import API from '.';

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
