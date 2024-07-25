import http from "k6/http";
import { parseHTML } from "k6/html";
import { url } from "./config.js";

const testImage = open("testimage.jpg", "b");

export default function () {
    const res = http.post(url("/login"), {
        account_name: "terra",
        password: "terraterra",
    });
    const doc = parseHTML(res.body);
    const token = doc.find('input[name="csrf_token"]').first().attr("value");

    http.post(url("/"), {
        file: http.file(testImage, "testimage.jpg", "image/jpeg"),
        body: "Post by k6",
        csrf_token: token,
    });
}