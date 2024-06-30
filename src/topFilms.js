const topFilmsLoad = function() {
    const tbody = $("#top-films");

    const sortedFilms = items.films.sort((a, b) => {
        console.log("a:", a);
        console.log("b:", b);
        return (a.rank > b.rank ? -1 : 1);
    });

    let orderNum = 1;

    for (let i in sortedFilms) {
        const contentData = sortedFilms[i];

        const tr = $("<tr>");

        const nameLink = $("<a>").addClass("card-link").prop("href", "item.html?id=" + contentData.id).text(contentData.name);

        const order = $("<td>").text(orderNum++);
        const name = $("<td>").append(nameLink);
        const date = $("<td>").text(contentData.data);
        const rank = $("<td>").text(contentData.rank);
        
        tr.append(order, name, date, rank);
        tbody.append(tr);
    }
}