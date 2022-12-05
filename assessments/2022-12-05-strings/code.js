const upToX = (s) => {
  return s.substring(s.length, 'x')
}

const pair = (s1, s2) => {
  return (s1 + ' and ') + s2
}

const containsX = (s) => {
  if (s.substring(s.length, 'x')) {
    return true
  }
  else return false
}

const slug = (s1, s2, s3) => {
  const firstword = (s1.toLowerCase(s1) + '-')
  const secondword = (s2.toLowerCase(s2) + '-')
  const thirdword = (s3.toLowerCase(s3)) 
  return firstword + secondword + thirdword
}

const capitalize = (s) => {
  return s.substring(1, s).toUpperCase() + s.substring(1, s.length).toLowerCase()
}