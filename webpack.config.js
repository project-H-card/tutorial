const path = require("path");

module.exports = {
    // mode: "development",
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                // use: ["ts-loader"],
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        ignoreDiagnostics: [2300] // TypeScriptのエラーコードを指定します
                    }
                },
                exclude: /node_modules/,
            },
        ],
    },
};
