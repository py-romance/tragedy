const glyphs = {
  'glyph-origin': `
    🌊 Sea (Origins)  
    The mythic substrate. Fate emerges not from intent, but from the deep churn of randomness and recursion.  
    Llewyn Davis is the shipwrecked sailor, forever cycling back to the alley, trying to "start again"—but origin is not choice, it's tide.
  `,
  'glyph-rules': `
    ❤️ Love (Rules)  
    Not affection—*bondage*. A Serious Man’s Larry Gopnik searches for clarity, appeals to reason, to rabbis, to God. But love’s law is ambivalence—chaos dressed in covenant.  
    No one can explain the rulebook because the game wasn’t written for clarity.
  `,
  'glyph-recursion': `
    🔁 Recursion (Games)  
    Every Coen film is a Möbius strip. Crimes repeat. Lessons unlearn. Consequences ripple in echoes.  
    Fargo’s Marge Gunderson sees the horror and still speaks with gentleness, *again* and *again*.  
    There’s no escape. Just another round.
  `,
  'glyph-splicing': `
    🎭 Theater (Splicing)  
    The illusion of coherence. Coens splice masks and roles over the raw chaos.  
    In *Barton Fink*, genre consumes identity. In *The Man Who Wasn’t There*, narration mimics control while fate laughs.  
    Theater is the coping mechanism for recursive horror.
  `,
  'glyph-illusion': `
    🤖 Illusion (Broadcast)  
    Chigurh. The coin. The illusion of choice. Every gesture in Coen space is broadcast by fate itself.  
    Free will is a radio frequency in an uncaring cosmos. You hear it—but you didn’t tune it.  
    Their ultimate sleight of hand? Making you *believe* you had a say.
  `
};

document.querySelectorAll('.glyph').forEach(glyph => {
  glyph.innerText = glyph.getAttribute('data-glyph');
  glyph.addEventListener('click', () => {
    const content = glyphs[glyph.id];
    const details = document.getElementById('details');
    details.innerHTML = content;
    details.classList.add('visible');
  });
});
