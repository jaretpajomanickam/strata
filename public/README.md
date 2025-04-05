# Public Assets Directory

This directory contains static assets for the Strata Management application.

## Directory Structure

- `/images` - Contains all image assets used throughout the application

## Usage

To use images in your components, reference them using the following path format:

```jsx
// Example usage in a component
<Image 
  src="/images/logo.png" 
  alt="Company Logo"
  width={200}
  height={100}
/>
```

## Image Guidelines

1. Use appropriate image formats:
   - Use .png for images that require transparency
   - Use .jpg for photographs
   - Use .svg for icons and logos when possible
   - Use .webp for better performance when possible

2. Optimize images before adding them to the repository
3. Use descriptive file names
4. Keep file sizes reasonable (under 500KB when possible) 