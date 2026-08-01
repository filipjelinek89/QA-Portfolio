import { test } from '../../fixtures/base';

import { LoginPage } from '../../pages/LoginPage';

test('TC012 - Invalid Username and Password', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const loginPage = new LoginPage(page);

    // ==========================================
    // Act
    // ==========================================

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'InvalidUsername123',
        'InvalidPassword123'
    );

    // ==========================================
    // Assert
    // ==========================================

    await loginPage.verifyLoginError();

});