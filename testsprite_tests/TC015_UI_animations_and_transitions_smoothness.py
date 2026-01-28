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
        # -> Observe avatar animation, quick facts, badges, gallery, and project transitions on page load for smoothness.
        await page.mouse.wheel(0, 600)
        

        # -> Observe quick facts, badges, gallery, and project transitions on page load for smoothness.
        await page.mouse.wheel(0, 800)
        

        # -> Observe gallery and project transitions on page load for smoothness.
        await page.mouse.wheel(0, 800)
        

        # -> Interact with UI elements triggering animations (hover effects, lightbox opens/closes, theme toggle transitions).
        await page.mouse.wheel(0, -600)
        

        frame = context.pages[-1]
        # Click Gallery button to trigger gallery animations
        elem = frame.locator('xpath=html/body/main/header/div/div/nav/button[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Trigger hover effects on project cards and observe animations for smoothness.
        await page.mouse.wheel(0, 300)
        

        frame = context.pages[-1]
        # Hover or click on SmartSDLC Dashboard project card to trigger hover animation
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[3]/div[5]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click Close Preview button to close lightbox and observe animation for smoothness.
        frame = context.pages[-1]
        # Click Close Preview button to close lightbox
        elem = frame.locator('xpath=html/body/main/section[4]/div/div[4]/div/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Test hover effects on other UI elements such as buttons and badges for smooth transitions.
        await page.mouse.wheel(0, -1000)
        

        # -> Click the Toggle theme button to observe theme toggle transitions for smoothness.
        frame = context.pages[-1]
        # Click Toggle theme button to observe theme toggle transition
        elem = frame.locator('xpath=html/body/main/header/div/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Perform a final overall check of animations and transitions during various user interactions to ensure consistency and smoothness.
        await page.mouse.wheel(0, -1000)
        

        await page.mouse.wheel(0, 1000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Charan Katkam').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Full Stack Developer | AI & Frontend').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Building intelligent, fast, and user-focused web experiences with modern technologies and AI integration.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About Me').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=I\'m a passionate Full Stack Developer with a strong focus on AI integration and modern web technologies. Currently pursuing my B.Tech in Computer Science Engineering at Sreenidhi Institute of Science and Technology, I combine academic knowledge with practical experience to create innovative solutions.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=My expertise spans across frontend frameworks like React and Next.js, backend technologies, and AI/ML implementations. I enjoy building user-centric applications that solve real-world problems while maintaining clean, efficient code and exceptional user experiences.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Location').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hyderabad, India').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Skills & Technologies').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Frontend').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=HTML').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CSS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=JavaScript').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Next.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tailwind CSS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TypeScript').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI / ML').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Python').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TensorFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Scikit-learn').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Pandas').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=NumPy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OpenCV').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Prompt Engineering').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Backend & Tools').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Node.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MySQL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Git').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GitHub').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=VS Code').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Jupyter').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=REST APIs').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Additional Expertise').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Responsive Design').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=API Integration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Database Design').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Version Control').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Agile Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Problem Solving').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Team Collaboration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Continuous Learning').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Interactive Gallery').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Explore my work through interactive previews and detailed project insights').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=All Work').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=UI Design').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Web Dev').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI/ML').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SmartSDLC Dashboard').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-powered project management interface').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Dashboard').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=E-commerce Platform').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Modern jewelry store interface').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Next.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=E-commerce').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Responsive').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hand Gesture Recognition').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Computer vision for air cursor control').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Python').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OpenCV').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ML').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Music Streaming UI').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Modern music player interface').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Audio').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Streaming').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI Workflow Diagram').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Machine learning pipeline visualization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TensorFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Data Science').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Visualization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Code Architecture').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Clean code structure and patterns').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Architecture').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Clean Code').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Patterns').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Featured Projects').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A showcase of my technical expertise and problem-solving capabilities across various domains').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SmartSDLC').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=In Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-Enhanced Software Development Lifecycle platform that streamlines project management with intelligent automation, real-time collaboration, and predictive analytics.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Key Features:').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-powered insights').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Task automation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Team collaboration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Progress tracking').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Technologies:').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Node.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Express').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Gemini AI').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=JWT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=View Code').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Live Demo').first).to_be_visible(timeout=30000)
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
        await expect(frame.locator('text=View Code').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Live Demo').first).to_be_visible(timeout=30000)
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
        await expect(frame.locator('text=View Code').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Live Demo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Music Streaming Website').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Completed').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Full-featured music streaming platform with playlist management, audio controls, and modern user interface design.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Audio streaming').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Playlist creation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Search functionality').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Responsive UI').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Technologies:').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=HTML').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CSS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=JavaScript').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Web Audio API').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=View Code').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Live Demo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Want to see more of my work?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=View All Projects on GitHub').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Let\'s Connect').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ready to collaborate on your next project? Let\'s discuss how we can build something amazing together.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get In Touch').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=I\'m always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation. Feel free to reach out!').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Email').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=charankatkam@gmail.com').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LinkedIn').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=linkedin.com/in/charan-katkam').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GitHub').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=github.com/cherry-12345').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Location').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hyderabad, India').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Download My Resume').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get a detailed overview of my experience, skills, and achievements.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Download Resume').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Send a Message').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Your Name').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Email Address').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Message').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Send Message').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Charan Katkam').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Full Stack Developer passionate about creating intelligent, user-focused web experiences with modern technologies and AI integration.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Quick Links').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Skills').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Projects').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get In Touch').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=charankatkam@gmail.com').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hyderabad, India').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=B.Tech CSE Student').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Download Resume').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2026 Charan Katkam. All rights reserved.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Built with Next.js, TypeScript & Tailwind CSS').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    