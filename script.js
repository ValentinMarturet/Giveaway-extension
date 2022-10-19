async function getFilterGiveaways() {
  const options = {
    method: "GET",
    url: "https://gamerpower.p.rapidapi.com/api/filter",
    params: { platform: "epic-games-store.steam.android", type: "game.loot" },
    headers: {
      "X-RapidAPI-Key": "03990fb333msha59b5abde0dd4c3p1aa2bfjsne33a15c544d1",
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  };

  const res = await axios.request(options);
  document.getElementById("ga-list").innerHTML = res.data
    .map(createCard)
    .join("");
  console.log(res);
}

function createCard(item) {
  return `<li>Game: ${item.title}</li>`;
}

getFilterGiveaways();
