import { test, expect } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC003 - Registration with Empty Required Fields', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    // ==========================================
    // Act & Assert
    // ==========================================

    await test.step('Verify Empty First Name', async () => {

        const user = RegistrationDataFactory.createUserWithoutFirstName();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifyFirstNameRequired();

    });

    await test.step('Verify Empty Last Name', async () => {

        const user = RegistrationDataFactory.createUserWithoutLastName();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifyLastNameRequired();

    });

    await test.step('Verify Empty Street', async () => {

        const user = RegistrationDataFactory.createUserWithoutStreet();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifyAddressRequired();

    });

    await test.step('Verify Empty City', async () => {

        const user = RegistrationDataFactory.createUserWithoutCity();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifyCityRequired();

    });

    await test.step('Verify Empty State', async () => {

        const user = RegistrationDataFactory.createUserWithoutState();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifyStateRequired();

    });

    await test.step('Verify Empty Zip Code', async () => {

        const user = RegistrationDataFactory.createUserWithoutZipCode();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifyZipCodeRequired();

    });

    await test.step('Verify Empty SSN', async () => {

        const user = RegistrationDataFactory.createUserWithoutSSN();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifySSNRequired();

    });

    await test.step('Verify Empty Username', async () => {

        const user = RegistrationDataFactory.createUserWithoutUsername();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifyUsernameRequired();

    });

    await test.step('Verify Empty Password', async () => {

        const user = RegistrationDataFactory.createUserWithoutPassword();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifyPasswordRequired();

    });

    await test.step('Verify Empty Confirm Password', async () => {

        const user = RegistrationDataFactory.createUserWithoutConfirmPassword();

        await registrationPage.navigateToRegistrationPage();
        await registrationPage.registerUser(user);

        await registrationPage.verifyConfirmPasswordRequired();

    });

});