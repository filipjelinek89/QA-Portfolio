import { test, expect } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { LoginPage } from '../../pages/LoginPage';
import { OpenNewAccountPage } from '../../pages/OpenNewAccountPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC027 - Verify Unique Account Number Is Generated', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    const loginPage = new LoginPage(page);

    const openNewAccountPage = new OpenNewAccountPage(page);

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

    // First account
    await openNewAccountPage.navigateToOpenNewAccountPage();

    await openNewAccountPage.openNewCheckingAccount();

    await openNewAccountPage.verifyAccountCreated();

    const firstAccount =
        await openNewAccountPage.getNewAccountNumber();

    // Second account
    await openNewAccountPage.navigateToOpenNewAccountPage();

    await openNewAccountPage.openNewSavingsAccount();

    await openNewAccountPage.verifyAccountCreated();

    const secondAccount =
        await openNewAccountPage.getNewAccountNumber();

    // ==========================================
    // Assert
    // ==========================================

    expect(firstAccount).not.toBe(secondAccount);

});