/**
 * @param {String} nationName the name of the nation to be commended
 * @param {HTMLElement} previousSibling the node to insert the badge after
 */
function addCommendedBadge(nationName, previousSibling) {
  let icon = document.createElement("img");
  icon.classList.add("scbadge");
  icon.src = "/images/commend.svg";
  icon.alt = `${nationName} was Commended by Security Council Resolution # 69`;
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

  previousSibling.insertAdjacentElement("afterend", div);
}

/**
 * @returns {"rift" | "dark" | "liberal" | "conservative" | "century" | "antiquity" | "mobile"}
 */
function detectTheme() {
  for (const sheet of document.styleSheets) {
    if (!sheet.href) {
      continue;
    }

    if (sheet.href.includes("ns.century")) {
      return "century";
    } else if (sheet.href.includes("ns.dark")) {
      return "dark";
    } else if (sheet.href.includes("ns.liberal")) {
      return "liberal";
    } else if (sheet.href.includes("ns.conservative")) {
      return "conservative";
    } else if (sheet.href.includes("ns.antiquity")) {
      return "antiquity";
    }
  }

  return "rift";
}

if (
  location.pathname.toLowerCase() === `/nation=${document.body.dataset.nname}`
) {
  switch (detectTheme()) {
    case "mobile":
    case "conservative":
    case "liberal":
    case "dark":
    case "rift":
      addCommendedBadge(
        document.querySelector("div.newtitlename > a").textContent,
        document.querySelector("#badge_rack"),
      );
      break;
    case "century":
      addCommendedBadge(
        document.querySelector("#namebox td > p.nationname > a > span")
          .textContent,
        document.querySelector("#namebox td > p.nationname"),
      );
      break;
    case "antiquity":
      addCommendedBadge(
        document.body.dataset.nname,
        document.querySelector("p.nationnavbar + p"),
      );
      break;
  }
}
