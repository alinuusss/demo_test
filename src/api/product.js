import http from "@/helpers/http.js";

class ProductApi {

    get(params ) {
        return http.get('/cars-test', {
            params: params
        });
    }
}

export default new ProductApi;