// Tooltip Information Storage
const tooltipContent = {
  hbe: {
    title: 'Hierarchical Bayesian Estimation',
    description: `This smart algorithm scans thousands of tournament matches to grasp the big-picture meta: what's a "normal" win rate? Using Bayesian stats, it sets a prior based on overall patterns, then updates each deck's ranking by blending this meta insight with its own wins, ties and losses. Decks with few games get gradually nudged toward the average for fairness, but standout performers still have a chance to rise. Battle-tested decks rely mostly on their solid stats. It auto-adjusts confidence intervals: super cautious in balanced metas where everyone's close, bolder when true power tiers emerge via adaptive variance scaling. Decks get rated typically from 0 to 100, but can exceed 100 in rare, wildly unbalanced metas. Result? Fair rankings that balance meta context with individual performance.`
  }
};


// Initialize tooltip functionality
function initializeTooltips() {
  const infoTriggers = document.querySelectorAll('.info-trigger');
  const tooltip = document.getElementById('tooltip');

  infoTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', (e) => showTooltip(e, tooltip));
    trigger.addEventListener('mouseleave', () => hideTooltip(tooltip));
    trigger.addEventListener('mousemove', (e) => updateTooltipPosition(e, tooltip));
  });

  document.addEventListener('scroll', () => hideTooltip(tooltip));
}

// Show tooltip with content
function showTooltip(event, tooltip) {
  const trigger = event.currentTarget;
  const contentKey = trigger.dataset.tooltip;
  const content = tooltipContent[contentKey];

  if (!content) return;

  // Build tooltip HTML
  tooltip.innerHTML = `
    <h3>${content.title}</h3>
    <p>${content.description}</p>
  `;

  tooltip.style.display = 'block';
  updateTooltipPosition(event, tooltip);
}

// Hide tooltip
function hideTooltip(tooltip) {
  tooltip.style.display = 'none';
}

// Update tooltip position based on mouse location
function updateTooltipPosition(event, tooltip) {
  const rect = tooltip.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  
  let x = event.pageX + 15;
  let y = event.pageY + 15;

  // Prevent tooltip from going off-screen (right side)
  if (x + tooltipWidth > window.innerWidth) {
    x = event.pageX - tooltipWidth - 15;
  }

  // Prevent tooltip from going off-screen (bottom)
  if (y + tooltipHeight > window.innerHeight) {
    y = event.pageY - tooltipHeight - 15;
  }

  // Prevent tooltip from going off-screen (left side)
  if (x < 0) {
    x = 10;
  }

  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeTooltips);

// Also initialize if script loads after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTooltips);
} else {
  initializeTooltips();
}