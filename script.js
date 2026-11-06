/* Café des Faucheurs, language toggle, scroll reveal, rotating midday dish.
   Default language is French and is fully present in the HTML:
   with JavaScript disabled, the complete French site remains visible. */
(function () {
  "use strict";

  var I18N = {
    fr: {
      skip: "Aller à la carte",
      wordmarkSub: "Vieille ville · La Chaux-de-Fonds",
      navMenu: "La carte",
      navImages: "En images",
      navStory: "La maison",
      navVisit: "Visite",
      navBook: "Réserver",
      mastTag: "Restaurant familial et traditionnel en vieille ville de La Chaux-de-Fonds",
      mastAddr: "Rue des Granges 5 · 2300 La Chaux-de-Fonds",
      midiPrefix: "Ce midi à la maison :",
      ctaMenu: "Voir la carte",
      ctaReserve: "Appeler pour réserver",
      stampScore: "4,8",
      stampText: "104 avis Google",
      f1Title: "Tout est fait maison",
      f1Text: "Des plats du jour aux desserts, la cuisine se fait sur place, sans chichis.",
      f2Title: "Produits frais de la région",
      f2Text: "Les menus se composent avec des produits frais de la région.",
      f3Title: "Une terrasse fleurie",
      f3Text: "Un coin calme et fleuri, au cœur des ruelles de la vieille ville.",
      menuTitle: "La carte",
      menuSub: "Une carte courte, composée avec les produits du moment. Le midi est le cœur de la maison : un plat du jour, quelques plats bien faits, et des desserts maison.",
      catMidi: "Le midi",
      dPlatName: "Plat du jour",
      dPlat: "Composé chaque jour avec les produits frais de la région.",
      dMenusName: "Menus du midi",
      dMenus: "La carte de midi, courte et composée le jour même.",
      catPlats: "Les plats de la maison",
      dGrenName: "Cuisses de grenouilles",
      dGren: "Fraîches et préparées maison : un vrai régal, disent les convives.",
      dRoastName: "Roastbeef",
      dRoast: "Le classique de la maison, que les convives qualifient de magique.",
      dEntreName: "Entrecôte",
      dEntre: "L’entrecôte, simplement préparée, pour les amateurs de viande.",
      dFiletName: "Filets au beurre blanc",
      dFilet: "Des filets de poisson nappés d’un beurre blanc, tout en finesse.",
      dTerrName: "Terrine",
      dTerr: "La terrine, en entrée, comme autrefois.",
      dPorcName: "Porchetta",
      dPorc: "La porchetta, rôtie lentement, fondante et parfumée.",
      dFritesName: "Frites",
      dFrites: "Les frites, dorées, en accompagnement des plats.",
      catDouceurs: "Les douceurs",
      dDessName: "Desserts maison",
      dDess: "Les desserts sont faits maison, et les convives s’en souviennent.",
      menuNote: "Cette carte présente les plats que la maison sert régulièrement. Les prix ne sont pas publiés en ligne : ils seront ajoutés ici dès que la maison les aura confirmés. En attendant, appelez-nous, nous vous dirons tout et nous prendrons votre réservation.",
      menuCta: "Appeler la maison",
      galTitle: "En images",
      galSub: "Les plats et les lieux qui font la maison, en quelques images.",
      capGren: "Cuisses de grenouilles",
      capRoast: "Roastbeef",
      capFilet: "Filets au beurre blanc",
      capDess: "Desserts maison",
      capSalle: "La salle",
      capTerr: "La terrasse",
      swipeHint: "Faites glisser pour voir la suite",
      storyTitle: "La maison",
      storyP1: "Au cœur de la vieille ville de La Chaux-de-Fonds, le Café des Faucheurs est un restaurant familial et traditionnel. « Pas de chichis, tout dans la qualité » : c’est ainsi qu’un convive résume la maison, et l’accueil y est chaleureux.",
      storyP2: "Le midi, la cuisine compose ses menus avec des produits frais de la région : un plat du jour, une courte carte, et des classiques préparés maison, des cuisses de grenouilles au roastbeef. Les desserts, eux aussi, sont faits maison.",
      storyP3: "Aux beaux jours, la terrasse fleurie offre un coin de calme dans les ruelles de la vieille ville, à deux pas du damier des rues de la ville horlogère, classée au patrimoine mondial de l’UNESCO.",
      regAddrL: "Adresse",
      regAreaL: "Quartier",
      regArea: "Vieille ville",
      regStyleL: "Style",
      regStyle: "Restaurant familial et traditionnel",
      regRateL: "Note Google",
      regRate: "4,8 avec 104 avis",
      regBookL: "Réservations",
      regBook: "Par téléphone au 032 964 11 00",
      knowTitle: "Bon à savoir",
      k1Title: "Cuisine maison",
      k1Text: "Plats et desserts sont préparés maison, avec des produits frais de la région.",
      k2Title: "Le midi d’abord",
      k2Text: "Plat du jour et menus du midi : c’est le cœur de la maison.",
      k3Title: "Terrasse fleurie",
      k3Text: "Un coin calme et fleuri en vieille ville, dès les beaux jours.",
      k4Title: "Réservation simple",
      k4Text: "Un coup de téléphone suffit pour réserver votre table.",
      bookTitle: "Réserver votre table",
      bookSub: "Ici, la réservation se fait par téléphone, simplement.",
      step1: "Appelez le 032 964 11 00.",
      step2: "Dites le jour et le nombre de convives.",
      step3: "Nous gardons votre table, en salle ou en terrasse.",
      bookCall: "Appeler : 032 964 11 00",
      visitTitle: "Nous trouver",
      vAddrTitle: "Adresse et contact",
      vFb: "Notre page Facebook",
      vDir: "Itinéraire",
      vHoursTitle: "Horaires",
      vHoursText: "Les horaires de la maison ne sont pas publiés de façon fiable en ligne : ils seront affichés ici dès qu’ils seront confirmés. Pour connaître les heures du jour, appelez-nous.",
      vHoursCta: "Demander les horaires",
      vAreaTitle: "La vieille ville",
      vAreaText: "La maison se trouve rue des Granges, dans la vieille ville de La Chaux-de-Fonds, la ville horlogère classée au patrimoine mondial de l’UNESCO avec Le Locle.",
      vDir2: "Ouvrir dans Google Maps",
      footSub: "Rue des Granges 5 · 2300 La Chaux-de-Fonds",
      footNote: "Note 4,8 avec 104 avis Google",
      footTop: "Retour en haut",
      barCall: "Appeler",
      barBook: "Réserver",
      barDir: "Itinéraire",
      barMenu: "La carte"
    },
    en: {
      skip: "Skip to the menu",
      wordmarkSub: "Old town · La Chaux-de-Fonds",
      navMenu: "The menu",
      navImages: "Gallery",
      navStory: "The house",
      navVisit: "Visit",
      navBook: "Book",
      mastTag: "A family-run, traditional restaurant in the old town of La Chaux-de-Fonds",
      mastAddr: "Rue des Granges 5 · 2300 La Chaux-de-Fonds",
      midiPrefix: "Today at the house:",
      ctaMenu: "See the menu",
      ctaReserve: "Call to book",
      stampScore: "4.8",
      stampText: "104 Google reviews",
      f1Title: "Everything is homemade",
      f1Text: "From the daily dishes to the desserts, the cooking is done on site, with no fuss.",
      f2Title: "Fresh regional produce",
      f2Text: "The menus are composed with fresh produce from the region.",
      f3Title: "A flower-filled terrace",
      f3Text: "A quiet, flower-filled corner in the lanes of the old town.",
      menuTitle: "The menu",
      menuSub: "A short menu, composed with the produce of the moment. Midday is the heart of the house: a dish of the day, a few dishes done well, and homemade desserts.",
      catMidi: "Midday",
      dPlatName: "Dish of the day",
      dPlat: "Composed each day with fresh produce from the region.",
      dMenusName: "Lunch menus",
      dMenus: "The midday menu, short and composed on the day itself.",
      catPlats: "House dishes",
      dGrenName: "Frog legs",
      dGren: "Fresh and prepared in house: a real treat, say the guests.",
      dRoastName: "Roast beef",
      dRoast: "The house classic, which guests call magical.",
      dEntreName: "Entrecôte",
      dEntre: "The entrecôte, simply prepared, for meat lovers.",
      dFiletName: "Fish fillets in beurre blanc",
      dFilet: "Fish fillets coated in a beurre blanc, all delicacy.",
      dTerrName: "Terrine",
      dTerr: "The terrine, to start, as in the old days.",
      dPorcName: "Porchetta",
      dPorc: "Porchetta, slowly roasted, tender and fragrant.",
      dFritesName: "Fries",
      dFrites: "Golden fries, served alongside the dishes.",
      catDouceurs: "Sweet things",
      dDessName: "Homemade desserts",
      dDess: "The desserts are homemade, and guests remember them.",
      menuNote: "This menu shows the dishes the house serves regularly. Prices are not published online: they will be added here as soon as the house has confirmed them. In the meantime, call us, we will tell you everything and take your booking.",
      menuCta: "Call the house",
      galTitle: "Gallery",
      galSub: "The dishes and the places that make the house, in a few pictures.",
      capGren: "Frog legs",
      capRoast: "Roast beef",
      capFilet: "Fillets in beurre blanc",
      capDess: "Homemade desserts",
      capSalle: "The dining room",
      capTerr: "The terrace",
      swipeHint: "Swipe to see more",
      storyTitle: "The house",
      storyP1: "In the heart of the old town of La Chaux-de-Fonds, the Café des Faucheurs is a family-run, traditional restaurant. “No fuss, everything in the quality”: that is how one guest sums up the house, and the welcome is warm.",
      storyP2: "At midday, the kitchen composes its menus with fresh produce from the region: a dish of the day, a short menu, and classics prepared in house, from frog legs to roast beef. The desserts, too, are homemade.",
      storyP3: "In fine weather, the flower-filled terrace offers a quiet corner in the lanes of the old town, a short walk from the chequerboard streets of the watchmaking town, a UNESCO World Heritage site.",
      regAddrL: "Address",
      regAreaL: "Quarter",
      regArea: "Old town",
      regStyleL: "Style",
      regStyle: "Family-run, traditional restaurant",
      regRateL: "Google rating",
      regRate: "4.8 from 104 reviews",
      regBookL: "Bookings",
      regBook: "By phone on 032 964 11 00",
      knowTitle: "Good to know",
      k1Title: "Homemade cooking",
      k1Text: "Dishes and desserts are prepared in house, with fresh produce from the region.",
      k2Title: "Midday first",
      k2Text: "Dish of the day and lunch menus: that is the heart of the house.",
      k3Title: "Flower-filled terrace",
      k3Text: "A quiet, flower-filled corner in the old town, as soon as the fine weather arrives.",
      k4Title: "Simple booking",
      k4Text: "One phone call is enough to book your table.",
      bookTitle: "Book your table",
      bookSub: "Here, booking is done by phone, simply.",
      step1: "Call 032 964 11 00.",
      step2: "Say the day and the number of guests.",
      step3: "We keep your table, in the dining room or on the terrace.",
      bookCall: "Call: 032 964 11 00",
      visitTitle: "Find us",
      vAddrTitle: "Address and contact",
      vFb: "Our Facebook page",
      vDir: "Directions",
      vHoursTitle: "Opening hours",
      vHoursText: "The house’s opening hours are not reliably published online: they will be shown here as soon as they are confirmed. To know today’s hours, call us.",
      vHoursCta: "Ask for the hours",
      vAreaTitle: "The old town",
      vAreaText: "The house stands on Rue des Granges, in the old town of La Chaux-de-Fonds, the watchmaking town listed as a UNESCO World Heritage site together with Le Locle.",
      vDir2: "Open in Google Maps",
      footSub: "Rue des Granges 5 · 2300 La Chaux-de-Fonds",
      footNote: "Rated 4.8 from 104 Google reviews",
      footTop: "Back to top",
      barCall: "Call",
      barBook: "Book",
      barDir: "Directions",
      barMenu: "Menu"
    }
  };

  var ROTATE = {
    fr: ["plat du jour", "cuisses de grenouilles", "roastbeef maison", "desserts maison"],
    en: ["dish of the day", "frog legs", "house roast beef", "homemade desserts"]
  };

  var TITLES = {
    fr: "Café des Faucheurs : restaurant familial en vieille ville, La Chaux-de-Fonds",
    en: "Café des Faucheurs: a family restaurant in the old town, La Chaux-de-Fonds"
  };

  var currentLang = "fr";

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key]) nodes[i].textContent = dict[key];
    }
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      var active = btns[j].getAttribute("data-lang") === lang;
      btns[j].classList.toggle("is-active", active);
      btns[j].setAttribute("aria-pressed", active ? "true" : "false");
    }
    document.title = TITLES[lang];
    var rw = document.getElementById("rotateWord");
    if (rw) rw.textContent = ROTATE[lang][0];
    try { window.localStorage.setItem("faucheurs-lang", lang); } catch (e) { /* private mode */ }
  }

  var langBtns = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener("click", function () {
      applyLang(this.getAttribute("data-lang"));
    });
  }
  try {
    var saved = window.localStorage.getItem("faucheurs-lang");
    if (saved && saved !== "fr" && I18N[saved]) applyLang(saved);
  } catch (e) { /* ignore */ }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Rotating midday dish (transform/opacity only) ---------- */
  var rotateEl = document.getElementById("rotateWord");
  if (rotateEl && !reducedMotion) {
    var idx = 0;
    window.setInterval(function () {
      var words = ROTATE[currentLang] || ROTATE.fr;
      rotateEl.classList.add("is-out");
      window.setTimeout(function () {
        idx = (idx + 1) % words.length;
        rotateEl.textContent = words[idx];
        rotateEl.classList.remove("is-out");
      }, 300);
    }, 3200);
  }
})();
