describe('Тестирование pokemonbattle.me/login/', function () {

     it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('input[id="k_email"]').type('INSERT_USER_NAME_HERE');
        cy.get('input[id="k_password"]').type('INSERT_YOUR_PASSWORD_HERE');
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
        cy.get('.header_card_trainer').click();
        cy.wait(2000);
        cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();
        cy.get('.available > button').first().click();
        cy.get('.card_number').type('4620869113632996');
        cy.get('.card_csv').type('125');
        cy.get('.card_date').type('1226');
        cy.get('.card_name').type('NAME');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.threeds_number').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
    });

})


// npx cypress run --spec cypress/e2e/task_2.cy.js --browser chrome
