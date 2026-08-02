import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransferFundsPage extends BasePage {

    // ==========================================
    // Locators
    // ==========================================

    private readonly transferFundsMenuLink =
        this.page.getByRole('link', {
            name: 'Transfer Funds'
        });

    private readonly transferFundsTitle =
        this.page.getByRole('heading', {
            name: 'Transfer Funds'
        });

    private readonly transferCompleteTitle =
        this.page.getByRole('heading', {
            name: 'Transfer Complete!'
        });

    private readonly amountInput =
        this.page.locator('#amount');

    private readonly fromAccountDropdown =
        this.page.locator('#fromAccountId');

    private readonly toAccountDropdown =
        this.page.locator('#toAccountId');

    private readonly transferButton =
        this.page.getByRole('button', {
            name: 'Transfer'
        });

    private readonly internalErrorMessage =
        this.page.getByText(
            'An internal error has occurred and has been logged.'
        );

    private readonly transferConfirmationMessage =
        this.page.locator('#rightPanel p').filter({
            hasText: 'has been transferred'
        });

    // ==========================================
    // Constructor
    // ==========================================

    constructor(page: Page) {
        super(page);
    }

    // ==========================================
    // Navigation Methods
    // ==========================================

    public async navigateToTransferFundsPage(): Promise<void> {

        await this.transferFundsMenuLink.click();

        await this.verifyTransferFundsPage();

    }

    // ==========================================
    // Input Methods
    // ==========================================

    public async enterAmount(amount: string): Promise<void> {

        await this.amountInput.fill(amount);

    }

    public async selectFromAccount(index = 0): Promise<void> {

        await this.fromAccountDropdown.selectOption({
            index
        });

    }

    public async selectToAccount(index = 1): Promise<void> {

        await this.toAccountDropdown.selectOption({
            index
        });

    }

    // ==========================================
    // Action Methods
    // ==========================================

    public async clickTransfer(): Promise<void> {

        await expect(this.transferButton).toBeVisible();

        await expect(this.transferButton).toBeEnabled();

        await this.transferButton.click();

        await this.page.waitForLoadState('networkidle');

    }

    public async transferFunds(
        amount: string
    ): Promise<void> {

        await this.selectFromAccount();

        await this.selectToAccount();

        await this.enterAmount(amount);

        await this.clickTransfer();

    }

    // ==========================================
    // Verification Methods
    // ==========================================

    public async verifyTransferFundsPage(): Promise<void> {

        await expect(this.transferFundsTitle).toBeVisible();

        await expect(this.amountInput).toBeVisible();

        await expect(this.fromAccountDropdown).toBeVisible();

        await expect(this.toAccountDropdown).toBeVisible();

        await expect(this.transferButton).toBeVisible();

    }

    public async verifyTransferSuccessful(): Promise<void> {

        await expect(this.transferCompleteTitle).toBeVisible();

    }

    public async verifyTransferRejected(): Promise<void> {

        // Application should remain on Transfer Funds page
        await expect(this.transferFundsTitle).toBeVisible();

        // Transfer Complete page must never be shown
        await expect(this.transferCompleteTitle).not.toBeVisible();

    }

    public async verifyInternalServerError(): Promise<void> {

        await expect(this.internalErrorMessage).toBeVisible();

    }

    public async verifyTransferConfirmationMessage(
        amount: string
    ): Promise<void> {

        await expect(this.transferCompleteTitle)
            .toBeVisible();

        await expect(this.transferConfirmationMessage)
            .toContainText(
                new RegExp(
                    `\\$${amount}\\.00 has been transferred from account #\\d+ to account #\\d+\\.`
                )
            );

    }

}