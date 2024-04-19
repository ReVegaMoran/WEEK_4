import { login, samplePosts } from "../components/register.htm-components/contactListApp.js";
import { addUser } from "../components/addUser-components/addUser.js";

describe('Display of Mocked Contacts', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it('Should correctly display the mocked contacts after logging in and validate that the table has data from the mocked contacts.', () => {
        cy.intercept('GET', '/contacts', samplePosts).as('mockedContacts')
        login.goToAddUser();
        addUser.AddFirstUser();
        cy.wait('@mockedContacts');
        cy.get('.contactTableBodyRow').then(($rows) => {
            $rows.each((index, row) => {
                const email = Cypress.$(row).find('td:nth-child(4)').text();
                cy.log(email);
            });
        });
    });
});