import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://api.stickyhr.com:8080";
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,

  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    if (state.auth && state.auth.token) {
      headers.set("Authorization", `Bearer ${state.auth.token}`);
    } else {
      const token = Cookies.get("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }
    return headers;
  },
});
const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
export default api;
