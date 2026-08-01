import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { LoginPage } from '../../pages/LoginPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC009 - Successful Login', async ({ page }) => {

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

    // ==========================================
    // Assert
    // ==========================================

    await loginPage.verifySuccessfulLogin();

});