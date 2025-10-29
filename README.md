1) Project setup instructions :
    -> Clone the repository:
        git clone https://github.com/Vaishnavi213460/Supreme-Group-Frontend.git
        cd Supreme-Group-Frontend

    -> Install dependencies:
        npm install 

    -> Run the development server:
         npm run dev

2) Component architecture overview: 

    a. Navbar
        Functionality: The primary navigation bar for the application.
        Key Features: Displays the Supreme Group logo.

    b. HeroSection
        Functionality: The main landing visual for the application.
        Key Features: Features a background image with text centered for an impactful first impression.

    c. VehicleSection
        Functionality: An interactive showcase for different vehicle categories and parts.
        Key Features: Implements Mobile Swipe Gestures for navigation, uses the IntersectionObserver for scroll-triggered animations, and handles category switching.

    d. ContactSection
        Functionality: A form for user inquiries and display of contact details.
        Key Features: Features a minimalist design with placeholder-only inputs and includes logic for custom form validation.

    e. Footer
        Functionality: The bottom section of the page.
        Key Features: Contains copyright information and regulatory links.

3) Responsive design strategy: 
    Built the entire project with a mobile-first approach, meaning it looks and works great on phones before we optimized it for desktops.

    Smart Layouts: Used a tool called Tailwind CSS to make the content automatically rearrange itself. For example, on a phone, the form fields stack up neatly, but on a desktop, they spread out side-by-side.

    Intuitive Vehicle Controls:

        On Desktops: You'll see the full set of icons and the play/pause button below the video.

        On Phones: The screen minimal by hiding the icons. You simply swipe left or right on the video itself to switch between vehicle sections.

4) Performance optimization techniques employed:

    Focused on techniques to make the site feel fast and smooth, even with videos and animations.

    Smart Loading (Lazy Loading): We don't load everything at once. Complex parts of the site, like the video player, only start loading and animating when you scroll down and they come into view. This makes the initial page load much faster.

    Smooth Animations: All animations (like the text sliding away) use modern CSS features (transform) that rely on your computer's graphics card (GPU). This ensures animations are jerk-free and buttery smooth.

    Video Reliability: The videos are set to automatically play silently (muted and playsInline) in a loop. This ensures they load and start immediately without requiring a user tap, while also following browser rules.

5) Accessibility considerations:

    Form Helpfulness: Even though the contact form looks minimal (we hide the labels to keep it clean), we show clear error messages as soon as you submit, guiding you on what needs fixing.

    Standard Tools Only: Relied only on React's built-in tools (Hooks) for logic and state management.

    No Heavy External Libraries: Avoided installing third-party icon packages. Instead, we used simple, built-in code (inline SVGs) for the play/pause button. This keeps the project lightweight and prevents technical build errors.

6) Explanation of any third-party libraries used: 
    React Hooks: (useState, useEffect, useRef) for essential state and lifecycle management.

7) Assumptions made and decisions taken during the implementation process: 

    Form Looks: Went with a minimalist look for the contact form, using placeholder text instead of standard labels. This makes the design cleaner but still provides information about what goes in each field.

    Default View: The project starts by showing the Passenger Vehicle view because that was featured in the initial design reference.

    Video Behavior: Videos are set to automatically play silently (muted and loop). This is to ensure a smooth, animated background without surprising the user with sound, and it helps the video start reliably on all devices.

8) Challenges faced and potential solutions: 
    a. Challenge: Mobile Video Autoplay

        Most browsers block videos from playing automatically if they have sound.

        Solution: Added the muted and playsInline attributes. This ensures the videos reliably start playing immediately as an animation when the section loads.

    b. Challenge: Slow Video Switching

        When switching sections in the VehicleSection, there could be a slight delay as the new video loads.

        Solution: Used the key prop on the video player. This forces React to instantly reset and load the new video, making the transition feel much faster.

    c. Challenge: Complex Mobile Navigation

        It had to create custom logic to make the video swipe function correctly on phones.

        Solution: Implemented custom touch handlers (onTouchStart, onTouchEnd) to accurately calculate the distance and direction of the swipe, making navigation smooth and intuitive.

9) Suggested upcoming features and improvements: 

    Pre-loading: Implement background loading for video assets in the VehicleSection to ensure zero delay when switching sections.

    Form Validation: Implement real-time, per-field validation in the ContactSection.
