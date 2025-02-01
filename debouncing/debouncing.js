const searchInput = document.getElementById("search");

searchInput.addEventListener("input", debounce(handleSearch, 500));

function handleSearch(e) {
  console.log("search", e.target.value);
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
