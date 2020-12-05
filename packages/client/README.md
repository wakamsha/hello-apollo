# @hello-apollo/client

Apollo client + React を使ったクライアントサイドアプリ。

サーバと疎通するコードは、[GraphQL Code Generator](https://graphql-code-generator.com/) を使って生成します。

## Usage

### 1. Codegen

_※ 予め @hello-apollo/server が起動済みであること。_

```bash
yarn generate
```

`src/graphql/index.ts` が生成されます。

### 2. Setup

トランスパイラに [Snowpack](https://www.snowpack.dev/) を採択しているため、npm モジュールを ES Modules 形式に変換する必要があります。

```bash
yarn setup
```

`node_modules` 内のパッケージを ES Modules 形式に変換し、 `web_modules` というフォルダに出力されます。これにより React など ES Modules **でない** モジュールも web ブラウザから読み込めるようになります。使用する npm モジュールが増減する度にこのコマンドを実行してください。

### Run

```bash
yarn start
```

<http://localhost:3000> が起動します。
