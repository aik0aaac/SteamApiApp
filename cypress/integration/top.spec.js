// 環境変数から値読み込み
const baseUrl = Cypress.env('baseUrl')

/**
 * TOPページの動作確認。
 */
describe('TOPページの動作確認', function () {
  it('正常に画面を開けるか確認', function () {
    cy.visit('https://www.google.co.jp')

    cy.get('.gsfi.lst-d-f').type('cypress.io')

    cy.contains('Google 検索').click()

    cy.title().should('eq', 'cypress.io - Google 検索')
  })
})

const selectors = {}
