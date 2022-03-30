const content = document.getElementById("content");

const makeSearch = () => {
  const searchForm = document.createElement("form");
  const search = document.createElement("input");
  const searchButton = document.createElement("button");
  search.type = "search";
  searchButton.type = "submit";
  searchButton.textContent = "search";
  searchButton.setAttribute("placeholder", "Search for your city");
  searchForm.appendChild(search);
  searchForm.appendChild(searchButton);
  content.appendChild(searchForm);
};

export { makeSearch };
