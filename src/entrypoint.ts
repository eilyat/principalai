import type {Alpine} from 'alpinejs';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';
import focus from '@alpinejs/focus';

export default (Alpine) => {
    Alpine.plugin(collapse);
    Alpine.plugin(intersect);
    Alpine.plugin(focus);
};