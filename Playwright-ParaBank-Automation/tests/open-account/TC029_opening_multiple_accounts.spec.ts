import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { LoginPage } from '../../pages/LoginPage';
import { OpenNewAccountPage } from '../../pages/OpenNewAccountPage';
import { AccountOverviewPage } from '../../pages/AccountOverviewPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC029 - Verify Opening Multiple Accounts', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    const loginPage = new LoginPage(page);

    const openNewAccountPage = new OpenNewAccountPage(page);

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

    // Create Checking Account
    await openNewAccountPage.navigateToOpenNewAccountPage();

    await openNewAccountPage.openNewCheckingAccount();

    await openNewAccountPage.verifyAccountCreated();

    const checkingAccount =
        await openNewAccountPage.getNewAccountNumber();

    // Create Savings Account
    await openNewAccountPage.navigateToOpenNewAccountPage();

    await openNewAccountPage.openNewSavingsAccount();

    await openNewAccountPage.verifyAccountCreated();

    const savingsAccount =
        await openNewAccountPage.getNewAccountNumber();

    await accountOverviewPage.navigateToAccountOverviewPage();

    // ==========================================
    // Assert
    // ==========================================

    await accountOverviewPage.verifyAccountExists(checkingAccount);

    await accountOverviewPage.verifyAccountExists(savingsAccount);

});