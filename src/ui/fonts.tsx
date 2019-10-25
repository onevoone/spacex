interface Font {
  fontWeight: number;
  woff2: string;
  woff: string;
}


const defaultParams = {
  fontFamily: 'Catamaran',
  fontStyle: 'normal',
  fontDisplay: 'swap',
}

const source = [
  { fontWeight: 100, woff2: '../assets/fonts/catamaran-v6-latin-100.woff2', woff: '../assets/fonts/catamaran-v6-latin-100.woff' },
  { fontWeight: 200, woff2: '../assets/fonts/catamaran-v6-latin-200.woff2', woff: '../assets/fonts/catamaran-v6-latin-200.woff' },
  { fontWeight: 300, woff2: '../assets/fonts/catamaran-v6-latin-300.woff2', woff: '../assets/fonts/catamaran-v6-latin-300.woff' },
  { fontWeight: 400, woff2: '../assets/fonts/catamaran-v6-latin-regular.woff2', woff: '../assets/fonts/catamaran-v6-latin-regular.woff' },
  { fontWeight: 500, woff2: '../assets/fonts/catamaran-v6-latin-500.woff2', woff: '../assets/fonts/catamaran-v6-latin-500.woff' },
  { fontWeight: 600, woff2: '../assets/fonts/catamaran-v6-latin-600.woff2', woff: '../assets/fonts/catamaran-v6-latin-600.woff' },
  { fontWeight: 700, woff2: '../assets/fonts/catamaran-v6-latin-700.woff2', woff: '../assets/fonts/catamaran-v6-latin-700.woff' },
  { fontWeight: 800, woff2: '../assets/fonts/catamaran-v6-latin-800.woff2', woff: '../assets/fonts/catamaran-v6-latin-800.woff' },
  { fontWeight: 900, woff2: '../assets/fonts/catamaran-v6-latin-900.woff2', woff: '../assets/fonts/catamaran-v6-latin-900.woff' },
]


export const fonts = source.reduce((acc: any, font: Font) => {
  acc.push({
    ...defaultParams,
    fontWeight: font.fontWeight,
    src: `
      url(${font.woff2}) format('woff2'),
      url(${font.woff}) format('woff');
    `
  })
  return acc
}, [])
