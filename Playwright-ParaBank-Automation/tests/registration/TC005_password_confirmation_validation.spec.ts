import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC005 - Password Confirmation Validation', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    await test.step('Verify Password Confirmation Validation', async () => {

        const user =
            RegistrationDataFactory.createUserWithDifferentPasswords();

        await registrationPage.navigateToRegistrationPage();

        await registrationPage.registerUser(user);

        await registrationPage.verifyPasswordMismatch();

    });

});