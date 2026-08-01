import { test, expect } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';
import { TestDataGenerator } from '../../test-data/generators/TestDataGenerator';

test.skip(
    true,
    'Investigation test - excluded from the regular regression suite. Enable manually when investigating username length limits.'
);

const usernameLengths = [
    19,
    20,
    21
];

for (const length of usernameLengths) {

    test(`INV001 - Username Length ${length}`, async ({ page }) => {

        const registrationPage = new RegistrationPage(page);

        const user = RegistrationDataFactory.createValidUser();

        user.username = TestDataGenerator.generateUniqueString(length);

        await registrationPage.navigateToRegistrationPage();

        await registrationPage.registerUser(user);

        await registrationPage.verifyRegistrationSuccess(user);

    });

}