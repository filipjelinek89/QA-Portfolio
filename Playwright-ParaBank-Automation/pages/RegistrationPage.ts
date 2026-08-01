import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { RegistrationData } from '../test-data/models/RegistrationData';

export class RegistrationPage extends BasePage {

    // ==========================================
    // Locators
    // ==========================================

    private readonly firstNameInput =
        this.page.locator('#customer\\.firstName');

    private readonly lastNameInput =
        this.page.locator('#customer\\.lastName');

    private readonly addressInput =
        this.page.locator('#customer\\.address\\.street');

    private readonly cityInput =
        this.page.locator('#customer\\.address\\.city');

    private readonly stateInput =
        this.page.locator('#customer\\.address\\.state');

    private readonly zipCodeInput =
        this.page.locator('#customer\\.address\\.zipCode');

    private readonly phoneInput =
        this.page.locator('#customer\\.phoneNumber');

    private readonly ssnInput =
        this.page.locator('#customer\\.ssn');

    private readonly usernameInput =
        this.page.locator('#customer\\.username');

    private readonly passwordInput =
        this.page.locator('#customer\\.password');

    private readonly confirmPasswordInput =
        this.page.locator('[name="repeatedPassword"]');

    private readonly registerButton =
        this.page.getByRole('button', { name: 'Register' });

    private readonly logoutLink =
        this.page.getByRole('link', { name: 'Log Out' });

    private readonly welcomeMessage =
        this.page.locator('#rightPanel h1');

    private readonly registrationSuccessMessage =
        this.page.getByText('Your account was created successfully.');

    // Validation Messages

    private readonly firstNameRequiredMessage =
        this.page.getByText('First name is required.');

    private readonly lastNameRequiredMessage =
        this.page.getByText('Last name is required.');

    private readonly addressRequiredMessage =
        this.page.getByText('Address is required.');

    private readonly cityRequiredMessage =
        this.page.getByText('City is required.');

    private readonly stateRequiredMessage =
        this.page.getByText('State is required.');

    private readonly zipCodeRequiredMessage =
        this.page.getByText('Zip Code is required.');

    private readonly ssnRequiredMessage =
        this.page.getByText('Social Security Number is required.');

    private readonly usernameRequiredMessage =
        this.page.getByText('Username is required.');

    private readonly passwordRequiredMessage =
        this.page.getByText('Password is required.');

    private readonly confirmPasswordRequiredMessage =
        this.page.getByText('Password confirmation is required.');

    private readonly existingUsernameMessage =
        this.page.getByText('This username already exists.');

    private readonly passwordMismatchMessage =
        this.page.getByText('Passwords did not match.');

    // ==========================================
    // Constructor
    // ==========================================

    constructor(page: Page) {
        super(page);
    }

    // ==========================================
    // Navigation Methods
    // ==========================================

    public async navigateToRegistrationPage(): Promise<void> {
        await this.goto('/parabank/register.htm');
    }

    // ==========================================
    // Input Methods
    // ==========================================

    public async fillFirstName(firstName: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
    }

    public async fillLastName(lastName: string): Promise<void> {
        await this.lastNameInput.fill(lastName);
    }

    public async fillStreet(street: string): Promise<void> {
        await this.addressInput.fill(street);
    }

    public async fillCity(city: string): Promise<void> {
        await this.cityInput.fill(city);
    }

    public async fillState(state: string): Promise<void> {
        await this.stateInput.fill(state);
    }

    public async fillZipCode(zipCode: string): Promise<void> {
        await this.zipCodeInput.fill(zipCode);
    }

    public async fillPhone(phone: string): Promise<void> {
        await this.phoneInput.fill(phone);
    }

    public async fillSSN(ssn: string): Promise<void> {
        await this.ssnInput.fill(ssn);
    }

    public async fillUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    public async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    public async fillConfirmPassword(confirmPassword: string): Promise<void> {
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    // ==========================================
    // Action Methods
    // ==========================================

    public async clickRegister(): Promise<void> {
        await this.registerButton.click();
    }

    public async registerUser(user: RegistrationData): Promise<void> {

        await this.fillFirstName(user.firstName);
        await this.fillLastName(user.lastName);
        await this.fillStreet(user.address.street);
        await this.fillCity(user.address.city);
        await this.fillState(user.address.state);
        await this.fillZipCode(user.address.zipCode);
        await this.fillPhone(user.phone);
        await this.fillSSN(user.ssn);
        await this.fillUsername(user.username);
        await this.fillPassword(user.password);
        await this.fillConfirmPassword(user.confirmPassword);

        await this.clickRegister();
    }

    public async clickLogout(): Promise<void> {
        await this.logoutLink.click();
    }

    // ==========================================
    // Validation Methods
    // ==========================================

    public async verifyRegistrationSuccess(user: RegistrationData): Promise<void> {

        await this.verifySuccessMessage();
        await this.verifyWelcomeMessage(user.username);
        await this.verifyLogoutButton();

    }

    private async verifySuccessMessage(): Promise<void> {
        await expect(this.registrationSuccessMessage).toBeVisible();
    }

    private async verifyWelcomeMessage(username: string): Promise<void> {
        await expect(this.welcomeMessage).toContainText(username);
    }

    private async verifyLogoutButton(): Promise<void> {
        await expect(this.logoutLink).toBeVisible();
    }

    public async verifyFirstNameRequired(): Promise<void> {
        await expect(this.firstNameRequiredMessage).toBeVisible();
    }

    public async verifyLastNameRequired(): Promise<void> {
        await expect(this.lastNameRequiredMessage).toBeVisible();
    }

    public async verifyAddressRequired(): Promise<void> {
        await expect(this.addressRequiredMessage).toBeVisible();
    }

    public async verifyCityRequired(): Promise<void> {
        await expect(this.cityRequiredMessage).toBeVisible();
    }

    public async verifyStateRequired(): Promise<void> {
        await expect(this.stateRequiredMessage).toBeVisible();
    }

    public async verifyZipCodeRequired(): Promise<void> {
        await expect(this.zipCodeRequiredMessage).toBeVisible();
    }

    public async verifySSNRequired(): Promise<void> {
        await expect(this.ssnRequiredMessage).toBeVisible();
    }

    public async verifyUsernameRequired(): Promise<void> {
        await expect(this.usernameRequiredMessage).toBeVisible();
    }

    public async verifyPasswordRequired(): Promise<void> {
        await expect(this.passwordRequiredMessage).toBeVisible();
    }

    public async verifyConfirmPasswordRequired(): Promise<void> {
        await expect(this.confirmPasswordRequiredMessage).toBeVisible();
    }

    public async verifyExistingUsernameError(): Promise<void> {
        await expect(this.existingUsernameMessage).toBeVisible();
    }

    public async verifyPasswordMismatch(): Promise<void> {
        await expect(this.passwordMismatchMessage).toBeVisible();
    }

    public async isRegistrationSuccessful(): Promise<boolean> {

    return await this.registrationSuccessMessage.isVisible();

    }

    public async isExistingUsernameErrorVisible(): Promise<boolean> {

    return await this.existingUsernameMessage.isVisible();

    }

}