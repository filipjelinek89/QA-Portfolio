import { test, expect } from '@playwright/test';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';
import { TestDataGenerator } from '../../test-data/generators/TestDataGenerator';

const usernameLengths = [
    19,
    20,
    21
];

for (const length of usernameLengths) {

    test(`INV001 - Username Length ${length}`, async ({ page }) => {

        const registrationPage = new RegistrationPage(page);

        const user = RegistrationDataFactory.createValidUser();

        user.username = TestDataGenerator.generateString(length);

        await registrationPage.navigateToRegistrationPage();

        await registrationPage.registerUser(user);

        // Investigation
        await registrationPage.verifyRegistrationSuccess(user);

    });

}