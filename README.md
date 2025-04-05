# Strata Management System

A modern web application for managing strata properties, committees, and maintenance requests.

## Features

- Committee member profiles
- Announcement system with categorized notifications
- Maintenance request submission
- Contact form
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/strata-management.git
cd strata-management
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
3. Click "New Project"
4. Import your repository
5. Configure your project settings (if needed)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Login to Vercel
```bash
vercel login
```

3. Deploy your project
```bash
vercel
```

4. Follow the prompts to complete deployment

## Environment Variables

If you need to add environment variables, create a `.env.local` file in the root directory:

```
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
```

## License

This project is licensed under the MIT License - see the LICENSE file for details. 