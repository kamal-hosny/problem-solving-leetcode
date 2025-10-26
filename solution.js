function countSmileys(arr) {

  const regex = /^[:;][-~]?[)D]$/;
  
  return arr.filter(face => regex.test(face)).length;
}
