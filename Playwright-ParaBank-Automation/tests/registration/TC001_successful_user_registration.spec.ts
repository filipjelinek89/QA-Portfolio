import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC001 - Verify Successful User Registration', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    const user = RegistrationDataFactory.createValidUser();

    // ==========================================
    // Act
    // ==========================================

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    // ==========================================
    // Assert
    // ==========================================

    await registrationPage.verifyRegistrationSuccess(user);

});