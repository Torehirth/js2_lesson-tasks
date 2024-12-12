const title = () => {
  const documentHeading = document.querySelector("h1");
  documentHeading.innerHTML = "Updated heading";

  console.log(documentHeading);
};

title();
