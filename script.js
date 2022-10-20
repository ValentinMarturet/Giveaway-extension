async function getFilterGiveaways() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "03990fb333msha59b5abde0dd4c3p1aa2bfjsne33a15c544d1",
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://gamerpower.p.rapidapi.com/api/filter?platform=epic-games-store.steam.android&type=game.loot",
    options
  );
  const result = await res.json();
  document.getElementById("ga-list").innerHTML = result
    .map(createCard)
    .join("");
  // console.log(result);
}

function createCard(item) {
  return `<a href="${item.open_giveaway}" class="card">
            <img
              class="img"
              src="${item.thumbnail}"
            />
            <div class="title">
              <h3>${item.title}</h3>
            </div>
          </a>`;
}

getFilterGiveaways();
