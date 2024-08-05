const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',    // 실 서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    },  // 입력

    module: {
        rules: [{ 
            test: /\.jsx?/,     //규칙을 적용할 파일들
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            }
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },  // 출력
};