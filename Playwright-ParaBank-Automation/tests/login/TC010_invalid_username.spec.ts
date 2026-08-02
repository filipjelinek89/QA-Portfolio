import { test } from '../../fixtures/base';

import { LoginPage } from '../../pages/LoginPage';

test('TC010 - Invalid Username', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const loginPage = new LoginPage(page);

    // ==========================================
    // Act
    // ==========================================

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'totallyrandomuser',
        'Password123'
    );

    // ==========================================
    // Assert
    // ==========================================

    await loginPage.verifyLoginError();

});