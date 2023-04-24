import 'promise-polyfill/src/polyfill';
import { isRef, ref, unref, watchEffect, type Ref } from 'vue';
import 'whatwg-fetch'

export function useFetch(url: Ref | string) {
  const data = ref(null);
  const error = ref(null);

  function doFetch() {
    data.value = null;
    error.value = null;
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  if(isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }

  return { data, error};
}
