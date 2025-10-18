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