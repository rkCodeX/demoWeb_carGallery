/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["*"],
  theme: {
    extend: {
      colors: {
        'blue0': '#000011',
        'blue1': '#000c1f',
        'blue2': '#00112e',
        'blue3': '#001f45',
        'gold0': '#e3b210',
        'white0': '#fffcfc',
        'gray0': '#292828',
        'gray1': '#383838',
        'caramel0': '#a37958',
        'caramel1': '#8f5e38',
        'caramel2': '#ad5c1d',
      },
      boxShadow: {
        'shade0': 'inset 1px 1px 4px 2px #e3b210,inset 0px 1px 4px 2px #e3b210',
      },
    },
  },
  plugins: [],
}

