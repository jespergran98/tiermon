// ============================================
// decks.js - Deck Data Management
// ============================================

/**
 * Fetches top ranking decks from the specified API endpoint
 * @param {string} endpoint - The API endpoint URL
 * @returns {Promise<Array>} Array of deck objects
 */
export async function fetchTopDecks(endpoint) {
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
export function renderDecks(decks) {
  const decksContainer = document.getElementById('top-decks-container');
  const emptyState = document.querySelector('.empty-state');

  if (!decksContainer) return;

  decksContainer.innerHTML = '';

  if (decks.length === 0) {
    if (emptyState) {
      emptyState.style.display = 'block';
    }
    return;
  }

  if (emptyState) {
    emptyState.style.display = 'none';
  }

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

  card.innerHTML = `
    <div class="deck-card-content">
      <h3 class="deck-name">${deck.name || 'Untitled Deck'}</h3>
      <p class="deck-description">${deck.description || 'No description available'}</p>
    </div>
  `;

  return card;
}