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
          primary: '#E53935',      
          secondary: '#558B2F',   
          accent: '#FFB300',       
          error: '#C62828',        
          info: '#FF6F00',         
          success: '#7CB342',     
          warning: '#FFA726',      
          background: '#FFFEF7',   
        },
      },
    },
  },
  defaults: {
    VBtn: {
      style: 'font-family: Poppins, sans-serif; letter-spacing: 0.02em;',
    },
  },
})

export default vuetify