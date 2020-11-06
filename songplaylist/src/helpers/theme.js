import colors from 'vuetify/lib/util/colors';

export const mainTheme = {
    themes: {
        light: {
            primary: colors.orange.darken3,
            secondary: colors.orange.darken2,
            accent: colors.shades.black,
            error: colors.red.accent3,
            textPrimary: colors.orange
        },
        dark: {
            primary: colors.orange.darken3,
            secondary: colors.orange.lighten1,
            textPrimary: colors.orange
        },
    },
    dark: true
};