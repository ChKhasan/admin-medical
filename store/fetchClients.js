export const actions = {
  async getClients({}, payload) {
    const res = await this.$axios.$get(`/api/users`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async postMailing({}, data) {
    const res = await this.$axios.$post(`/mailing`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async deleteClients({}, id) {
    const res = await this.$axios.$delete(`/api/users/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getClientsById({}, id) {
    const res = await this.$axios.$get(`/api/users/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
