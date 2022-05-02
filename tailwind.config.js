module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      animation: {
        fade: 'fadeIn 1s ease',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%':  { opacity: 1 },
        },
      }),

      screens: {
        "sm": "500px",
        'md': '750px',
        'lg': "1000px",
        '2xl':"1250px"
      },
      colors: {
        'github': '#24292F',
        'theme':'#00AEEF',
        'category':'#525252',

        //Filterbar
        'color_filterSidebarHead':'#3F3F3F',
        'color_filterSidebar':'#605F5F',
        'color_filterSidebar_priceInput':'#636363',
        'color_filterSidebar_InputBorder':'#8C8C8C',
        'color_filterSidebar_GoTbtn':'#4E4E4E',
        'starcolor':'#F8B84E',
        'starcolorgrey':'#C9C9C9',

        //Listing page scrollable category
        
        'scrollbaleitem':'#454444',


      },
      fontFamily: {
        body: ['Pushster'],
        footer: ['Inter'],
        theme:['Poppins'],
        arial:['Arial']

      }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide','@tailwindcss/line-clamp')]
    
    
  }