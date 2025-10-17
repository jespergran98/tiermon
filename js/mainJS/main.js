// ============================================
// main.js - Application Entry Point
// ============================================

import { initializeTheme } from './theme.js';
import { initializeNavigation } from './navigation.js';
import { fetchTopDecks, renderDecks } from './decks.js';

/**
 * Initializes all modules when DOM is ready
 */
function initialize() {
  initializeTheme();
  initializeNavigation();

  // Uncomment and configure when API is ready
  // const decksEndpoint = '/api/decks/top';
  // fetchTopDecks(decksEndpoint).then(decks => renderDecks(decks));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}