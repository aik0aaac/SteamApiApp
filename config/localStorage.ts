global.localStorage = {
  data: {},
  getItem(key: string) {
    return this.data[key]
  },
  setItem(key: string, value: string) {
    this.data[key] = value
  },
}
