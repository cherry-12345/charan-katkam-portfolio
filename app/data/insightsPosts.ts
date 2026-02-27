export type InsightPost = {
  slug: string
  title: string
  excerpt: string
  readTime: string
  publishedOn: string
  highlights: string[]
  body: string[]
}

export const insightPosts: InsightPost[] = [
  {
    slug: 'how-i-built-smartsdlc-with-ibm-granite-ai',
    title: 'How I Built SmartSDLC with IBM Granite AI',
    excerpt:
      'A practical breakdown of requirement classification, code generation, bug fixing, test creation, and summarization in one Gradio workflow.',
    readTime: '6 min read',
    publishedOn: '2026-02-22',
    highlights: [
      'Designed a 6-module workflow in Gradio for requirement analysis to developer-ready output.',
      'Reached 95%+ requirement classification accuracy in PDF-driven validation runs.',
      'Reduced manual QA effort by around 60% by generating first-pass pytest cases.',
    ],
    body: [
      'SmartSDLC started as a capstone challenge: convert requirement-heavy documents into usable engineering outputs without wasting developer cycles. I built the workflow around IBM Granite prompts and lightweight Gradio screens so each module could be tested independently and improved quickly.',
      'The system follows a simple sequence. First, requirement text is extracted and classified. Then code generation and bug-fix modules provide implementation support. Finally, the test generator and summarizer create review artifacts so developers can move faster without skipping quality checks.',
      'The biggest win was consistency. Instead of manually writing test scaffolding every time, the generator produces first-pass pytest cases in seconds. This brought QA preparation effort down by roughly 60 percent in repeated usage trials and helped me standardize output quality across modules.',
      'If I continue this project for production usage, the next step is deployment on Hugging Face Spaces with a tighter prompt versioning workflow so model updates remain traceable.',
    ],
  },
  {
    slug: 'what-i-learned-building-an-ecommerce-platform',
    title: 'What I Learned Building an E-commerce Platform from Scratch',
    excerpt:
      'Architecture and UX lessons from shipping a catalog-first e-commerce app with filtering, checkout, and payment integration.',
    readTime: '5 min read',
    publishedOn: '2026-02-21',
    highlights: [
      'Structured product browsing for 100+ SKUs with category and price filtering.',
      'Maintained sub-2 second load time on critical product discovery paths.',
      'Integrated secure checkout and payment flow with clear order progression.',
    ],
    body: [
      'Building AJ Abhi Jewels taught me that e-commerce success depends on navigation speed more than visual effects. Users must find products quickly, understand pricing instantly, and complete checkout without friction.',
      'I focused on performance-sensitive paths first: listing pages, filters, product detail transitions, and cart updates. By optimizing these interactions and keeping component structure clean, I held page interaction times near sub-2 second targets across common flows.',
      'Payment integration added a separate layer of complexity. I treated checkout as a reliability feature, not just a UI screen, and validated each stage from cart state to payment confirmation. This reduced broken flows and made the platform usable for daily catalog browsing.',
      'The most important lesson was to measure every path that impacts trust: load time, checkout clarity, and order visibility. Those factors matter more to users than design polish alone.',
    ],
  },
  {
    slug: 'air-cursor-gesture-control-lessons',
    title: 'From Webcam Gestures to Cursor Control: Air Cursor Notes',
    excerpt:
      'Lessons from real-time hand landmark detection, gesture mapping, smoothing, and usability tradeoffs in computer vision UX.',
    readTime: '4 min read',
    publishedOn: '2026-02-20',
    highlights: [
      'Implemented real-time hand landmark tracking with MediaPipe and OpenCV.',
      'Mapped gesture states to cursor movement, drawing, and erase actions.',
      'Improved stability with smoothing logic to reduce jitter in pointer control.',
    ],
    body: [
      'Air Cursor was built to test whether natural hand motion can replace traditional pointer input for short interaction tasks. The project uses webcam input, MediaPipe landmarks, and a gesture mapping layer that converts hand states into cursor events.',
      'The hardest part was not detection accuracy. It was interaction stability. Raw landmark data is noisy, so the cursor can jitter even when gestures are correct. I added smoothing behavior and threshold checks to keep pointer movement usable for drawing and navigation.',
      'I also learned that gesture systems need explicit state transitions. Without clear enter and exit rules, commands like click, draw, and erase can conflict. Defining those states made the overall experience more predictable.',
      'The next milestone is recording a concise walkthrough video that demonstrates tracking accuracy, mode switching, and real cursor interaction in one clip.',
    ],
  },
]

export const insightPostBySlug = (slug: string) =>
  insightPosts.find((post) => post.slug === slug)
