import axios from 'axios';


const bigCommerce = axios.create({
  baseURL: `http://store-w125h0h2n4.mybigcommerce.com/graphql`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.token}`,
  }
});

export const state = () => ({
  userErrors: [],
  product: {},
  products: [],
});

export const mutations = {
  setErrors (state, userErrors) {
    state.userErrors = userErrors || []
  },
};

export const actions = {
  async nuxtServerInit(ctx, context) {
  },

  async login({ state, commit, rootState }, { email, password }) {
    const response = await bigCommerce.post(null, {
      query: `
        mutation Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            result
          }
        }
      `,
      variables: { email, password} });


  }

};
