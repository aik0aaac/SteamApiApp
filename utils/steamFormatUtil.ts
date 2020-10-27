/**
 * Steamテキスト書式関連のUtilクラス。
 */
export default class SteamFormatUtil {
  /**
   * Steam書式のテキストをHTMLタグに変更。
   * @param text Steam書式のテキスト。
   */
  public static convertSteamFormatToHtmlTag(text: string): string {
    let result: string
    result = this.convertHeader(text)
    result = this.convertBold(result)
    result = this.convertUnderline(result)
    result = this.convertItalic(result)
    result = this.convertStrike(result)
    result = this.convertSpoiler(result)
    result = this.convertNoparse(result)
    result = this.convertHorizon(result)
    result = this.convertUrl(result)
    result = this.convertList(result)
    result = this.convertOList(result)
    result = this.convertQuote(result)
    result = this.convertCode(result)
    result = this.convertTable(result)
    result = this.convertImage(result)

    return result
  }

  /**
   * ヘッダーテキスト(h1~h6) を変換。
   */
  private static convertHeader(text: string): string {
    let result: string

    // h1-h6開きタグを処理
    let regexp: RegExp = /\[h1\]/g
    result = text.replace(regexp, `<div class="display-4 mt-4 mb-2">`)
    regexp = /\[h2\]/g
    result = result.replace(regexp, `<div class="display-3 mt-4 mb-2">`)
    regexp = /\[h3\]/g
    result = result.replace(regexp, `<div class="display-2 mt-4 mb-2">`)
    regexp = /\[h4\]/g
    result = result.replace(regexp, `<div class="display-1 mt-4 mb-2">`)
    regexp = /\[h5\]/g
    result = result.replace(regexp, `<div class="headline mt-4 mb-2">`)
    regexp = /\[h6\]/g
    result = result.replace(regexp, `<div class="title mt-4 mb-2">`)

    // 閉じタグを処理
    regexp = /\[\/h[1-6]\]/g
    result = result.replace(regexp, '</div>')

    return result
  }

  /**
   * 太字 を変換。
   */
  private static convertBold(text: string): string {
    let result: string

    // 開きタグを処理
    let regexp = /\[b\]/g
    result = text.replace(regexp, `<span class="font-weight-bold">`)
    // 閉じタグを処理
    regexp = /\[\/b\]/g
    result = result.replace(regexp, '</span>')

    return result
  }

  /**
   * 下線 を変換。
   */
  private static convertUnderline(text: string): string {
    let result: string

    // 開きタグを処理
    let regexp = /\[u\]/g
    result = text.replace(regexp, `<span class="text-decoration-underline">`)
    // 閉じタグを処理
    regexp = /\[\/u\]/g
    result = result.replace(regexp, '</span>')

    return result
  }

  /**
   * 斜体 を変換。
   */
  private static convertItalic(text: string): string {
    let result: string

    // 開きタグを処理
    let regexp = /\[i\]/g
    result = text.replace(regexp, `<span class="font-italic">`)
    // 閉じタグを処理
    regexp = /\[\/i\]/g
    result = result.replace(regexp, '</span>')

    return result
  }

  /**
   * 取り消し線 を変換。
   */
  private static convertStrike(text: string): string {
    let result: string

    // 開きタグを処理
    let regexp = /\[strike\]/g
    result = text.replace(regexp, `<span class="text-decoration-line-through">`)
    // 閉じタグを処理
    regexp = /\[\/strike\]/g
    result = result.replace(regexp, '</span>')

    return result
  }

  /**
   * ネタバレテキスト を変換。
   */
  private static convertSpoiler(text: string): string {
    let result: string

    // 開きタグを処理
    let regexp = /\[spoiler\]/g
    result = text.replace(
      regexp,
      `<span class="font-weight-bold">ネタバレ注意!</span><span class="grey lighten-2">`
    )
    // 閉じタグを処理
    regexp = /\[\/spoiler\]/g
    result = result.replace(regexp, '</span>')

    return result
  }

  /**
   * RawText(noparse) を変換。
   */
  private static convertNoparse(text: string): string {
    let result: string

    // 開きタグを処理
    let regexp = /\[noparse\]/g
    result = text.replace(regexp, ``)
    // 閉じタグを処理
    regexp = /\[\/noparse\]/g
    result = result.replace(regexp, '')

    return result
  }

