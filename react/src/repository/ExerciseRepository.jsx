import axiosClient from "../axios-client.js";

export default {
    get(queryParams = {}) {
        return axiosClient.get(`/exercises`, {
            params: {
                page: queryParams['page'],
                search: queryParams['search'],
                group_of_muscles: queryParams['group_of_muscles'],
                per_page: queryParams['per_page'],
            }
        })
            .catch((error) => {
                const response = error.response;
                if (response) {
                    console.log(response.data.errors);
                }
            })
    },

    getExercise(id) {
        return axiosClient.get(`/exercises/${id}`)
            .catch((error) => {
                const response = error.response;
                if (response) {
                    console.log(response.data.errors);
                }
            })
    },

    post(formData) {
        return axiosClient.post("/exercises", formData)
            .catch((error) => {
            console.log(error);
        })
    }
}
