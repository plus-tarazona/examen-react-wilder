import { instance } from '../../commons/http/base.http';
const endpoint = 'lista';

export const optionsApi = {
  getAll: function() {
    return instance.get(endpoint)
  }
}