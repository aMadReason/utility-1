export function getUrlParamsOld(str) {
  const url = new URL(decodeURI(str || window.location));
  const urlParams = new URLSearchParams(url.search);
  const params = {};
  url.searchParams
    .toString()
    .split("&")
    .map(p => {
      const pair = p.split("=");
      params[pair[0]] = pair[1];
    });
  return params;
}

// wont work in edge 18 or ie11 :(
export function getUrlParams(str) {
  const url = new URL(decodeURI(str || window.location));
  const urlParams = new URLSearchParams(url.search);
  const params = Object.fromEntries(urlParams);
  Object.keys(params).map(key => {
    if ([ 'true', 'false' ].includes(params[key])) params[key] = JSON.parse(params[key]);
  });
  return params;
}


export default getUrlParamsOld;
