import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    // ==========================================
    // Locators
    // ==========================================

    private readonly usernameInput =
        this.page.locator('input[name="username"]');

    private readonly passwordInput =
        this.page.locator('input[name="password"]');

    private readonly loginButton =
        this.page.locator('input[value="Log In"]');

    private readonly logoutLink =
        this.page.getByRole('link', { name: 'Log Out' });

    private readonly accountsOverviewTitle =
        this.page.getByRole('heading', { name: 'Accounts Overview' });

    private readonly loginErrorMessage =
        this.page.getByText(
            'An internal error has occurred and has been logged.' );

    private readonly emptyCredentialsError =
        this.page.getByText(
            'Please enter a username and password.' );
            
    
    // ==========================================
    // Constructor
    // ==========================================

    constructor(page: Page) {
        super(page);
    }

    // ==========================================
    // Navigation Methods
    // ==========================================

    public async navigateToLoginPage(): Promise<void> {

        await this.goto('/parabank/index.htm');

    }

    // ==========================================
    // Input Methods
    // ==========================================

    public async fillUsername(username: string): Promise<void> {

        await this.usernameInput.fill(username);

    }

    public async fillPassword(password: string): Promise<void> {

        await this.passwordInput.fill(password);

    }

    // ==========================================
    // Action Methods
    // ==========================================

    public async clickLogin(): Promise<void> {

        await this.loginButton.click();

    }

    public async login(
        username: string,
        password: string
    ): Promise<void> {

        await this.fillUsername(username);

        await this.fillPassword(password);

        await this.clickLogin();

    }

    public async logout(): Promise<void> {

        await this.logoutLink.click();

    }

    // ==========================================
    // Verification Methods
    // ==========================================

    public async verifySuccessfulLogin(): Promise<void> {

        await this.verifyLogoutButton();

        await this.verifyAccountsOverview();

    }

    public async verifyLogoutButton(): Promise<void> {

        await expect(this.logoutLink).toBeVisible();

    }

    public async verifyAccountsOverview(): Promise<void> {

        await expect(this.accountsOverviewTitle).toBeVisible();

    }

    public async verifyLoginError(): Promise<void> {

        await expect(this.loginErrorMessage).toBeVisible();

    }

    public async verifyLoggedOut(): Promise<void> {

        await expect(this.loginButton).toBeVisible();

    }

    public async verifyEmptyCredentialsError(): Promise<void> {

        await expect(this.emptyCredentialsError).toBeVisible();

    }

}