  /**
   * 水平線 を変換。
   */
  private static convertHorizon(text: string): string {
    let result: string

    // 開きタグを処理
    let regexp = /\[hr\]/g
    result = text.replace(regexp, `<hr class="grey" />`)
    // 閉じタグを処理
    regexp = /\[\/hr\]/g
    result = result.replace(regexp, '')

    return result
  }

  /**
   * ウェブサイトリンク を変換。
   */
  private static convertUrl(text: string): string {
    // タグを処理
    const regexp = /\[url=(.*)\](.*)\[\/url\]/g
    const result = text.replace(regexp, (_, p1, p2) => {
      if (p2 === '') {
        return `<a href="${p1}" target="_blank">${p1}</a>`
      } else {
        return `<a href="${p1}" target="_blank">${p2}</a>`
      }
    })

    return result
  }

  /**
   * リストコンテンツ を変換。
   */
  private static convertList(text: string): string {
    let result: string

    // list開きタグを処理
    let regexp = /\[list\]/g
    result = text.replace(regexp, `<ul>`)
    // list閉じタグを処理
    regexp = /\[\/list\]/g
    result = result.replace(regexp, '</ul>')

    // listItem開きタグを処理
    regexp = /\[\*\]/g
    result = result.replace(regexp, `<li>`)
    // list閉じタグを処理
    regexp = /\[\/\*\]/g
    result = result.replace(regexp, '</li>')

    return result
  }

  /**
   * 番号付きリストコンテンツ を変換。
   */
  private static convertOList(text: string): string {
    let result: string

    // olist開きタグを処理
    let regexp = /\[olist\]/g
    result = text.replace(regexp, `<ol>`)
    // olist閉じタグを処理
    regexp = /\[\/olist\]/g
    result = result.replace(regexp, '</ol>')

    // listItem開きタグを処理
    regexp = /\[\*\]/g
    result = result.replace(regexp, `<li>`)
    // list閉じタグを処理
    regexp = /\[\/\*\]/g
    result = result.replace(regexp, '</li>')

    return result
  }

  /**
   * 引用テキスト を変換。
   */
  private static convertQuote(text: string): string {
    let result: string

    // 開きタグを処理
    let regexp = /\[quote=(.*)\]/g
    result = text.replace(regexp, (_, p1) => {
      return `<v-card><v-card-text><span class="font-weight-bold">${p1}</span>の投稿を引用<br />`
    })
    // 閉じタグを処理
    regexp = /\[\/quote\]/g
    result = result.replace(regexp, '</v-card-text></v-card>')

    return result
  }

  /**
   * 固定幅フォント&空白そのまま出力 を変換。
   */
  private static convertCode(text: string): string {
    let result: string

    // 開きタグを処理
    let regexp = /\[code\]/g
    result = text.replace(regexp, `<code>`)
    // 閉じタグを処理
    regexp = /\[\/code\]/g
    result = result.replace(regexp, '</code>')

    return result
  }

  /**
   * テーブルコンテンツ を変換。
   */
  private static convertTable(text: string): string {
    let result: string

    // table 開きタグを処理
    let regexp = /\[table\]/g
    result = text.replace(regexp, `<table>`)
    // table 閉じタグを処理
    regexp = /\[\/table\]/g
    result = result.replace(regexp, '</table>')

    // th 開きタグを処理
    regexp = /\[th\]/g
    result = result.replace(regexp, `<th>`)
    // th 閉じタグを処理
    regexp = /\[\/th\]/g
    result = result.replace(regexp, '</th>')

    // tr 開きタグを処理
    regexp = /\[tr\]/g
    result = result.replace(regexp, `<tr>`)
    // tr 閉じタグを処理
    regexp = /\[\/tr\]/g
    result = result.replace(regexp, '</tr>')

    // td 開きタグを処理
    regexp = /\[td\]/g
    result = result.replace(regexp, `<td>`)
    // td 閉じタグを処理
    regexp = /\[\/td\]/g
    result = result.replace(regexp, '</td>')

    return result
  }

  /**
   * 画像コンテンツ を変換。
   */
  private static convertImage(text: string): string {
    // タグを処理
    const regexp = /\[img\]{STEAM_CLAN_IMAGE}(.*)\[\/img\]/g
    const result = text.replace(regexp, (_, p1) => {
      return `<img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/${p1}" style="max-width: 100%;" />`
    })

    return result
  }
}
