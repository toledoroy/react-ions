const Prefix = (styles) => {
  const keyString = Object.keys(styles).join()
  const valueString = Object.values(styles).join()

  if(keyString !== valueString) {
    return styles
  }

  const newStyle = {}
  for(var s in styles) {
    newStyle[s] = 'mbsy-' + styles[s]
  }
  return newStyle
}

export default Prefix
