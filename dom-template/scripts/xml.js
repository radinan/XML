function createXMLDocument() {
    let documentImplementation = document.implementation;
    let doc = documentImplementation.createDocument(null, null);

    let anime_catalog = doc.createElement("anime_catalog");
    doc.appendChild(anime_catalog);

    let anime = doc.createElement("anime");
    anime.setAttribute("anime_id", "4");
    anime_catalog.appendChild(anime);

    //main info
    let main_info = doc.createElement("main_info");
    anime.appendChild(main_info);

    let title = doc.createElement("title");
    main_info.appendChild(title);
    title.appendChild(doc.createTextNode("Tokyo Revengers"));

    let author = doc.createElement("author");
    author.setAttribute("nationality", "American");
    main_info.appendChild(author);
    author.appendChild(doc.createTextNode("Ken Wakui"));

    let genre = doc.createElement("genre");
    main_info.appendChild(genre);
    genre.appendChild(doc.createTextNode("Action, Drama, Supernatural"))

    let type = doc.createElement("type");
    main_info.appendChild(type);
    type.appendChild(doc.createTextNode("Shounen"));

    let source = doc.createElement("source");
    main_info.appendChild(source);
    source.appendChild(doc.createTextNode("Manga"));


    //show info
    let show_info = doc.createElement("show_info");
    anime.appendChild(show_info);

    let seasons = doc.createElement("seasons");
    show_info.appendChild(seasons);
    let season = doc.createElement("season");
    season.setAttribute("episodes", "13");
    seasons.appendChild(season);
    season.appendChild(doc.createTextNode("1"));

    let all_episodes = doc.createElement("all_episodes");
    show_info.appendChild(all_episodes);
    all_episodes.appendChild(doc.createTextNode("13"));

    let duration = doc.createElement("duration");
    duration.setAttribute("unit", "minutes");
    show_info.appendChild(duration);
    duration.appendChild(doc.createTextNode("23"));


    //publish info
    let publish_info = doc.createElement("publish_info");
    anime.appendChild(publish_info);

    let aired = doc.createElement("aired");
    publish_info.appendChild(aired);
    let begin = doc.createElement("begin");
    aired.appendChild(begin);
    begin.appendChild(doc.createTextNode("11 Apr 2021"));
    let end = doc.createElement("end");
    aired.appendChild(end);
    end.appendChild(doc.createTextNode("19 Sep 2021"));

    let premiered = doc.createElement("premiered");
    premiered.setAttribute("season", "Spring");
    publish_info.appendChild(premiered);
    premiered.appendChild(doc.createTextNode("2021"));

    let studio = doc.createElement("studio");
    publish_info.appendChild(studio);
    studio.appendChild(doc.createTextNode("LIDENFILMS"));

    let producers = doc.createElement("producers");
    publish_info.appendChild(producers);
    producers.appendChild(doc.createTextNode("Pony Canyon"));

    let licensors = doc.createElement("licensors");
    publish_info.appendChild(licensors);
    licensors.appendChild(doc.createTextNode("Unknown"));


    //statistics info
    let statistics_info = doc.createElement("statistics_info");
    anime.appendChild(statistics_info);

    let score = doc.createElement("score");
    statistics_info.appendChild(score);
    score.appendChild(doc.createTextNode("8.24"));

    let rank = doc.createElement("rank")
    statistics_info.appendChild(rank);
    rank.appendChild(doc.createTextNode("285"));

    let popularity = doc.createElement("popularity");
    statistics_info.appendChild(popularity);
    popularity.appendChild(doc.createTextNode("161"));

    return doc;
}
