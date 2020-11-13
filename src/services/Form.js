import api from './api';

const Form = {
  async getForm() {
    return api
    .get('/forms')
    .then(r => {
      return {
        ok: true,
        forms: r.data.forms,
      }
    })
    .catch(e => {
      return {
        ok: false,
        message: !!e.response ? e.response.data.message : 'Não foi possível listar seus formulários',
      };
    });
  },
}

export default Form;