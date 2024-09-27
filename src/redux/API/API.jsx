import axios from "axios";

const product = {
    getAll : async (product) => {
        return axios.request({
            url: 'https://fakestoreapi.com/products/',
            method: 'GET'
        })
    }
};
export default product;