document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Ready...FAMILY");

  const rootDiv = document.querySelector("#root");
  // const button = document.createElement('button');

  // button.innerText = 'CLICK ME!';
  // button.classList.add('button')

  // button.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     fetchQuote();
  // });

  // rootDiv.appendChild(button);

  function fetchQuote() {
    const url = "https://api.chucknorris.io/jokes/random";
    const options = { method: "GET" };
    fetch(url, options)
      .then(function (response) {
        console.log("RESPONSE: ", response);
        return response.json();
      })
      .then(function (data) {
        return generateQuote(data);
      });
  }

  function fetchCategories() {
    const url = "https://api.chucknorris.io/jokes/categories";
    const options = { method: "GET" };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return generateCategoryList(data);
      });
  }

  function generateQuote(data) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = data.value;
    rootDiv.appendChild(paragraph);
  }

  function generateCategoryList(categories) {
    const categoryList = document.createElement("ul");

    const safeForGrandma = categories.filter(function (category) {
      if (
        category != "explicit" &&
        category != "religion" &&
        category != "political"
      ) {
        return category;
      }
    });

    console.log("CATEGORIES AND SAFE CATS", categories, safeForGrandma);

    safeForGrandma.map(function (category) {
      const listItem = document.createElement("li");
      listItem.innerHTML = category;
      categoryList.appendChild(listItem);
    });

    rootDiv.appendChild(categoryList);
  }

  fetchQuote();
  fetchCategories();
});
