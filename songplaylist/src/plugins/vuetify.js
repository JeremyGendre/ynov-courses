import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {mainTheme} from "../helpers/theme";

Vue.use(Vuetify);

export default new Vuetify({
    theme: mainTheme
});
