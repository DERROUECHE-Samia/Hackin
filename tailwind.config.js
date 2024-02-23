// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
         
            'primary': {
                DEFAULT: '#FBF5F2',
                50 : '#77B29F',
                100: '#72BFC7', 
                200 : '#6884F6', 
                250 : '#AB70DF',
                300 : '#EB9F4A', 
                350 : '#ECC055' , 
                
            }
        },
      },
    },
    variants: {},
    plugins: [],
  }
  