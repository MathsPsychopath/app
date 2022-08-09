import { extendTheme } from 'native-base';

const theme = extendTheme({
    fontConfig: {
        Barlow: {
            400: {
                normal: 'Barlow_400Regular',
                italic: 'Barlow_400Regular_Italic',
            },
            500: {
                normal: 'Barlow_500Medium',
                italic: 'Barlow_500Medium_Italic',
            },
            700: {
                normal: 'Barlow_700Bold',
                italic: 'Barlow_700Bold_Italic',
            },
        },
    },

    fonts: {
        heading: 'Barlow',
        body: 'Barlow',
        mono: 'Barlow',
    },
});

export default theme;
