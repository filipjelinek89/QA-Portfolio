import { Page, expect } from '@playwright/test';

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ==========================================
    // Navigation Methods
    // ==========================================

    public async goto(url: string): Promise<void> {

        await this.page.goto(url, {
            waitUntil: 'domcontentloaded'
        });

    }

    public async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    public getCurrentUrl(): string {
        return this.page.url();
    }

    // ==========================================
    // Validation Methods
    // ==========================================

    public async verifyUrlContains(url: string): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(url));
    }

}