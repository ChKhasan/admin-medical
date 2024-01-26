export const actions = {
  async auth({}, data) {
    const res = await this.$axios.$post(`/api/token/`, data);
    return res;
  },
  async refreshToken({}, data) {
    const res = await this.$axios.$post(`/api/token/refresh/`, data);
    return res;
  },
  async logOut({}, data) {
    const res = await this.$axios.$post(
      `/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      }
    );
    return res;
  },
};
