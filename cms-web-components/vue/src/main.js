import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import VueSearchBox from './components/VueSearchBox';

const VueSearchBoxCustomElement = wrap(Vue, VueSearchBox);

window.customElements.define('vue-search-box', VueSearchBoxCustomElement);
