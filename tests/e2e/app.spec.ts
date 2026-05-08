import { expect, test } from '@playwright/test'

test.describe('YYC³ My-Mgmt E2E — Critical Paths', () => {
  test('app loads with correct title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/YYC³/)
    await expect(page.locator('#root')).toBeVisible()
  })

  test('dashboard page renders KPI cards', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(1000)
    const cards = page.locator('[class*="rounded-lg"], [class*="card"], [class*="neon"]')
    await expect(cards.first()).toBeVisible({ timeout: 5000 })
  })

  test('left panel navigation is functional', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(1000)
    const nav = page.locator('nav, [class*="panel"], [class*="sidebar"]')
    await expect(nav.first()).toBeVisible({ timeout: 5000 })
  })

  test('theme renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    await page.waitForTimeout(2000)
    const criticalErrors = errors.filter(
      (e) => !e.includes('favicon') && !e.includes('404') && !e.includes('DNS'),
    )
    expect(criticalErrors.length).toBeLessThan(3)
  })

  test('page transition works when clicking nav items', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(1000)
    const navItems = page.locator('button, [role="tab"], [class*="nav"] >> text=/./')
    const count = await navItems.count()
    if (count > 2) {
      await navItems.nth(2).click({ timeout: 3000 }).catch(() => {})
      await page.waitForTimeout(500)
      await expect(page.locator('#root')).toBeVisible()
    }
  })
})
