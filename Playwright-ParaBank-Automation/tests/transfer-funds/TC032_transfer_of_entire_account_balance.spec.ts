import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { AccountOverviewPage } from '../../pages/AccountOverviewPage';
import { OpenNewAccountPage } from '../../pages/OpenNewAccountPage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC032 - Transfer of Entire Account Balance', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    const accountOverviewPage = new AccountOverviewPage(page);

    const openNewAccountPage = new OpenNewAccountPage(page);

    const transferFundsPage = new TransferFundsPage(page);

    const user =
        RegistrationDataFactory.createValidUser();

    // ==========================================
    // Act
    // ==========================================

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyRegistrationSuccess(user);

    await openNewAccountPage.navigateToOpenNewAccountPage();

    await openNewAccountPage.openNewSavingsAccount();

    await openNewAccountPage.verifyAccountCreated();

    await accountOverviewPage.navigateToAccountOverviewPage();

    const balance =
        await accountOverviewPage.getFirstAccountBalance();

    console.log('====================================');
    console.log(`Balance from Account Overview: ${balance}`);
    console.log('====================================');

    await transferFundsPage.navigateToTransferFundsPage();

    await transferFundsPage.transferFunds(balance);

    // ==========================================
    // Assert
    // ==========================================

    await transferFundsPage.verifyTransferSuccessful();

});