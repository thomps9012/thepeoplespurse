import axios from "axios";

export default {

    getAgencyInfo: function (agencyCode) {
        return axios.get("https://api.usaspending.gov/api/v2/agency/" + agencyCode + "/")
    },

    getAgencyBudget: function (agencyCode) {
        return axios.get("https://api.usaspending.gov/api/v2/agency/" + agencyCode + "/budget_function/")
    },

    getHomeAgencyInfo: function () {
        return axios.get("https://api.usaspending.gov/api/v2/agency/012/budget_function/")
    }
};