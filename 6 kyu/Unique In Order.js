var uniqueInOrder=function(iterable){
  if (!iterable) return []
  let setUniqueElems = [iterable[0]]
  for (let index = 1; index < iterable.length; index++) {
    if (iterable[index] !== iterable[index-1]) {
      setUniqueElems.push(iterable[index])
    }
  }
  return setUniqueElems
}