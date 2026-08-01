import { test } from '@playwright/test';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

test('TC006 - Username Length Boundary Validation', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    await test.step('Verify Username Length Below Boundary (19)', async () => {

        const user =
            RegistrationDataFactory.createUserWithBoundaryLength(19);

        await registrationPage.navigateToRegistrationPage();

        await registrationPage.registerUser(user);

        await registrationPage.verifyRegistrationSuccess(user);

        await registrationPage.clickLogout();

    });

    await test.step('Verify Username Length At Boundary (20)', async () => {

        const user =
            RegistrationDataFactory.createUserWithBoundaryLength(20);

        await registrationPage.navigateToRegistrationPage();

        await registrationPage.registerUser(user);

        await registrationPage.verifyRegistrationSuccess(user);

        await registrationPage.clickLogout();

    });

    await test.step('Verify Username Length Above Boundary (21)', async () => {

        const user =
            RegistrationDataFactory.createUserWithBoundaryLength(21);

        await registrationPage.navigateToRegistrationPage();

        await registrationPage.registerUser(user);

        await registrationPage.verifyExistingUsernameError();

    });

});