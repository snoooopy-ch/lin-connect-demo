export default class Good {
  constructor(readonly title: string, readonly price: number, readonly img_url: string) {}
}

export const createDummyGood = () => {
  return new Good('ゆったりしたセーター', 10000, '/assets/images/item_img.png')
}