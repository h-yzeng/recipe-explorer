import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#FF6B35',
          secondary: '#004E89',
          accent: '#F77F00',
          error: '#D62828',
          info: '#06AED5',
          success: '#06D6A0',
          warning: '#F77F00',
        },
      },
    },
  },
})

export default vuetify