<div align="center">
  <br />
    <a href="https://uniport.vercel.app/" target="_blank">
      <img src="https://github.com/iAryanK/Uniport/blob/main/app/opengraph-image.png?raw=true" alt="Project Banner">
    </a>
  <br />

  <h3 align="center">Visit the website <a href="https://uniport.vercel.app/" target="_blank"><b>Uniport</b></a> and seamlessly access various AI tools at one place!</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Details](#details)

## <a name="introduction">🤖 Introduction</a>

This Next JS full Stack application is my university project work that I with my teammates accomplished in sixth semester of my degree of Bachelor of Technology.
Uniport serves as a single port where users can seamlessly access and utilize different AI functionalities to enhance their workflows and creative endeavors, hence the name Uniport.

The project leverages cutting-edge technologies such as Next.js 14 for both backend and frontend development, React for dynamic user interfaces, Tailwind CSS for sleek and responsive design, and Prisma for seamless connectivity with a MySQL database hosted on Aiven.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.JS 14
- Typescript
- MySQL database with Prisma
- Clerk Authentication
- Tailwind CSS , Aceternity UI

## <a name="features">🔋 Features</a>

👉 **Clerk Authentication System**

- Implement Clerk authentication system for secure user authentication.
- Allow users to sign in using their Google accounts.

👉 **Sidebar and Navigation**

- Develop a sidebar component to facilitate navigation between different sections of the application.

👉 **Dashboard UI**

- Present users with a glimpse of each AI tool's functionality and purpose.

👉 **AI Tools UI and Functionality**

- Implemented functionality for each AI tool, such as conversation, image generation, music composition, video generation, code generation and Google Gemini.
- Ensure seamless integration with APIs from Gemini, OpenAI and Replicate AI for generating responses based on user input.

👉 **API Limit Tracking**

- Display API usage statistics and inform users about their remaining free trials.

👉 **Pro Access and Payment Integration**

- Integrate Stripe payment system to enable users to subscribe for unlimited access to AI tools.

👉 **Customer Support Chatbot Integration**

- Incorporated Crisp chatbot service to provide users with customer support and assistance.

👉 **Landing Page for Uniport**

- A simple landing page, created using Aceternity UI where the user can get an introduction about the application.
- Users can create their account on Uniport by visiting the Landing page.

The list continues with addition of new AI tools that are roaring in the market as we explore this super responsive application.

Want to add an AI to Uniport? Feel free to contribute to this open source project by following the quick start guide below.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/iAryanK/Uniport.git
cd Uniport
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
GEMINI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
STRIPE_API_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Clerk](https://clerk.com/), [OpenAI](https://openai.com/), [Gemini](https://gemini.google.com/app), [Replicate](https://replicate.com/), [Aiven](https://aiven.io/) and [Stripe](https://stripe.com/in).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="details">🕸️ Details</a>

<details>
<summary><code>Why I preferred NEXT JS with Typescript?</code></summary>

```
😀 Typescript for type safety
😀 simplifies development process
😀 optimizes web applications
😀 Server side and client side rendering
😀 Inbuilt Search Engine Optimization
😀 File and folder based routing
😀 FullStack application creating capability
😀 Automatic code splitting

And at the end of the day, it is just an extention of ReactJs.😀
```

</details>

<details>
<summary><code>Core Concepts implemented in Uniport</code></summary>

```
Following are the concepts of NextJS used in devforces-
➡️ File and Folder based routing
➡️ Client and server components
➡️ Routing and special NextJS files
➡️ Data fetching Strategies
➡️ NextJs Server Actions
➡️ Static and Dynamic Metadata

In addition to these, I used
➡️ MySQL, a relational database
➡️ zod validations
➡️ zustand for global context
➡️ concept of webhooks
```

</details>

<br />

#
