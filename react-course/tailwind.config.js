module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      maxWidth: {
        '1' : '1em',
        '2' : '2em',
        '3' : '3em',
        '4' : '4em',
        '5' : '5em'
      },
      opacity:{
        '30':'0.3',
        '40':'0.4'
      },
      boxShadow: {
        dark:'0 0 0.4em grey'
      }
    }
  },
  variants: {
    borderColor:['responsive', 'hover', 'focus', 'active'],
    borderWidth:['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
