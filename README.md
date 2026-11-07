# Gather — Event Discovery

A responsive event discovery and registration website built with HTML5, CSS3, and vanilla JavaScript. Browse events at real Bhubaneswar cafes, search and filter by category, view event details, and save a registration in your browser.

## Features

- Responsive layout for mobile, tablet, and desktop
- Search events by name, category, venue, or description
- Filter events by music, wellness, food and drink, and creative categories
- Sort the event list by soonest or latest date
- Accessible event detail and registration dialogs
- Venue specialty and ambience details with a guest review form for each place
- Guest reviews and star ratings saved locally in the visitor's browser
- Client-side validation for name, email, and event selection (no phone number is requested)
- Confirmation after registration; registrations are stored in browser Local Storage
- Newsletter signup stored locally in the browser
- Reduced-motion support and keyboard-accessible event cards

## Run locally

No install or build step is required. Open `index.html` in a browser, or serve the folder with any static file server. For example:

```bash
npx serve .
```

## Data and deployment

The demo event catalog is defined in `script.js`. It includes Bhubaneswar venues such as Cafe Bengaluru, Yeti, Jugaad Jn, Lola Cafe, Three Chariots Coffee, Bocca Cafe, Kruti Coffee, Cafe 16, and Mamma Mia. Their location details and photos are drawn from public sites and listings. Registration (name, email, selected event), newsletter email entries, and guest reviews are saved to the visitor's browser Local Storage only; this static demo does not send form data to a server. Reviews start empty until a visitor adds one. Images and fonts are loaded from external websites, so those assets need an internet connection.

## Project links

- **Live website:** [Gather on GitHub Pages](https://achyut3875.github.io/Gather/)
- **GitHub repository:** [Achyut3875/Gather](https://github.com/Achyut3875/Gather)

The site is deployed as a static website using GitHub Pages.

## Built with

HTML5 · CSS3 · JavaScript · Local Storage
