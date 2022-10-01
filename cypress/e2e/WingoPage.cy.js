describe('Seleccionar vuelos en wingo', () => {
  it('Dado que abro la página de Wingo', () => {
    cy.visit('https://www.wingo.com/')
    
  })

  it('Selecciono mi lugar de partida y mi destino', () => {
   // cy.visit('https://www.wingo.com/')
  
    cy.get(".cont-search").click({force: true})
    cy.get(".input-origen > .select-drop > .info-airport > .select > .styledSelect").click({force: true})
    cy.get('[data-cod="BOG"] > .textCity').click()

    cy.get(".input-destino > .select-drop > .info-airport > .select > .styledSelect").click({force: true})
    
    cy.get('#comboDestino > [data-cod="CLO"] > .textCity').click({force: true})
    cy.get("#selectPasj > .info-airport").click()
    cy.get(":nth-child(1) > .bts-add > .plus").click()
    cy.get('#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(5) > :nth-child(5) > .day').click({force: true})
    cy.get('#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(4) > :nth-child(6) > .day').click({force: true})
    //cy.get(".btn-search").click()

  })
})