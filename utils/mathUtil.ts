export default class MathUtil {
  /**
   * 任意の桁で四捨五入する。
   * @param {number} value 四捨五入する数値
   * @param {number} base どの桁で四捨五入するか（10→10の位、0.1→小数第１位）
   * @return {number} 四捨五入した値
   */
  public static orgRound(value: number, base: number): number {
    return Math.round(value * base) / base
  }
}
