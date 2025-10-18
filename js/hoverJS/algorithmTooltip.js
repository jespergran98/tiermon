// Tooltip Information Storage
const tooltipContent = {
  hbe: {
    title: 'Hierarchical Bayesian Estimation',
    description: `A sophisticated algorithm that analyzes thousands of tournament matches to understand the meta landscape: "What does typical performance look like?" It then ranks each deck by intelligently blending two sources—what the broader meta shows AND what this specific deck's results demonstrate.

The balancing mechanism is elegant: decks with limited matches are gently regularized toward the meta average for stability, yet truly exceptional performers can still break through and rank highly if their win rate is outstanding enough. Extensively-played decks rely almost purely on their own merit. The algorithm dynamically adapts to meta conditions—remaining conservative when decks cluster tightly, but allowing meaningful separation when clear power tiers emerge.

Using Bayesian inference with Beta-Binomial distributions, it calculates meta-wide patterns (mean μ and variance σ²) as prior knowledge, then updates each deck's posterior as Beta(α + wins, β + losses) where ties counts as 0.5 wins and losses. Weight shifts based on evidence: n/(n + α + β). Final rankings use the lower confidence bound, rewarding battle-tested consistency while still recognizing breakout performers.

Result: Context-aware rankings from 0-100 that harmonize meta intelligence with individual performance, producing fair assessments even with incomplete data.`
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