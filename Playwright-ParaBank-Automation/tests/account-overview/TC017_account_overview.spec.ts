import { test } from '../../fixtures/base';

import { LoginPage } from '../../pages/LoginPage';
import { AccountOverviewPage } from '../../pages/AccountOverviewPage';
import { RegistrationPage } from '../../pages/RegistrationPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC017 - Verify Account Overview Page After Successful Login', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    const loginPage = new LoginPage(page);

    const accountOverviewPage = new AccountOverviewPage(page);

    const user = RegistrationDataFactory.createValidUser();

    // ==========================================
    // Act
    // ==========================================

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await loginPage.logout();

    await loginPage.login(
        user.username,
        user.password
    );

    // ==========================================
    // Assert
    // ==========================================

    await accountOverviewPage.verifyAccountOverviewPage();

});