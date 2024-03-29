if (
  location.pathname.toLowerCase() === `/nation=${document.body.dataset.nname}`
) {
  let icon = document.createElement("img");
  icon.classList.add("scbadge");
  icon.src = "/images/commend.svg";
  icon.alt = `${document.querySelector("div.newtitlename > a").textContent} was Commended by Security Council Resolution # 69`;
  icon.title = icon.alt;

  let badge = document.createElement("a");
  badge.classList.add("wabadge");
  badge.href = "/page=WA_past_resolution/id=69/council=2";
  badge.addEventListener("click", (e) => {
    e.preventDefault();
    location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  });
  badge.appendChild(icon);

  let div = document.createElement("div");
  div.id = "wabadges";
  div.appendChild(badge);

  document.querySelector("#badge_rack").insertAdjacentElement("afterend", div);
}
