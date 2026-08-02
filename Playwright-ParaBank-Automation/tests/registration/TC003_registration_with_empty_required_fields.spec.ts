import { test } from '../../fixtures/base';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { RegistrationDataFactory } from '../../test-data/factories/RegistrationDataFactory';

// ==========================================
// TC003 - First Name Required
// ==========================================

test('TC003 - Registration Without First Name', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutFirstName();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyFirstNameRequired();

});

// ==========================================
// TC004 - Last Name Required
// ==========================================

test('TC004 - Registration Without Last Name', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutLastName();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyLastNameRequired();

});

// ==========================================
// TC005 - Street Required
// ==========================================

test('TC005 - Registration Without Street', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutStreet();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyAddressRequired();

});

// ==========================================
// TC006 - City Required
// ==========================================

test('TC006 - Registration Without City', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutCity();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyCityRequired();

});

// ==========================================
// TC007 - State Required
// ==========================================

test('TC007 - Registration Without State', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutState();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyStateRequired();

});

// ==========================================
// TC008 - Zip Code Required
// ==========================================

test('TC008 - Registration Without Zip Code', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutZipCode();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyZipCodeRequired();

});

// ==========================================
// TC009 - SSN Required
// ==========================================

test('TC009 - Registration Without SSN', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutSSN();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifySSNRequired();

});

// ==========================================
// TC010 - Username Required
// ==========================================

test('TC010 - Registration Without Username', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutUsername();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyUsernameRequired();

});

// ==========================================
// TC011 - Password Required
// ==========================================

test('TC011 - Registration Without Password', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutPassword();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyPasswordRequired();

});

// ==========================================
// TC012 - Confirm Password Required
// ==========================================

test('TC012 - Registration Without Confirm Password', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const user =
        RegistrationDataFactory.createUserWithoutConfirmPassword();

    await registrationPage.navigateToRegistrationPage();

    await registrationPage.registerUser(user);

    await registrationPage.verifyConfirmPasswordRequired();

});