import { test, expect } from '../../fixtures/base';

import { LoginPage } from '../../pages/LoginPage';

test('TC014 Empty password', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const loginPage = new LoginPage(page);

    // ==========================================
    // Act
    // ==========================================

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'ValidUsername123',
        ''
    );

    // ==========================================
    // Assert
    // ==========================================

    await loginPage.verifyEmptyCredentialsError();

});