export default class TimestampUtil {
  public convertToDateTime(timestamp: number): string {
    const dateTime = new Date(timestamp)

    return `
      ${dateTime.toLocaleDateString('ja-JP')} 
      ${dateTime.toLocaleTimeString('ja-JP')}
    `
  }
}
