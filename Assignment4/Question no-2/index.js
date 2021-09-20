camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));