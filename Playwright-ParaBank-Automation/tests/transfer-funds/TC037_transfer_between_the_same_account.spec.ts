import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { OpenNewAccountPage } from '../../pages/OpenNewAccountPage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';

import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC037 - Transfer Between the Same Account', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

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

    await transferFundsPage.navigateToTransferFundsPage();

    await transferFundsPage.selectFromAccount(0);

    await transferFundsPage.selectToAccount(0);

    await transferFundsPage.enterAmount('100');

    await transferFundsPage.clickTransfer();

    // ==========================================
    // Assert
    // ==========================================

    await transferFundsPage.verifyTransferRejected();

});