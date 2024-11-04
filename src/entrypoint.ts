import type {Alpine} from 'alpinejs';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';
import focus from '@alpinejs/focus';
import anchor from '@alpinejs/anchor'

export default (Alpine) => {
    // Register plugins
    Alpine.plugin(collapse);
    Alpine.plugin(intersect);
    Alpine.plugin(focus);
    Alpine.plugin(anchor);

    // Define custom data for Alpine
    Alpine.data("astro", () => ({
        // Track whether the page has loaded
        pageLoaded: 1,
        refreshOnPageLoad: {
            // Refresh on page load event
            ["@astro:page-load.document"]() {
                this.pageLoaded++;
            },
        },
    }));

    return Alpine;
};