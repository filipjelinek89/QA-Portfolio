import { test, expect } from '../../fixtures/base';

import { LoginPage } from '../../pages/LoginPage';

test('TC013 - Empty Username', async ({ page }) => {

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
        'InvalidPassword123'
    );

    // ==========================================
    // Assert
    // ==========================================

    await loginPage.verifyEmptyCredentialsError();

});