import API from '.';

const cityApi = {
  getAll() {
    const url = '/cities';
    return API.get(url);
  },
};

export default cityApi;
