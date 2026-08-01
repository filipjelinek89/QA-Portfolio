import { test, expect } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC004 - Registration with an Existing Username', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    const userA = RegistrationDataFactory.createValidUser();

    const userB = RegistrationDataFactory.createValidUser();

    userB.username = userA.username;

    // ==========================================
    // Act & Assert
    // ==========================================

    await test.step('Register First User', async () => {

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(userA);

    await registrationPage.verifyRegistrationSuccess(userA);

    });

    await test.step('Logout', async () => {

    await registrationPage.clickLogout();

    });

    await test.step('Register User With Existing Username', async () => {

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(userB);

    await registrationPage.verifyExistingUsernameError();

    });
    
});