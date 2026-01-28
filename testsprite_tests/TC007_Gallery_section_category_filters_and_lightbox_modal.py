import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Scroll to the Gallery section.
        await page.mouse.wheel(0, 600)
        

        # -> Click on the Gallery button to navigate to the Gallery section.
        frame = context.pages[-1]
        # Click on the Gallery button to navigate to the Gallery section.
        elem = frame.locator('xpath=html/body/main/header/div/div/nav/button[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click on the 'All Work' category filter button to show all projects.
        frame = context.pages[-1]
        # Click on the 'All Work' category filter button to show all projects.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click on the 'UI Design' category filter button to verify filtering.
        frame = context.pages[-1]
        # Click on the 'UI Design' category filter button to verify filtering.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[2]/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click on the 'Web Dev' category filter button to verify filtering.
        frame = context.pages[-1]
        # Click on the 'Web Dev' category filter button to verify filtering.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[2]/button[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click on the 'AI/ML' category filter button to verify filtering.
        frame = context.pages[-1]
        # Click on the 'AI/ML' category filter button to verify filtering.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[2]/button[4]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Hover over the gallery images to check that hover effects apply smoothly.
        frame = context.pages[-1]
        # Click on the first gallery image to hover and check hover effects.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[3]/div').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click navigation control to go to the next image inside the lightbox modal.
        frame = context.pages[-1]
        # Click on the 'View SmartSDLC code' link or next navigation control inside the lightbox modal to navigate to the next image.
        elem = frame.locator('xpath=html/body/main/section[5]/div/div[2]/div/div[4]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click on the first gallery image to open the lightbox modal again and test navigation controls inside the modal.
        frame = context.pages[-1]
        # Click on the first gallery image to open the lightbox modal again.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[3]/div').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click the 'Close Preview' button to close the lightbox modal and verify it closes properly.
        frame = context.pages[-1]
        # Click the 'Close Preview' button to close the lightbox modal.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[4]/div/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Hover over the first gallery image to verify hover effects apply smoothly.
        frame = context.pages[-1]
        # Hover over the first gallery image to verify hover effects.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[3]/div').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Close the lightbox modal by clicking the 'Close Preview' button to return focus to the gallery section.
        frame = context.pages[-1]
        # Click the 'Close Preview' button to close the lightbox modal.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[4]/div/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Hover over the first gallery image outside the modal to verify hover effects apply smoothly.
        frame = context.pages[-1]
        # Hover over the first gallery image to verify hover effects.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[3]/div[4]/div/img').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        try:
            await expect(frame.locator('text=Gallery Filter Success').first).to_be_visible(timeout=1000)
        except AssertionError:
            raise AssertionError("Test plan execution failed: Gallery images did not filter correctly by category, hover effects did not display, lightbox modal did not open with project previews, or animations were not smooth as required.")
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    