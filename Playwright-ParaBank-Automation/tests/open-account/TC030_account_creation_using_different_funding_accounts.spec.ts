import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { LoginPage } from '../../pages/LoginPage';
import { OpenNewAccountPage } from '../../pages/OpenNewAccountPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC030 - Verify Account Creation Using Different Funding Accounts', async ({ page }) => {

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

    // Create first account
    await openNewAccountPage.navigateToOpenNewAccountPage();

    await openNewAccountPage.openNewCheckingAccount();

    await openNewAccountPage.verifyAccountCreated();

    const firstNewAccount =
        await openNewAccountPage.getNewAccountNumber();

    // Create second account using the newly created account
    await openNewAccountPage.navigateToOpenNewAccountPage();

    await openNewAccountPage.selectFundingAccount(firstNewAccount);

    await openNewAccountPage.openNewSavingsAccount();

    // ==========================================
    // Assert
    // ==========================================

    await openNewAccountPage.verifyAccountCreated();

});