import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { LoginPage } from '../../pages/LoginPage';
import { AccountOverviewPage } from '../../pages/AccountOverviewPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC019 - Account details', async ({ page }) => {

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

    await accountOverviewPage.verifyAccountInformation();

});