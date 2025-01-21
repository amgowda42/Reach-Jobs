import api from "../api";

export const handleJobsApis = api.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => "api/jobs",
      providesTags: ["Jobs"],
      transformErrorResponse: (response) => {
        return response.sort(
          (a, b) => new Date(b?.createdDate) - new Date(a?.createdDate)
        );
      },
    }),
  }),
});

export const { useGetJobsQuery } = handleJobsApis;
