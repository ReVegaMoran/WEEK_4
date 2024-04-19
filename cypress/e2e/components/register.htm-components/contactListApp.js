import { faker } from '@faker-js/faker';

export const samplePosts = [{
        firstName: 'John',
        lastName: 'Doe',
        birthdate: "1990/01/01",
        email: 'johndoe@example.com',
        phone: 8005551234,
        street1: 'Senadora Maria',
        street2: 'Sagrada Familia',
        city: 'Santiago',
        stateProvince: 'Maipú',
        postalCode: 21200,
        country: 'Chile',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        birthdate: "1990/01/01",
        email: 'test2@example.com',
        phone: 8005551234,
        street1: 'Senadora Maria',
        street2: 'Sagrada Familia',
        city: 'Santiago',
        stateProvince: 'Maipú',
        postalCode: 21200,
        country: 'Chile',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        birthdate: "1990/01/01",
        email: 'test3@example.com',
        phone: 8005551234,
        street1: 'Senadora Maria',
        street2: 'Sagrada Familia',
        city: 'Santiago',
        stateProvince: 'Maipú',
        postalCode: 21200,
        country: 'Chile',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        birthdate: "1990/01/01",
        email: 'test4@example.com',
        phone: 8005551234,
        street1: 'Senadora Maria',
        street2: 'Sagrada Familia',
        city: 'Santiago',
        stateProvince: 'Maipú',
        postalCode: 21200,
        country: 'Chile',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        birthdate: "1990/01/01",
        email: 'test5@example.com',
        phone: 8005551234,
        street1: 'Senadora Maria',
        street2: 'Sagrada Familia',
        city: 'Santiago',
        stateProvince: 'Maipú',
        postalCode: 21200,
        country: 'Chile',
    },
];

class Login {
    constructor() {
        this.generateRandomCredentials();
    }

    generateRandomCredentials() {
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }

    getEmailInput() {
        return cy.get('[id="email"]');
    }

    getPasswordInput() {
        return cy.get('[id="password"]');
    }

    getSubmitButton() {
        return cy.get('[id="submit"]');
    }

    getSignUpButton() {
        return cy.get('[id="signup"]');
    }

    getRequiredFieldsWarningMessage() {
        return cy.get('[id="error"]');
    }

    goToAddUser() {
        this.getSignUpButton().click();
    }

    loginUser() {
        this.getEmailInput().type(this.email);
        this.getPasswordInput().type(this.password);
        this.getSubmitButton().click();
    }
}

export const login = new Login;