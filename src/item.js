function itemLoad(id) {
    console.log("items", items)

    // позначаємо - знаходимо
    const contentItem = $("#item-src");
    const contentCardItem = $("item-card-content");

    const contentItemInfo = items.films[id];
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

    // додавання
    contentItem.append(itemImageCard);
    contentCardItem.append(itemTitleCard, itemCategoryCard, itemCountryCard, itemDataCard);

}