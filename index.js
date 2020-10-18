const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

    },

    map: function(collection, callback){
      if (!(collection instanceOf Array)){
        collection = Object.values(collection)
      }

      let newArray = []

      for (let i = 0; i < collection.length; i++){
        newArray.push(callback(collection[i]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
