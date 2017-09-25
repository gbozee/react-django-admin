function getUrl(searchString, to, key) {
  if (key) {
    const workingString = searchString || to
    if (workingString.indexOf(key) > -1) {
      let oldExtract = [...new Set(searchString
        .split("&")
        .filter(x => x.indexOf(key) === -1))];
      if (oldExtract.length > 0) {
        const result = [...new Set([to].concat(oldExtract))].filter(x=>!!x);
        // return result
        return result.length === 1? result.join(""):result.join("&")
      }
      return to;
    }
    return !!to ? `${searchString}&${to}` : searchString;
  }
  if(searchString.includes(to)){
    return searchString
  }
  return searchString ? !!to ? `${searchString}&${to}` : searchString : to;
}
export function getSearchString(to, currentUrl, key) {
  let searchString = currentUrl.split(to.pathname).filter(x => !!x);
  if (searchString.length > 0) {
    searchString = searchString[0].slice(1);
  } else {
    searchString = "";
  }
  // let exists = searchString.indexOf(to.search) > -1;
  return {
    pathname: to.pathname,
    // search: exists ? searchString : getUrl(searchString, to.search, key)
    search: getUrl(searchString, to.search, key)
  };
}

export function getFullUrl({pathname, search}){
  if(search){
    return `${pathname}?${search}`
  }
  return pathname
}

export function getKeyOnly(search){
  return search.split("=")[0]
}