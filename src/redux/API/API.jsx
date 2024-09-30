import axios from "axios";

const products = {
    getAll : async (product) => {
        return axios.request({
            url: 'https://fakestoreapi.com/products/',
            method: 'GET'
        })
    }
};
export default products;