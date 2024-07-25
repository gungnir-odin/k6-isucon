import http from "k6/http";
import { sleep } from "k6";
import { url } from "./config";

export default function (){
    http.get(url("/initialize"), {
        timeout: "10s",
    })
    sleep(1);
}
