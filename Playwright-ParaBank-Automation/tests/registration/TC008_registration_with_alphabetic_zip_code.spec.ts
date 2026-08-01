import { test, expect } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC008 - Registration with Alphabetic ZIP Code', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    await test.step('Verify Registration With Alphabetic ZIP Code', async () => {

        const user =
            RegistrationDataFactory.createUserWithAlphabeticZipCode();

        await registrationPage.navigateToRegistrationPage();

        await registrationPage.registerUser(user);

        await registrationPage.verifyRegistrationSuccess(user);

    });

});