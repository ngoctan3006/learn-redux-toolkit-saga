import { Student } from 'models';
import API from '.';
import { ListParams, ListResponse } from './../models/common';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students';
    return API.get(url, { params });
  },
  getById(id: string): Promise<Student> {
    const url = `/students/${id}`;
    return API.get(url);
  },
  add(data: Student): Promise<Student> {
    const url = '/students';
    return API.post(url, data);
  },
  update(id: string, data: Student): Promise<Student> {
    const url = `/students/${id}`;
    return API.patch(url, data);
  },
  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return API.delete(url);
  },
};

export default studentApi;
