function itemLoad(id) {
    console.log("items", items);

    // позначаємо - знаходимо
    const cardMain = $("#card-with-about")
    const contentItem = $("#item-src");
    const categoryName = $("#name");
    const categoryStyle = $("#style");
    const categoryCountry = $("#country");
    const categoryData = $("#dataFilms");
    const categoryAbout = $("#paraphraf");

    // перебираємо
    const contentItemInfo = items.films.find(value => {
        return value.id == id;
    });

    cardMain.css({ marginTop: "20px", marginBottom: "20px" });
    // картинка
    const itemImageCard = $("<img>").prop("src", "./assets/" + contentItemInfo.img).addClass("img-fluid rounded-start");
    // ім'я
    const itemTitleCard = $("<h5>").addClass("card-title").text(contentItemInfo.name);
    // категорія
    const itemCategoryCard = $("<p>").addClass("card-text").text(contentItemInfo.category);
    // країна
    const itemCountryCard = $("<p>").addClass("card-text").text(contentItemInfo.country);
    // дата
    const itemDataCard = $("<p>").addClass("card-text").text(contentItemInfo.data);
    // опис
    const itemAboutCard = $("<p>").addClass("card-text").text(contentItemInfo.about);

    // додавання
    contentItem.append(itemImageCard);
    categoryName.append(itemTitleCard);
    categoryStyle.append(itemCategoryCard);
    categoryCountry.append(itemCountryCard);
    categoryData.append(itemDataCard);
    categoryAbout.append(itemAboutCard);

}