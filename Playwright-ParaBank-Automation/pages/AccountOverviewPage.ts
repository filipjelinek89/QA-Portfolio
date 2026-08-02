import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountOverviewPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // ==========================================
    // Locators
    // ==========================================

    private readonly accountsOverviewTitle =
        this.page.getByRole('heading', { name: 'Accounts Overview' });

    private readonly accountColumn =
        this.page.getByRole('columnheader', { name: 'Account' });

    private readonly balanceColumn =
        this.page.getByRole('columnheader', { name: 'Balance*' });

    private readonly availableAmountColumn =
        this.page.getByRole('columnheader', { name: 'Available Amount' });

    private readonly firstAccountLink =
        this.page.locator('a[href*="activity.htm?id="]').first();

    private readonly accountLinks =
        this.page.locator('a[href*="activity.htm?id="]');

    private readonly logoutLink =
        this.page.getByRole('link', { name: 'Log Out' });

    private readonly firstAccountBalance =
        this.page.locator('#accountTable tbody tr').first().locator('td').nth(1);

    // NEW
    private readonly secondAccountBalance =
        this.page.locator('#accountTable tbody tr').nth(1).locator('td').nth(1);

    private readonly firstAvailableAmount =
        this.page.locator('#accountTable tbody tr').first().locator('td').nth(2);

    private readonly accountDetailsTitle =
        this.page.getByRole('heading', { name: 'Account Details' });

    private readonly accountActivityTitle =
        this.page.getByRole('heading', { name: 'Account Activity' });

    private readonly activityPeriodDropdown =
        this.page.locator('#month');

    private readonly transactionTypeDropdown =
        this.page.locator('#transactionType');

    private readonly goButton =
        this.page.locator('input[value="Go"]');

    private readonly accountTable =
        this.page.locator('#accountTable');

    // ==========================================
    // Verification Methods
    // ==========================================

    public async verifyAccountOverviewPage(): Promise<void> {

        await expect(this.accountsOverviewTitle).toBeVisible();

        await expect(this.logoutLink).toBeVisible();

        await expect(this.page).toHaveURL(/overview\.htm/);

    }

    public async verifyAccountTable(): Promise<void> {

        await expect(this.accountColumn).toBeVisible();

        await expect(this.balanceColumn).toBeVisible();

        await expect(this.availableAmountColumn).toBeVisible();

    }

    public async verifyAccountInformation(): Promise<void> {

        await expect(this.firstAccountLink).toBeVisible();

        await expect(this.firstAccountBalance).toBeVisible();

        await expect(this.firstAvailableAmount).toBeVisible();

    }

    public async verifyAccountDetailsPage(): Promise<void> {

        await expect(this.accountDetailsTitle).toBeVisible();

        await expect(this.page).toHaveURL(/activity\.htm/);

    }

    public async verifyTransactionHistory(): Promise<void> {

        await expect(this.accountActivityTitle).toBeVisible();

        await expect(this.activityPeriodDropdown).toBeVisible();

        await expect(this.transactionTypeDropdown).toBeVisible();

        await expect(this.goButton).toBeVisible();

    }

    public async verifyMultipleAccountsAreDisplayed(): Promise<void> {

        await expect(this.accountTable).toBeVisible();

        await expect(async () => {

            const accountCount = await this.accountLinks.count();

            console.log(`Number of accounts: ${accountCount}`);

            expect(accountCount).toBeGreaterThan(1);

        }).toPass({
            timeout: 10000
        });

    }

    // ==========================================
    // Actions
    // ==========================================

    public async openFirstAccount(): Promise<void> {

        await this.firstAccountLink.click();

    }

    public async refreshPage(): Promise<void> {

        await this.page.reload();

    }

    // ==========================================
    // Navigation
    // ==========================================

    public async navigateToAccountOverviewPage(): Promise<void> {

        await this.page.goto('/parabank/overview.htm');

        await expect(this.accountsOverviewTitle).toBeVisible();

        await expect(this.accountTable).toBeVisible();

    }

    // ==========================================
    // Helper
    // ==========================================

    public async verifyAccountExists(accountNumber: string): Promise<void> {

        await expect(
            this.page.getByRole('link', { name: accountNumber })
        ).toBeVisible();

    }

    public async verifyAccountBalance(expectedBalance: string): Promise<void> {

        await expect(this.page.locator('#balance')).toHaveText(expectedBalance);

    }

    public async getFirstAccountBalance(): Promise<string> {

        const balance =
            await this.firstAccountBalance.textContent();

        return balance
            ?.replace('$', '')
            .replace(',', '')
            .trim() ?? '0';

    }

    // NEW
    public async getSecondAccountBalance(): Promise<string> {

        const balance =
            await this.secondAccountBalance.textContent();

        return balance
            ?.replace('$', '')
            .replace(',', '')
            .trim() ?? '0';

    }

    // NEW
    public parseBalance(balance: string): number {

        return parseFloat(balance);

    }

}