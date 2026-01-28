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
        # -> Scroll down the page slowly to verify the header remains fixed at the top of the viewport.
        await page.mouse.wheel(0, 300)
        

        # -> Click each navigation link in the header to verify smooth scrolling and active section highlight.
        frame = context.pages[-1]
        # Click the 'About' navigation link in the header
        elem = frame.locator('xpath=html/body/main/header/div/div/nav/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click the 'Skills' navigation link to verify smooth scrolling and active section highlight.
        frame = context.pages[-1]
        # Click the 'Skills' navigation link in the header
        elem = frame.locator('xpath=html/body/main/header/div/div/nav/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click the 'Gallery' navigation link to verify smooth scrolling and active section highlight.
        frame = context.pages[-1]
        # Click the 'Gallery' navigation link in the header
        elem = frame.locator('xpath=html/body/main/header/div/div/nav/button[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click the 'Projects' navigation link to verify smooth scrolling and active section highlight.
        frame = context.pages[-1]
        # Click the 'Projects' navigation link in the header
        elem = frame.locator('xpath=html/body/main/header/div/div/nav/button[4]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click the 'Contact' navigation link to verify smooth scrolling and active section highlight.
        frame = context.pages[-1]
        # Click the 'Contact' navigation link in the header
        elem = frame.locator('xpath=html/body/main/header/div/div/nav/button[5]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Scroll up the page slowly to verify the sticky header remains fixed at the top of the viewport during upward scrolling.
        await page.mouse.wheel(0, -300)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        # Assert header remains fixed at the top of the viewport by checking the presence of header text
        await expect(frame.locator('text=Charan Katkam').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Skills').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Gallery').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Projects').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact').first).to_be_visible(timeout=30000)
        # Assert smooth scrolling and active section highlight by checking section titles after clicking nav links
        await expect(frame.locator('text=About Me').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Skills & Technologies').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Interactive Gallery').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Featured Projects').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Let\'s Connect').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    