export default class Item {
  constructor(name) {
    this.name = name;
    this.id = Math.random().toString(36).substr(2, 9);
  }
}
