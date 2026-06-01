import type { Alpine as AlpineType } from 'alpinejs';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';
import focus from '@alpinejs/focus';
import anchor from '@alpinejs/anchor';

export default (Alpine: AlpineType) => {
    // Register plugins
    Alpine.plugin(collapse);
    Alpine.plugin(intersect);
    Alpine.plugin(focus);
    Alpine.plugin(anchor);

    // Define custom data for Alpine
    Alpine.data("astro", () => ({
        pageLoaded: 1,

        init() {
            this.pageLoaded = 1; // Ensure it's initialized
        },

        refreshOnPageLoad: {
            ["@astro:page-load.document"]: function (this: { pageLoaded: number }) {
                this.pageLoaded++;
            },
        },
    }));

    return Alpine;
};
