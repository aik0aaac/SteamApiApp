# Steam Watcher
Steam APIを使用したアプリケーションです。
`secret_key`や`access_token`を必要としないSteam APIのみを使って構築されています。

# セットアップ

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

# 自動テストについて
本リポジトリではE2Eテストツール「[cypress](https://www.cypress.io/)」を採用しています。
`yarn cypress:open`と実行することでテストツールが起動できます。