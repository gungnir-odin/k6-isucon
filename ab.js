import http from "k6/http";

const BASE_URL = "http://192.168.1.10";

export default function (){
    http.get('${BASE_URL}/');
}
