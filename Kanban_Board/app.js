class kanbanAPI {
  static getItems(columnId) {
    const column = read().find((column) => column.id == columnId);
    if (!column) {
      return [];
    }

    return column.items;
  }

  static insertItem(columnId, content) {
    const data = read();
    const column = data.find((column) => column.id == columnId);
    const item = {
      id: Math.floor(Math.random() * 10000),
      content,
    };
    if (!column) {
      throw new Error("Column does not exist.");
    }

    column.items.push(item);
    save(data);
    return item;
  }

  static updateItem(itemId, newProps) {
    const data = read();
    const [item, currenColumn] = (() => {
      for (const column of data) {
        const item = column.items.find((item) => item.id == itemId);

        if (item) {
          return [item, column];
        }
      }
    })();
    if (!item) {
      throw new Error("Item not found.");
    }

    item.content =
      newProps.content === undefined ? item.content : newProps.content;

    // Update column andd position

    if (newProps.columnId !== undefined && newProps.position !== undefined) {
      const targetColumn = data.find(
        (column) => column.id === newProps.columnId
      );
    }

    if (!targetColumn) {
      throw new Error("Target colum not found.");
    }
    currenColumn.items.splice(currenColumn.items.indexOf(item), 1);
    targetColumn.items.splice(newProps.position, 0, item);
    save(data);
  }

  static deleteItem(itemId) {
    const data = read();
    for (const column of data) {
      const item = column.items.find((item) => item.id == itemId);
      if (item) {
        column.items.splice(column.items.indexOf(item), 1);
      }
    }
    save(data);
  }
}

function read() {
  const json = localStorage.getItem("kanban-data");

  if (!json) {
    return [
      { id: 1, items: [] },
      { id: 2, items: [] },
      { id: 3, items: [] },
    ];
  }

  return JSON.parse(json);
}

function save(data) {
  localStorage.setItem("kanban-data", JSON.stringify(data));
}

// console.log(kanbanAPI.getItems(2));
// console.log(kanbanAPI.insertItem(2, "im new"));
// kanbanAPI.deleteItem(7322);

/////////////////////////////////////////////////

class Kanban {
  constructor(root) {
    this.root = root;
    Kanban.columns().forEach((column) => {
      //
      const columnView = new Column(column.id, column.title);
      this.root.appendChild(columnView.elements.root);
    });
  }

  static columns() {
    return [
      { id: 1, title: "Not Started" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Completed" },
    ];
  }
}
////////////////////////////////////
class Column {
  constructor(id, title) {
    this.elements = {};
    this.elements.root = Column.createRoot();
    this.elements.title = this.elements.root.querySelector(
      ".kanban__column-title"
    );
    this.elements.items = this.elements.root.querySelector(
      ".kanban__column-items"
    );
    this.elements.addItem =
      this.elements.root.querySelector(".kanban__add-item");

    this.elements.root.dataset.id = id;
    this.elements.title.textContent = title;

    // this.elements.addItem.addEventListener("click", () => {});
    kanbanAPI.getItems(id).forEach((item) => {
      console.log(item);
    });
  }
  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    return range.createContextualFragment(`
    <div class="kanban--column">
      <div class="kanban__column-title"></div>
      <div class="kanban__column-items"></div>
      <button class="kanban--add-item">+ Add</button>
    </div>
    `).children[0];
  }
  renderItem(data) {
    const item = new Item(data.id, data.content);
    this.elements.items.appendChild(item.elements.root);
  }
}

///
new Kanban(document.querySelector(".kanban"));

/////////////////////////////////////

class Item {
  constructor(id, content) {
    this.elements = {};
    this.elements.root = Item.createRoot();
    this.elements.input = this.elements.root.querySelector(
      ".kanban__item-input"
    );
    this.elements.root.dataset.id = id;
    this.elements.input.textContent = content;
    this.content = content;
  }

  static createRoot() {
    const range = document.createRange();

    range.selectNode(document.body);

    return range.createContextualFragment(`
    <div class="kanban__item draggable="true">
    <div class= "kanban__item-input" contenteditable></div>
    </div>
    `).children[0];
  }
}
