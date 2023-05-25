import axiosClient from "../axios-client.js";

export default {
    get(queryParams) {
        return axiosClient.get(`/programs`, {
            params: {
                page: queryParams['page'],
                search: queryParams['search'],
                per_page: queryParams['per_page'] ?? 9,
            }
        })
            .catch((error) => {
                const response = error.response;
                if (response) {
                    console.log(response.data.errors);
                }
            })
    },

    getLastThreeRecords() {
        return axiosClient.get(`/programs`, {
            params: {
                per_page: 3,
                last: true
            }
        })
            .catch((error) => {
                const response = error.response;
                if (response) {
                    console.log(response.data.errors);
                }
            })
    },

    post(formData) {
        return axiosClient.post("/programs", formData)
            .catch((error) => {
                console.log(error);
            })
    }
}
