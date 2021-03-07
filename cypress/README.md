# このフォルダについて
E2Eテストツールcypressに関するコードです。
cypressに関するファイルは本ディレクトリ以下のファイル群と、下記ファイル群のみとなっています。

# セレクターについて
本プロジェクトではcypressのセレクター指定をやりやすくするため、[こちらのベストプラクティス](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)にのっとり`data-cy`属性を各コンポーネントに使用しています。
命名規則は下記の通りです。

```
data-cy="[フォルダ名(省略可)]-[コンポーネントファイル名]-[説明]"
```