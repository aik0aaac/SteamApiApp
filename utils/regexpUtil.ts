export default class RegexpUtil {
  public match(str: string, regexp: RegExp) {
    return (str.match(regexp) as Array<string>)[1]
  }

  public steamUrlToAppId: RegExp = /https:\/\/store.steampowered.com\/app\/([0-9]+)\//
}
