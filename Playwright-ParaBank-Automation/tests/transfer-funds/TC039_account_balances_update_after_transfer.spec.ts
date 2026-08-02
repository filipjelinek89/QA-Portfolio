import { test, expect } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { OpenNewAccountPage } from '../../pages/OpenNewAccountPage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';
import { AccountOverviewPage } from '../../pages/AccountOverviewPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC039 - Account Balances Update After Transfer', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    const openNewAccountPage = new OpenNewAccountPage(page);

    const transferFundsPage = new TransferFundsPage(page);

    const accountOverviewPage = new AccountOverviewPage(page);

    const user =
        RegistrationDataFactory.createValidUser();

    const transferAmount = 100;

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

    const sourceBalanceBefore =
        accountOverviewPage.parseBalance(
            await accountOverviewPage.getFirstAccountBalance()
        );

    const destinationBalanceBefore =
        accountOverviewPage.parseBalance(
            await accountOverviewPage.getSecondAccountBalance()
        );

    await transferFundsPage.navigateToTransferFundsPage();

    await transferFundsPage.transferFunds(
        transferAmount.toString()
    );

    await transferFundsPage.verifyTransferSuccessful();

    await accountOverviewPage.navigateToAccountOverviewPage();

    const sourceBalanceAfter =
        accountOverviewPage.parseBalance(
            await accountOverviewPage.getFirstAccountBalance()
        );

    const destinationBalanceAfter =
        accountOverviewPage.parseBalance(
            await accountOverviewPage.getSecondAccountBalance()
        );

    // ==========================================
    // Assert
    // ==========================================

    expect(sourceBalanceAfter)
        .toBe(sourceBalanceBefore - transferAmount);

    expect(destinationBalanceAfter)
        .toBe(destinationBalanceBefore + transferAmount);

});