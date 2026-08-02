import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OpenNewAccountPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // ==========================================
    // Locators
    // ==========================================

    private readonly openNewAccountMenuLink =
        this.page.getByRole('link', { name: 'Open New Account' });

    private readonly openNewAccountTitle =
        this.page.getByRole('heading', { name: 'Open New Account' });

    private readonly accountTypeDropdown =
        this.page.locator('#type');

    private readonly existingAccountDropdown =
        this.page.locator('#fromAccountId');

    private readonly openNewAccountButton =
        this.page.getByRole('button', { name: 'Open New Account' });

    private readonly accountOpenedTitle =
        this.page.getByRole('heading', { name: 'Account Opened!' });

    private readonly accountOpenedMessage =
        this.page.getByText('Congratulations, your account is now open.');

    private readonly newAccountLink =
        this.page.locator('#newAccountId');

    // ==========================================
    // Navigation
    // ==========================================

    public async navigateToOpenNewAccountPage(): Promise<void> {

        await this.openNewAccountMenuLink.click();

        await expect(this.openNewAccountTitle).toBeVisible();

        await expect(this.existingAccountDropdown).toBeVisible();

    }

    // ==========================================
    // Actions
    // ==========================================

    public async selectCheckingAccount(): Promise<void> {

        await this.accountTypeDropdown.selectOption('0');

    }

    public async selectSavingsAccount(): Promise<void> {

        await this.accountTypeDropdown.selectOption('1');

    }

    public async clickOpenNewAccount(): Promise<void> {

        await expect(this.openNewAccountButton).toBeVisible();

        await expect(this.openNewAccountButton).toBeEnabled();

        // Wait until the account dropdown is fully initialized
        await this.page.waitForFunction(() => {

            const select = document.querySelector(
                '#fromAccountId'
            ) as HTMLSelectElement | null;

        return select && select.selectedIndex >= 0;

    });

    await this.openNewAccountButton.click();

}

    public async openNewCheckingAccount(): Promise<void> {

        await this.selectCheckingAccount();

        await this.clickOpenNewAccount();

    }

    public async openNewSavingsAccount(): Promise<void> {

        await this.selectSavingsAccount();

        await this.clickOpenNewAccount();

    }

    public async openNewCreatedAccount(): Promise<void> {

        await this.newAccountLink.click();

    }

    public async selectFundingAccount(accountNumber: string): Promise<void> {

        await this.existingAccountDropdown.selectOption(accountNumber);

    }

    // ==========================================
    // Verification Methods
    // ==========================================

    public async verifyOpenNewAccountPage(): Promise<void> {

        await expect(this.openNewAccountTitle).toBeVisible();

        await expect(this.accountTypeDropdown).toBeVisible();

        await expect(this.existingAccountDropdown).toBeVisible();

        await expect(this.openNewAccountButton).toBeVisible();

    }

    public async verifyAccountCreated(): Promise<void> {

        await expect(this.accountOpenedTitle).toBeVisible();

        await expect(this.accountOpenedMessage).toBeVisible();

        await expect(this.newAccountLink).toBeVisible();

    }

    // ==========================================
    // Helper
    // ==========================================

    public async getNewAccountNumber(): Promise<string> {

        return (await this.newAccountLink.textContent())!.trim();

    }

}