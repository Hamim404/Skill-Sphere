# SkillSphere

## Purpose
SkillSphere is a modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.

## Live URL
http://localhost:3000

## Key Features
- Modern, premium dark UI with an animated orbit hero section
- Fully responsive on mobile, tablet, and desktop
- Persistent Navbar and Footer on every page
- Navbar changes with auth state (avatar and logout when logged in, login and register when logged out)
- Home page with Hero, Popular Courses, Learning Tips, Trending Courses, and Top Instructors
- All Courses page with search by title
- Protected Course Details page (redirects to login, then back after login)
- Authentication with email and password and Google login (Better Auth)
- User Registration with name, email, photo URL, and password
- My Profile page showing logged-in user data
- Toast notifications for success and error messages
- Loader while data is fetching
- Custom 404 Not Found page
- FAQ, Terms & Conditions, and Privacy Policy pages
- No crashes on reload from any route

## Routes
| Route | Description |
|---|---|
| `/` | Home |
| `/courses` | All courses |
| `/courses/[id]` | Course details (protected) |
| `/login` | Login |
| `/register` | Register |
| `/profile` | Logged-in user profile |
| `/faq` | Frequently asked questions |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |

## Tech Stack
- Next.js (App Router, JavaScript)
- Tailwind CSS
- HeroUI
- Better Auth
- MongoDB

## NPM Packages Used
- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `@tailwindcss/postcss`
- `@heroui/react`
- `framer-motion`
- `lucide-react`
- `react-icons`
- `react-hook-form`
- `better-auth`
- `mongodb`

## Getting Started

1. Clone the repository
```bash
git clone <your-repo-url>
cd skillsphere
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file in the project root
```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server
```bash
npm run dev
```

5. Open http://localhost:3000

## Environment Variables
All secret keys are stored in environment variables and are never committed to GitHub. Make sure `.env*` is listed in `.gitignore`.

## Project Structure
```
src/
  app/            Routes (App Router)
  components/     Reusable UI components
  data/           Static course data (courses.json)
```