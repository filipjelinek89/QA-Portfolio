import { test } from '@playwright/test';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC002 -  Registration With Required Fields Only.spec', async ({ page }) => {

    // ==========================================
    // Arrange
    // ==========================================

    const registrationPage = new RegistrationPage(page);

    const user = RegistrationDataFactory.createUserWithRequiredFieldsOnly();

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