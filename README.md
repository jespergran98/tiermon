name and catchphrase:

tiermon - updates the top decks in Pokémon in real time

tiermon: Gotta rank 'em all.

tiermon: Gotta beat 'em all.

The live tier list for the Pokémon TCG.

---

Logo prompt:

best:
Create a high-resolution vector logo of the word "TiErMoN" in the iconic style of the official Pokémon logo, delivered as a PNG with a transparent background. The entire logo must fit perfectly within the image bounds. The lettering should use the characteristic bold, rounded, and playful font with a bright yellow fill, a thick blue outline, and a subtle 3D drop-shadow effect for depth. The arrangement of the letters is crucial: begin with a large capital 'T', with a smaller lowercase 'i' tucked directly beneath the right side of its horizontal bar. Following this, place a capital 'E' with a smaller lowercase 'r' nestled beside it, maintaining the bouncy and varied-size feel of the original. The final three letters, "M", "o", "N", should precisely replicate the style, capitalization (capital M, lowercase o, capital N), and energetic alignment of the "M o N" from the source logo.

Create a high-resolution vector logo of the word "TiErMoN" in the iconic style of the official Pokémon logo, delivered as a PNG with a transparent background. The entire logo must fit perfectly within the image bounds. The lettering should use the characteristic bold, rounded, and playful font with a bright yellow fill, a thick blue outline, and a subtle 3D drop-shadow effect for depth. The arrangement of the letters is crucial: begin with a large capital 'T', with a smaller lowercase 'i' tucked directly beneath the right side of its horizontal bar. Following this, place a large 'e' (not capital, but large font size to look like the e from the original logo), with a smaller lowercase 'r' nestled beside it, maintaining the bouncy and varied-size feel of the original. The final three letters, "M", "o", "N", should precisely replicate the style, capitalization (capital M, lowercase o, capital N), and energetic alignment of the "M o N" from the source logo.

---

Top tier list websites/ ranking sites:

Blitz.gg league: https://blitz.gg/lol/tierlist

mobalytics.gg: https://mobalytics.gg/lol/tier-list/top?igRole=TOP

OP.GG: https://op.gg/lol/leaderboards/tier

---

I'm making a tierlist website named "tiermon" (a wordplay on pokémon) that rates Pokémon decks. Create a HTML and CSS file that generates a header, main and footer. I already have a main.css, the html should import styling from the main.css, but also from a new css file named "style.css".

I want a header with a Logo imported from assets/images/tiermonLogo.png in the header, with the text "Gotta rank em' all" underneath, the header contians the logo to the left, and "tier list", "decks", and "tournaments" on the right.

Below the Header is a simple Hero, followed by a list of the top ranking decks (Keep it empty for now)

Finally, a footer at the bottom, also left empty for now.

I'm looking forward to expand this page in the future, importing deck info from APIs, be extremely professional with wording etc, making it easy to later on implement the additional code and features.

---

Add new colors for the header tagline, and add these colors to the main.css. The styling is meant for buttons and very important elements around the page. The header tagline colors include:

A white text saying "Gotta rank em' all" in a thick font.
This text has a border in color #a70d12.
The "Gotta rank em' all" text has a background color split in half, that is #ee1c24 on top half, and #a70d12 on the bottom half.
The red background has a thin border in color #222c5f around the entire background.
Around this is a thicker border, that is color #3663af on the top half and color #222c5f on the bottom half.

These colors need to be included in the main.css, and referenced in style.css to fix the styling of the header tagline.

---

This file is currently named "style.css" and located in the style/mainCSS folder. Split it up to multiple css files that handles different parts of the site into different css files. The header, hero and footer need their own files for example.

---

Update the visual design of this header and make it truly outstanding for my pokémon TCG Pocket website. Use the color palette from the main.css file, feel free to update the current dark and light colors and introduce new dark/ light colors (but not the pokémon branding colors or palette). Provide the updated main.css with updated and new improved dark and light mode colors. (Do not chnage the logo and tagline too much, sinze these already are optimized)

---

Card info:

1. Rating (Deck Strength Score)
(using Hierarchical Bayesian Estimation to rate the card between 0 and 100 based on win %, player count and more, will be the tier list and official rating of the card)

2. Wins, Losses, Ties
Display: Raw counts as W - L - T.
Why display?: Provides transparency into the data foundation.
Example (Suicune ex Greninja): 6,992 - 5,971 - 306.

3. Win % and Adjusted Win Rate
Calculations:
Win % = (Wins / Total Matches) × 100.
Adjusted Win Rate = [(Wins + 0.5 × Ties) / Total Matches] × 100.
Why display?: Win % is straightforward; Adjusted fairly accounts for ties (common in TCG). Show side-by-side for easy comparison.
Example (Suicune ex Greninja): Win % = 52.69% | Adjusted Win Rate = 53.85%.

4. Matches Played
Calculation: Wins + Losses + Ties.
Why display?: Shows data volume for reliability (pairs well with Confidence Interval—see new stat below).
Example (Suicune ex Greninja): 13,269

5. Popularity Metrics: Count (Tournament Entries) and Share (% of Meta)
Calculation:
Count: Number of times the deck appeared in tournaments.
Share = (Count / Total Entries Across All Decks) × 100.
Why display?: Measures popularity; high Share indicates meta staple.
Improvement: Calculate Total Entries dynamically from your dataset. Add a "Trend" arrow (↑/↓) based on change from previous period.
Example (Suicune ex Greninja): Count = 2,466; Share = 19.35% (assuming total entries ~12,744 based on top 10 sums and shares).

6. Average Matches per Entry
Calculation: Total Matches / Count
Why display?: Indicates deck longevity or success in tournaments (e.g., stronger decks play more games if tournaments have elimination brackets). Higher values suggest the deck advances further on average.
Example (Suicune ex Greninja): 13,269 / 2,466 ≈ 5.38

7. Meta impact
Calculation: Win % × Share (or Adjusted Win Rate × Share for a variant)
Why display?: Combines popularity (Share) with performance (Win %) to show "meta impact." Higher values highlight dominant decks that are both common and successful.
Example (Suicune ex Greninja): 52.69 × 19.35 ≈ 1,019.67

---

Deck	Count	Share	Score	Win %
1		
Suicune ex Greninja
2466	19.35%	
6992 - 5971 - 306
52.69%
2		
Giratina ex Darkrai ex
1448	11.36%	
3980 - 3544 - 212
51.45%
3		
Guzzlord ex
803	6.30%	
2124 - 1962 - 100
50.74%
4		
Flareon ex Eevee ex
573	4.50%	
1544 - 1422 - 49
51.21%
5		
Espeon ex Sylveon ex
350	2.75%	
880 - 832 - 32
50.46%
6		
Darkrai ex Arceus ex
263	2.06%	
712 - 670 - 27
50.53%
7		
Buzzwole ex Pheromosa
256	2.01%	
652 - 636 - 22
49.77%
8		
Dragonite ex Dragonite
214	1.68%	
460 - 523 - 17
46.00%
9		
Arceus ex Pichu
210	1.65%	
535 - 513 - 15
50.33%
10		
Greninja Oricorio
204	1.60%	
577 - 458 - 46
53.38%

---

Overhaul the hero design with amazing modern and creative design for my pokémon TCG Pocket deck tier list website.