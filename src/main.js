const searchByFilmsCategory = function (category) {
    category = category.toLowerCase();
    const filtered = items.films.filter(value => {
       console.log("filter", value);
       const filmsCategory = value.category.toLowerCase();
       return filmsCategory.indexOf(category) >= 0;
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
 
const loadFilmsCategory = function () {
    const filmCategory = [
        "Вестерни",
        "Комедії",
        "Бойовики",
        "Фантастика",
        "Драми"
    ];

    const filmsMenu = $("#films-menu");

    for (let i in filmCategory) {
        const category = filmCategory[i];
        const menu = $("<a>").click(function(){
            searchByFilmsCategory(category);
        }).addClass("dropdown-item clicker-a").text(category);
        filmsMenu.append(menu);
    }

    for (let i in filmCategory){
        console.log("filmCategory", i, filmCategory[i]);
    }
}

const loadSerialsCategory = function () {
    const serialCategory = [
        "Пригоди",
        "Комедії",
        "Жахи",
        "Фантастика"
    ]

    const serialMenu = $("#serials-menu");

    for (let i in serialCategory) {
        const sCategory = serialCategory[i];
        const sMenu = $("<a>").addClass("dropdown-item clicker-a").text(sCategory);
        serialMenu.append(sMenu);
    }

}

const loadMultCategory = function () {
    const multCategory = [
        "Пригоди",
        "Машини",
        "Повчальні",
        "Фантастика"
    ]

    const multMenu = $("#mult-menu");

    for (let i in multCategory) {
        const mCategory = multCategory[i];
        const mMenu = $("<a>").addClass("dropdown-item clicker-a").text(mCategory);
        multMenu.append(mMenu);
    }

}

const loadAnimeCategory = function () {
    const animeCategory = [
        "Пригоди",
        "Детиктиви",
        "Фантастика",
        "Містика"
    ]

    const animeMenu = $("#anime-menu");

    for (let i in animeCategory) {
        const aCategory = animeCategory[i];
        const aMenu = $("<a>").addClass("dropdown-item clicker-a").text(aCategory);
        animeMenu.append(aMenu);
    }

}

const mainLoad = function () {
    loadAnimeCategory();
    loadMultCategory();
    loadFilmsCategory();
    loadSerialsCategory();
}