(function () {
  // 上一次创建的食物
  let lastFood = [];

  function Food(parent, obj) {
    obj = obj || {}
    this.width = obj.width || 20;
    this.height = obj.height || 20;
    this.backgroundColor = obj.backgroundColor || 'red';
    this.x = obj.x || 0;
    this.y = obj.y || 0;

    this.div = document.createElement("div");
    parent.appendChild(this.div)
    lastFood.push(this.div)
    remove();

    this.parent = parent
    this.init()
  }

  Food.prototype.init = function () {
    let div = this.div;
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.backgroundColor;
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";

    div.style.position = "absolute";
  }

  Food.prototype.random = function () {
    this.x = Tools.createRandom(0, this.parent.offsetWidth - this.width);
    this.y = Tools.createRandom(0, this.parent.offsetHeight - this.height);

    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";
  }

  function remove() {
    for (let i = lastFood.length - 1; i >= 0; i--) {
      lastFood[i].parentNode.removeChild(lastFood[i])
      lastFood[i].splice(i, 1)
    }
  }
})()