const contentLoad = function () {
   console.log("items", items);

   const contentRow = $("#content-row");

   for (let i in items.films) {
    // елемент даних
    const contentData = items.films[i];

    // картка
    const contentCard = $("<div>").addClass("card").css({width: "18rem",marginTop: "10px",marginBottom: "10px"});
    // картинка
    const cardImage = $("<img>").prop("src", "./assets/" + contentData.img).addClass("card-img-top");
    // інформація картки
    const cardBodyInfo = $("<div>").addClass("card-body");
    // текст картки
    const cardBodyTitle = $("<a>").addClass("card-link").prop("href", "item.html?id=" + i).text(contentData.name);
    const cardBodyText =  $("<p>").addClass("card-title").text(contentData.country + ", " + contentData.category);

    contentCard.append(cardImage, cardBodyInfo.append(cardBodyTitle, cardBodyText));

    // стовбець розмітки
    const contentItem = $("<div>").addClass("col");
    // додавання

    contentItem.append(contentCard);
    contentRow.append(contentItem);
   }    
}