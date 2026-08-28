import { test, expect } from '@playwright/test';

test('Bài 3 - Todo List', async ({ page }) => {

    // 1. Truy cập trang
    await page.goto('https://material.playwrightvn.com/');

    // 2. Click Bài học 3
    await page.getByText('Bài học 3: Todo page').click();

    // 3. Locator
    const todoInput = page.locator('//input[@id="new-task"]');
    const addButton = page.getByRole('button', { name: 'Add Task' });

    // 4. Thêm 100 Todo
    for (let i = 1; i <= 100; i++) {
        await todoInput.fill(`Todo ${i}`);
        await addButton.click();
    }

    // 5. Xóa các Todo có số lẻ
    for (let i = 99; i >= 1; i -= 2) {

        // Xử lý dialog xác nhận Delete
        page.once('dialog', async dialog => {
            console.log('Dialog:', dialog.message());
            await dialog.accept();
        });

        // ID thực tế: todo-99-delete, todo-97-delete, ...
        await page.locator(`//button[@id='todo-${i}-delete']`).click();
    }

    // 6. Verify còn lại 50 Todo
    await expect(page.locator('#task-list li')).toHaveCount(50);
    await page.pause();
});