import instance from './axios';

const baseRequest = async (query = '', method = 'GET', body = null) => {
  let responce = null;

  switch (method) {
    case 'GET': {
      try {
        responce = await instance.get(query);
        return responce.data;
      } catch (error) {
        responce = error?.message;
        console.log('ERROR =>', responce);
      }
    }

    case 'POST': {
      //
    }

    default:
      return;
  }
};

export default baseRequest;
