AFRAME.registerComponent("hp-books", {
  init: function () {
    this.booksContainer = this.el;
    this.books();
  },

  books: function () {
    const booksRef = [
      {
        id: "1",
        url: "./images/hp_1.PNG",
      },
      {
        id: "2",
        url: "./images/hp_2.PNG",
      },
      {
        id: "3",
        url: "./images/hp_3.PNG",
      },
      {
        id: "4",
        url: "./images/hp_4.PNG",
      },
      {
        id: "5",
        url: "./images/hp_5.PNG",
      },
      {
        id: "6",
        url: "./images/hp_6.PNG",
      },
      {
        id: "7",
        url: "./images/hp_7.PNG",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of booksRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // card Element
      const card = this.createCard(item);
      borderEl.appendChild(card);

      this.booksContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40,
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });
    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  },
  createCard: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28,
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
});
