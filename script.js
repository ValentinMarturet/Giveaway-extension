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
  console.log(res);
}

function createCard(info) {
  document.getElementById("ga-list").innerHTML = info.data.title;
}

getFilterGiveaways();
