import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC007 - Special Characters Validation', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    await test.step('Verify Registration With Special Characters', async () => {

        const user =
            RegistrationDataFactory.createUserWithSpecialCharacters();

        await registrationPage.navigateToRegistrationPage();

        await registrationPage.registerUser(user);

        await registrationPage.verifyRegistrationSuccess(user);

    });

});