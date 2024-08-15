# DOM Manipulation with Dynamic Menus

This project demonstrates dynamic DOM manipulation using JavaScript. The script creates and manages a top navigation menu with submenus, allowing users to interact with different sections of a webpage by dynamically updating the content.

## Features

- **Dynamic Menu Creation**: The top navigation menu is created programmatically based on an array of objects. Each menu item may contain sub-links that are displayed when the item is clicked.
- **DOM Manipulation**: The script manipulates the DOM to update the content of the main section (`<main>`) based on the user's selection from the menu.

- **Interactive Submenus**: Submenus appear dynamically when a menu item with sub-links is clicked, offering additional navigation options.

## Usage

- Click on the menu items in the top navigation bar to see the main content change dynamically.
- If a menu item has sub-links, they will appear below the top menu. Click on any submenu link to change the main content accordingly.

## Customization

- **Menu Links**: You can customize the menu links by editing the `menuLinks` array in the JavaScript file. Each object in the array represents a menu item and its corresponding sub-links.
- **Styles**: The layout and styles can be modified in the CSS file. Custom CSS variables are used to control the background colors and layout of the menus.
