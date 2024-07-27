// 複数のシナリオを組み合わせたシナリオを実行する
import initialize from "./initialize.js";
import comment from "./comment.js";
import postimage from "./postimage.js";

// k6が各関数を実行できるようにexport
export { initialize, comment, postimage};

// 複数のシナリオを組み合わせて実行するオプションの定義
export const options = {
    scenarios: {
        initialize: {
            executor: "shared-iterations", // 一定量の実行を複数のVUsで共有する実行機構
            vus: 1, // 同時実行数（初期化なので1）
            iterations: 1, // 繰り返し回数（初期化なので1）
            exec: "initialize", // 実行するシナリオの関数名
            maxDuration: "10s", // 最大実行時間
        },
        comment: {
            executor: "constant-vus", // 複数のVUsを並行で動かす実行機構
            vus: 4, // 同時実行数
            duration: "30s", // 30秒間実行する
            exec: "comment", // 実行するシナリオの関数名
            startTime: "12s", // 12秒後に実行開始
        },
        postimage: {
            executor: "constant-vus", // 複数のVUsを並行で動かす実行機構
            vus: 2, // 同時実行数
            duration: "30s", // 30秒間実行する
            exec: "postimage", // 実行するシナリオの関数名
            startTime: "12s", // 12秒後に実行開始
        },
    },
};

// k6が実行する関数。定義はからで良い
export default function() {}