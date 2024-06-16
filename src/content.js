const contentView = function (contentData) {
   // картка
   const contentCard = $("<div>").addClass("card").css({ width: "18rem", marginTop: "10px", marginBottom: "10px" });
   // картинка
   const cardImage = $("<img>").prop("src", "./assets/" + contentData.img).addClass("card-img-top");
   // інформація картки
   const cardBodyInfo = $("<div>").addClass("card-body");
   // текст картки
   const cardBodyTitle = $("<a>").addClass("card-link").prop("href", "item.html?id=" + contentData.id).text(contentData.name);
   const cardBodyText = $("<p>").addClass("card-title").text(contentData.country + ", " + contentData.category);

   contentCard.append(cardImage, cardBodyInfo.append(cardBodyTitle, cardBodyText));

   // стовбець розмітки
   const contentItem = $("<div>").addClass("col");

   contentItem.append(contentCard);

   return contentItem;
}

const contentLoad = function () {
   console.log("items", items);

   const contentRow = $("#content-row");

   for (let i in items.films) {
      // елемент даних
      const contentData = items.films[i];

      contentRow.append(contentView(contentData));
   }
}

const searchByName = function () {

   const name = $("#searchBtn").val().toLowerCase();

   const filtered = items.films.filter(value => {
      console.log("filter", value);
      const filmsName = value.name.toLowerCase();
      return filmsName.indexOf(name) >= 0;
   });

   const contentRow = $("#content-row").empty();

   for (let i in filtered) {
      // елемент даних
      const contentData = filtered[i];

      contentRow.append(contentView(contentData));
   }

   if (filtered.length == 0) {
      contentRow.append($("<span>").text("Нічого не знайдено!"));
   }

   console.log("filtr", filtered, name);
}