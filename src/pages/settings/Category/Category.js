class Category {
    constructor(id, name, parent = null) {
      this.id = id;
      this.name = name;
      this.parent = parent;
      this.children = [];
    }
  
    addChild(childCategory) {
      this.children.push(childCategory);
    }
  }
  
  export default Category;