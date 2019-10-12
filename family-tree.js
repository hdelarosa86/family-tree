class FamilyTree {
  constructor(value) {
    if (typeof value !== 'string') {
      throw 'Error, provide a valid value!';
    }
    this.children = [];
    this.value = value;
  }

  insert(name) {
    let child = new FamilyTree(name);
    this.children.push(child);
  }

  familySize() {
    return this.children.length + 1;
  }

  findMember(name) {
    return this.children
      .filter(child => {
        return child.value === name ? child : undefined;
      })
      .pop();
  }

  log() {
    let str = '';
    let dashes = '--';
    function helper(obj) {
      str += `${dashes} ${obj.value}\n`;
      if (obj.children.length > 0) {
        dashes += '--';
        obj.children.forEach(val => {
          str = helper(val);
        });
        dashes = dashes.slice(0, 4);
      }
      return str;
    }
    helper(this);
    return str;
  }
}

module.exports = FamilyTree;