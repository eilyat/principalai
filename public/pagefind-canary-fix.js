// pagefind-canary-fix.js

// Function to fix an anchor's href by removing the slash before a fragment
function fixAnchor(anchor) {
  if (anchor.href) {
    const currentUrl = new URL(window.location.href);
    if (anchor.href.startsWith(currentUrl.origin)) {
      anchor.href = anchor.href.replace(/\/#/, '#');
    }
  }
}

// Function to observe the canary-search-results shadow DOM for added anchors
function observeCanarySearchResults() {
  const canaryResults = document.querySelector('canary-search-results');
  if (!canaryResults) {
    console.warn('No <canary-search-results> element found.');
    return;
  }

  // If the shadowRoot isn't available yet, try again shortly.
  if (!canaryResults.shadowRoot) {
    setTimeout(observeCanarySearchResults, 100);
    return;
  }

  const shadow = canaryResults.shadowRoot;

  // Process any anchor elements already in the shadow DOM.
  const existingAnchors = shadow.querySelectorAll('a');
  existingAnchors.forEach(anchor => fixAnchor(anchor));

  // Set up a MutationObserver to watch for new nodes (anchors) in the shadow DOM.
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // If the added node is an anchor, fix it
            if (node.tagName === 'A') {
              fixAnchor(node);
            }
            // Otherwise, check if it contains any anchors
            const anchors = node.querySelectorAll('a');
            anchors.forEach(anchor => fixAnchor(anchor));
          }
        });
      }
    });
  });

  observer.observe(shadow, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
  observeCanarySearchResults();
});
