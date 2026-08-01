import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { LoginPage } from '../../pages/LoginPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC016 - Logout After Successful Login', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    const loginPage = new LoginPage(page);

    const user =
        RegistrationDataFactory.createValidUser();

    // ==========================================
    // Act
    // ==========================================

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.clickLogout();

    await loginPage.login(
        user.username,
        user.password
    );

    await loginPage.verifySuccessfulLogin();

    await loginPage.logout();

    // ==========================================
    // Assert
    // ==========================================

    await loginPage.verifyLoggedOut();

});