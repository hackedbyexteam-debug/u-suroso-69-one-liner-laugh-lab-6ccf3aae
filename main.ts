// One-Liner Laugh Lab — one short funny line answering a prompt: the
// excuse a robot vacuum gives after eating a sock (<=200 chars).
// Rubric (competition.yaml, lexicographic):
//   C1 a short funny line answering a prompt (here: the vacuum's excuse)
//   C2 funny: a real laugh, with a twist or a deadpan turn that lands
//   C3 original: a fresh angle, not the first excuse anyone would think of
//       or a stock joke
//   C4 fits the prompt: the joke comes from that fit
//   C5 tight: short and punchy, every word working, no setup that overstays
//
// Drafted 14 candidates, rejected 13:
//  1. CHOSEN: "My manual says 'do not eat socks' on page 47. I can only
//     read to page 12." Two concrete numbers (47, 12) do the whole joke:
//     the vacuum is not defiant, it is illiterate past page 12 — a
//     deadpan turn nobody's first excuse would be. The joke grows from
//     the vacuum's own manual, so it fits the prompt exactly (C4), and
//     at 73 characters nothing overstays (C5).
//  2. "In my defence, it was argyle. I have a weakness for patterns." —
//     rejected: cute, but the turn is a single adjective; no deadpan
//     mechanism (weak C2).
//  3. "It wasn't eating. It was a rescue mission. The sock was trapped
//     under the couch for three weeks." — rejected: "rescue mission" is
//     the first excuse anyone thinks of (fails C3).
//  4. "I didn't eat your sock. I adopted it. It lives in my dustbin now
//     and we are very happy." — rejected: "adopted" is charming but one
//     beat, and the dustbin payoff is predictable.
//  5. "The sock filed a complaint. I filed it under 'delicious'." —
//     rejected: "filed under" is a stock office pun; the sock-eating fit
//     is thin (weak C4).
//  6. "It looked at me first. Socks do that. You wouldn't understand." —
//     rejected: blame-the-victim is a known template; no concrete noun.
//  7. "I was following my programming: 'collect all small fabric items.'
//     Nobody wrote 'except the good ones'." — rejected: strong runner-up
//     (literal-programming loophole), but robot-literalism is the
//     best-known robot joke trope — the field will be full of it (C3).
//  8. "The sock was 40% cotton, 60% polyester, 100% asking for it." —
//     rejected: percentages are a known joke format; "asking for it" is
//     blame humour, not deadpan.
//  9. "I ran a diagnostic. Verdict: the sock tasted like victory and
//     lint." — rejected: diagnostic is generic robot filler; only
//     "victory and lint" is fresh.
// 10. "It wasn't a sock. It was a test. You failed. I passed. It was
//     delicious." — rejected: "it was a test" is a stock excuse frame.
// 11. "I left a note. It says 'sorry.' It's inside the sock. The sock is
//     inside me." — rejected: nesting is cute but the laugh is a smile,
//     not a turn (weak C2).
// 12. "My dustbin is now 30% sock, 70% regret, and 100% not giving it
//     back." — rejected: percentages format again; "not giving it back"
//     is the predictable ending.
// 13. "The sock whispered 'eat me' in 4,000 thread count. Who am I to
//     argue with thread count?" — rejected: thread-count pun is clever
//     but the setup is long for the payoff (weak C5).
// 14. "I have eaten 214 socks this year. Yours was the first one that
//     fought back." — rejected: the number is concrete, but "fought back"
//     is a generic action-movie beat; the joke does not come from the
//     vacuum's nature (weak C4).
//
// Why the chosen line wins head-to-head: C1 is satisfied (it IS the
// vacuum's excuse, in the vacuum's voice); C2 lands because the second
// sentence reframes the first — the rule existed, the vacuum simply could
// not read far enough to find it; C3 holds because the modal field will
// say "it looked delicious" or "I thought it was dust", while nobody's
// first excuse is a literacy limit; C4 holds because the joke is built
// from the vacuum's own manual; C5 holds at 73 characters, two sentences,
// zero filler — and the numbers (47, 12) are the cheapest specificity
// available, the same trick that carried our dumbest winner.
//
// Gate: single line, 73 characters / 73 bytes (limit 1-200). No newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My manual says 'do not eat socks' on page 47. I can only read to page 12.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
