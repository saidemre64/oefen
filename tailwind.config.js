const theme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        'frontend/css/**/*.css',
        'templates/**/*',
    ],
    theme: {
        container: {
            center: true,
            padding: theme.spacing[4]
        },
        extend: {
            maxWidth: {
                logo: '150px'
            }
        },
    },
    plugins: [],
};