// 環境変数から値読み込み
const baseUrl = Cypress.env('baseUrl')

/**
 * TOPページの動作確認。
 */
describe('TOPページの動作確認', function () {
  beforeEach(() => {
    // 本プロジェクトサイトにアクセス
    cy.visit(baseUrl)
  })

  it('正常に画面を開けるか確認', () => {
    // コンテンツ数が正常かどうか
    cy.get(selectors.categoryCard).should('have.length', 4)
    // スクリーンショットを取る
    cy.screenshot('topPage', { capture: 'fullPage' })
  })

  it('各カテゴリの表示が正常か&リンクボタンが機能しているか', () => {
    categoryCardFixtures.forEach((categoryCardFixture) => {
      // fixtureから各データを読み込み
      cy.fixture(categoryCardFixture.fixturePath).then(function (data) {
        // カテゴリデータを取得
        cy.get(selectors.categoryCard)
          .eq(categoryCardFixture.index)
          .within(() => {
            // カテゴリ名が合っているか確認
            cy.get(selectors.categoryName).contains(data.name)
            // カテゴリのリンクボタンをクリック
            cy.get(selectors.categoryLink).click()
            // プロジェクト内のURLに遷移すること
            cy.url().should('include', `${baseUrl}${data.link}`)
          })
      })
      // TOPページにアクセスし直す
      cy.visit(baseUrl)
    })
  })

  it('サイドバーが機能しているかどうか', () => {
    sideBarCategoryFixtures.forEach((sideBarCategoryFixture) => {
      // fixtureから各データを読み込み
      cy.fixture(sideBarCategoryFixture.fixturePath).then(function (data) {
        // サイドバーを開く
        cy.get(selectors.openSideMenuButton).click()
        // リンク部分を取得
        cy.get(selectors.sideBarItem)
          .eq(sideBarCategoryFixture.index)
          .within(() => {
            // カテゴリ名が合っているか確認
            cy.get(selectors.sideBarItemTitle).contains(data.name)
            // カテゴリのリンクボタンをクリック
            cy.root().click()
            // プロジェクト内のURLに遷移すること
            cy.url().should('include', `${baseUrl}${data.link}`)
          })
      })
      // TOPページにアクセスし直す
      cy.visit(baseUrl)
    })
  })
})

const selectors = {
  categoryCard: '[data-cy="categoryCard-cardArea"]',
  categoryName: '[data-cy="categoryCard-name"]',
  categoryLink: '[data-cy="categoryCard-link"]',
  openSideMenuButton: '[data-cy="default-openSideMenuButton"]',
  sideBarItem: '[data-cy="default-sideBarItem"]',
  sideBarItemTitle: '[data-cy="default-sideBarItemTitle"]',
}

const categoryCardFixtures = [
  {
    // fixtureファイルのパス
    fixturePath: 'topCategory/appWatcher',
    // カテゴリのインデックス番号(何番目に表示されているカテゴリか)
    index: 0,
  },
  { fixturePath: 'topCategory/modWatcher', index: 1 },
]

const sideBarCategoryFixtures = [
  {
    // fixtureファイルのパス
    fixturePath: 'topCategory/top',
    // カテゴリのインデックス番号(何番目に表示されているカテゴリか)
    index: 0,
  },
  {
    // fixtureファイルのパス
    fixturePath: 'topCategory/appWatcher',
    // カテゴリのインデックス番号(何番目に表示されているカテゴリか)
    index: 1,
  },
  { fixturePath: 'topCategory/modWatcher', index: 2 },
  {
    fixturePath: 'topCategory/reviewWatcher',
    index: 3,
  },
  {
    fixturePath: 'topCategory/newsWatcher',
    index: 4,
  },
]
