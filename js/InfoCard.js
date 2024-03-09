AFRAME.registerComponent("info-card", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createcard();
  },
  createcard: function () {
    booksInfo = {
      "1": {
        card_url: "./images/hp_1.PNG",
        title: "Harry Potter and the Philosopher's Stone",
        released_year: "1997",
        description:
          "Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned to become a student at Hogwarts, a school of Magic. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.",
      },
      "2": {
        card_url: "./images/hp_2.PNG",
        title: "Harry Potter and the Chamber of Secrets",
        released_year: "1998",
        description:
          "Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families.",
      },
      "3": {
        card_url: "./images/hp_3.PNG",
        title: "Harry Potter and the Prisoner of Azkaban",
        released_year: "1999",
        description:
          "Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.",
      },
      "4": {
        card_url: "./images/hp_4.PNG",
        title: "Harry Potter and the Goblet of Fire",
        released_year: "2000",
        description:
          "Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
      },
      "5": {
        card_url: "./images/hp_5.PNG",
        title: "Harry Potter and the Order of the Phoenix",
        released_year: "2003",
        description:
          "Harry must navigate the growing threat of Lord Voldemort while dealing with the pressures of adolescence and the Ministry of Magic's denial of Voldemort's return. The book explores themes of rebellion, friendship, and the power of standing up for what is right.",
      },
      "6": {
        card_url: "./images/hp_6.PNG",
        title: "Harry Potter and the Half-Blood Prince",
        released_year: "2005",
        description:
          "Harry Potter's sixth year at Hogwarts, the novel explores the past of the boy wizard's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.",
      },
      "7": {
        card_url: "./images/hp_7.PNG",
        title: "Harry Potter and the Deathly Hallows",
        released_year: "2007",
        description:
          "Harry Potter and the Deathly Hallows is the seventh and final installment of the Harry Potter series. It follows Harry's quest to find and destroy Voldemort's Horcruxes, while the wizarding world falls into chaos and darkness.",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-card`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 1.2,
      height: 1.7,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = booksInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 1,
      height: 0.6,
    });
    entityEl.setAttribute("material", { src: item.card_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.5, y: -0.1, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.90,
      height: 1.90,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.45, y: -0.4, z: 0.05 });
    return entityEl;
  },
});
