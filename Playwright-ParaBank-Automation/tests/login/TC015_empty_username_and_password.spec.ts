import { test } from '../../fixtures/base';

import { LoginPage } from '../../pages/LoginPage';

test('TC015 Empty username and password', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const loginPage = new LoginPage(page);

    // ==========================================
    // Act
    // ==========================================

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        '',
        ''
    );

    // ==========================================
    // Assert
    // ==========================================

    await loginPage.verifyEmptyCredentialsError();

});