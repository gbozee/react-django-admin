function getUrl(searchString, to, key) {
  if (key) {
    if (to.indexOf(key) > -1) {
      let oldExtract = searchString
        .split("&")
        .filter(x => x.indexOf(key) === -1);
      if (oldExtract.length > 0) {
        return [to].concat(oldExtract).join("&");
      }
      return to;
    }
    return `${searchString}&${to}`;
  }
  return searchString ? `${searchString}&${to}` : to;
}
export function getSearchString(to, currentUrl, key) {
  let searchString = currentUrl.split(to.pathname).filter(x => !!x);
  if (searchString.length > 0) {
    searchString = searchString[0].slice(1);
  } else {
    searchString = "";
  }
  let exists = searchString.indexOf(to.search) > -1;
  return {
    pathname: to.pathname,
    search: exists ? searchString : getUrl(searchString, to.search, key)
  };
}

export function getFullUrl({pathname, search}){
  if(search){
    return `${pathname}?${search}`
  }
  return pathname
}