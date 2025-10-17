/**
 * Tiermon - Main JavaScript Module
 * Handles theme management and core functionality
 */

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  THEME_STORAGE_KEY: 'tiermon-theme',
  LIGHT_THEME: 'light',
  DARK_THEME: 'dark',
};

// ============================================
// THEME MANAGEMENT
// ============================================

/**
 * Initializes theme management and sets theme based on user preference or system preference
 */
function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve saved theme preference or use system preference
  const savedTheme = localStorage.getItem(CONFIG.THEME_STORAGE_KEY);
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDarkMode ? CONFIG.DARK_THEME : CONFIG.LIGHT_THEME);

  setTheme(initialTheme);

  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Listen for system theme preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(CONFIG.THEME_STORAGE_KEY)) {
      const newTheme = e.matches ? CONFIG.DARK_THEME : CONFIG.LIGHT_THEME;
      setTheme(newTheme);
    }
  });
}

/**
 * Sets the theme to the specified value
 * @param {string} theme - The theme to set ('light' or 'dark')
 */
function setTheme(theme) {
  const htmlElement = document.documentElement;
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem(CONFIG.THEME_STORAGE_KEY, theme);
}

/**
 * Toggles between light and dark theme
 */
function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === CONFIG.LIGHT_THEME ? CONFIG.DARK_THEME : CONFIG.LIGHT_THEME;
  setTheme(newTheme);
}

// ============================================
// DECK DATA MANAGEMENT
// ============================================

/**
 * Fetches top ranking decks from the specified API endpoint
 * @param {string} endpoint - The API endpoint URL
 * @returns {Promise<Array>} Array of deck objects
 */
async function fetchTopDecks(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching top decks:', error);
    return [];
  }
}

/**
 * Populates the decks grid with deck cards
 * @param {Array} decks - Array of deck objects
 */
function renderDecks(decks) {
  const decksContainer = document.getElementById('top-decks-container');
  const emptyState = document.querySelector('.empty-state');

  if (!decksContainer) return;

  // Clear existing content
  decksContainer.innerHTML = '';

  if (decks.length === 0) {
    if (emptyState) {
      emptyState.style.display = 'block';
    }
    return;
  }

  // Hide empty state
  if (emptyState) {
    emptyState.style.display = 'none';
  }

  // Render each deck
  decks.forEach((deck, index) => {
    const deckElement = createDeckCard(deck, index);
    decksContainer.appendChild(deckElement);
  });
}

/**
 * Creates a deck card element
 * @param {Object} deck - Deck object containing deck information
 * @param {number} index - Index of the deck in the list
 * @returns {HTMLElement} Deck card element
 */
function createDeckCard(deck, index) {
  const card = document.createElement('div');
  card.className = 'deck-card';
  card.setAttribute('data-deck-id', deck.id || index);

  // Structure: Update this based on your API response structure
  card.innerHTML = `
    <div class="deck-card-content">
      <h3 class="deck-name">${deck.name || 'Untitled Deck'}</h3>
      <p class="deck-description">${deck.description || 'No description available'}</p>
    </div>
  `;

  return card;
}

// ============================================
// NAVIGATION
// ============================================

/**
 * Initializes smooth scrolling for navigation links
 */
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Only handle internal anchor links
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initializes all modules when DOM is ready
 */
function initialize() {
  initializeTheme();
  initializeNavigation();

  // Future: Uncomment and configure when API is ready
  // const decksEndpoint = '/api/decks/top';
  // fetchTopDecks(decksEndpoint).then(decks => renderDecks(decks));
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}