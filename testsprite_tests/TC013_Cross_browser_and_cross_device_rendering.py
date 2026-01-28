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
        # -> Open the website on Firefox browser to verify rendering and functionality.
        await page.goto('about:blank', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Open the website on Firefox browser at http://localhost:3000 to verify rendering and functionality.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Open the website on Safari browser to verify rendering and functionality.
        await page.goto('about:blank', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Navigate to the website URL on Safari browser to verify rendering and functionality.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Open the website on Edge browser to verify rendering and functionality.
        await page.goto('about:blank', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Navigate to the website URL on Edge browser to verify rendering and functionality.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Access the website on various mobile devices and screen sizes to verify responsiveness, menu toggling, touch interactions, and animations.
        await page.goto('about:blank', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Navigate to the website URL on a mobile device emulator or real device with a small screen size to verify responsiveness and UI behavior.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Verify responsiveness, menu toggling, touch interactions, and animations on the current mobile device emulator.
        frame = context.pages[-1]
        # Click Toggle theme button to test UI component interaction on mobile.
        elem = frame.locator('xpath=html/body/main/header/div/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Test menu toggling, touch interactions, and animations on the current mobile device emulator.
        frame = context.pages[-1]
        # Click 'About' button to test navigation and menu toggling on mobile.
        elem = frame.locator('xpath=html/body/main/header/div/div/nav/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Scroll down to verify the Skills & Technologies section and other UI components render properly on the current mobile device emulator.
        await page.mouse.wheel(0, 600)
        

        # -> Scroll down further to verify the Interactive Gallery section and other UI components render properly on the current mobile device emulator.
        await page.mouse.wheel(0, 600)
        

        # -> Test the category filter buttons in the Interactive Gallery section to verify filtering functionality on the current mobile device emulator.
        frame = context.pages[-1]
        # Click 'All Work' filter button in Interactive Gallery to test filtering functionality.
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Scroll down to verify the Contact section and test the contact form functionality on the current mobile device emulator.
        await page.mouse.wheel(0, 600)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Charan Katkam').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Full Stack Developer | AI & Frontend').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hyderabad, India').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI + Full Stack').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=English, Telugu, Hindi').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=HTML').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CSS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=JavaScript').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Next.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tailwind CSS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TypeScript').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Python').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TensorFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Scikit-learn').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Pandas').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=NumPy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OpenCV').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Prompt Engineering').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Node.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MySQL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Git').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GitHub').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=VS Code').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Jupyter').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=REST APIs').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Responsive Design').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=API Integration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Database Design').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Version Control').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Agile Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Problem Solving').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Team Collaboration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Continuous Learning').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SmartSDLC').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=In Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-Enhanced Software Development Lifecycle platform that streamlines project management with intelligent automation, real-time collaboration, and predictive analytics.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-powered insights').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Task automation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Team collaboration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Progress tracking').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Node.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Express').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Gemini AI').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=JWT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AJ Abhi Jewels').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Completed').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Full-stack e-commerce platform for jewelry retail featuring product catalog, shopping cart, secure checkout, and responsive design.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Product catalog').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Shopping cart').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=User authentication').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Order management').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Node.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Express').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MongoDB').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Razorpay').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=JWT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Air Cursor Using Hand Gestures').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Completed').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Computer vision application enabling touchless cursor control through real-time hand gesture recognition using OpenCV and MediaPipe.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hand tracking').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Gesture recognition').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cursor control').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Click detection').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Python').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OpenCV').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MediaPipe').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=NumPy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=PyAutoGUI').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Music Streaming Website').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Completed').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Full-featured music streaming platform with playlist management, audio controls, and modern user interface design.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Audio streaming').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Playlist creation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Search functionality').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Responsive UI').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=All Work').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=UI Design').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Web Dev').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI/ML').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=charankatkam@gmail.com').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=linkedin.com/in/charan-katkam').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=github.com/cherry-12345').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Download Resume').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2026 Charan Katkam. All rights reserved.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    