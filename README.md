### READ ME
--- Project Phase 2 --- 
This project focuses on optimizing code, implementing responsive navigation, and ensuring proper routing. The application is built with Next.js and integrates Directus as a headless CMS.

🚀 Live Demo
- [Phase 2](https://phase-2-webapp.vercel.app/)

## TO INSTALL
- install dependencies (npm install)
- install directus/sdk (npm install @directus/sdk)
- install prop-types used in navbar (npm install prop-types)
- You will need a .env.local file for this project to run
- npm run dev (The app should now be running at http://localhost:3000)

## GOALS
- [DONE] Code optimization
  - [DONE] CSS Refactoring: Ensure styles do not conflict (organized into separate files if necessary)
  - [DONE] Create a reusable components
      - [DONE] Button
      - [DONE] Input Form
      - [DONE] Form Container
  - [DONE] Navigation updates
      - Hide "Login" and "Signup" in navbar when user is in the dashboard.
- [DONE] Create a separate header component (NAVBAR)
- [DONE] Create a separate footer component
- [DONE] Add regex pattern for input fields
- [DONE] Routing Implementation
    - [DONE] Route 1 - Archive Page
    - [DONE] Route 2 - About Page
 
- Modularization:
  - [DONE] Review code to plan for DRY high level (layouts)
  - [DONE] Outline and build components (minimal styles, focus on functionality)
  - [DONE] Style content and make it responsive

## Debugging Notes
✅ Fixed Issues:
1. **Button was not submitting**  
   **Cause:** `type="submit"` was missing.  
   **Solution:** Added `type="submit"` to the button element.  

2. **Error pushing commits to GitHub**  
   **Cause:** Image file was too large.  
   **Solution:** Resized the image before committing.  

3. **Button hydration issue**  
   **Cause:** Missing `prop-types` dependency.  
   **Solution:** Installed `prop-types`.  

4. **Navbar links were broken**  
   **Cause:** Incorrect rendering logic.  
   **Solution:** Fixed link rendering per page.  

5. **NavLinks breaking at screen width < 600px**  
   **Cause:** Responsive styling issue.  
   **Solution:** Implemented a burger menu for smaller screens.  

## DELEGATION OF WORK
- [Alyanna] - in charge of optimizing the code
- [Marshall] - in charge of making sure the first routing works (About Page)
- [Jahswill] - in charge of making sure the 2nd routing works (Archives)
  # Online Collaborative Tool - Figjam 
   - [Figjam Link for Code Optimization](https://www.figma.com/board/oQ1lZgnoHZz4e9IKuRaffA/Code-Optimization?node-id=0-1&p=f&t=8z4ZLF5FhIWlmSUF-0)
   - [Figjam Link for Code Learning as a Group](https://www.figma.com/board/KR0hROzfDr24U9GGr3UCSZ/Phase-2?node-id=0-1&p=f&t=w8Y2uD2SwzFrHsb4-0)

## RESOURCES
- [Deploy Directus on Render.com](https://blog.jamin.sh/how-to-deploy-directus-to-rendercom)
- [Directus Authentication in Next JS](https://directus.io/docs/tutorials/getting-started/using-authentication-in-next-js)
- [Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [PropTypes](https://nextjs.org/learn/react-foundations/displaying-data-with-props)
- [Passing Props](https://react.dev/learn/passing-props-to-a-component)
- [Understanding Regular Expression - Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)