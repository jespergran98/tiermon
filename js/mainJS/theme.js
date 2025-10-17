// ============================================
// theme.js - Theme Management
// ============================================

import { CONFIG } from './config.js';

/**
 * Initializes theme management and sets theme based on user preference or system preference
 */
export function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = prefersDarkMode ? CONFIG.DARK_THEME : CONFIG.LIGHT_THEME;

  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newTheme = e.matches ? CONFIG.DARK_THEME : CONFIG.LIGHT_THEME;
    setTheme(newTheme);
  });
}

/**
 * Sets the theme to the specified value
 * @param {string} theme - The theme to set ('light' or 'dark')
 */
export function setTheme(theme) {
  const htmlElement = document.documentElement;
  htmlElement.setAttribute('data-theme', theme);
}

/**
 * Toggles between light and dark theme
 */
export function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === CONFIG.LIGHT_THEME ? CONFIG.DARK_THEME : CONFIG.LIGHT_THEME;
  setTheme(newTheme);
}