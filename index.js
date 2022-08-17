function myEach(collection, callback) {
    let newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
    for (let i = 0; i < newCollection.length; i++)
    callback(newCollection[i])

    return collection
}

function myMap(collection, callback) {
    if (!Array.isArray(collection)) collection = Object.values(collection)

    const newArray = []

    for (let i = 0; i < collection.length; i++)
      newArray.push(callback(collection[i]))

    return newArray
}

function myReduce(collection, callback, acc) {
    if (!Array.isArray(collection)) collection = Object.values(collection)

    if (!acc) {
      acc = collection[0]
      collection = collection.slice(1)
    }

    for (let i=0; i < collection.length; i++){
      acc = callback(acc, collection[i], collection)
    }

    return acc
}

function myFind(collection, predicate) {
    if (!Array.isArray(collection)) collection = Object.values(collection)
    for (let i=0; i < collection.length; i++){
        if (predicate(collection[i])) return collection[i];
      }
      return undefined
}

function myFilter(collection, predicate) {
    if (!Array.isArray(collection)) collection = Object.values(collection)
    let newCollection = [];

    for (let i=0; i < collection.length; i++) {
        if (predicate(collection[i])) newCollection.push(collection[i]);
    }
    return newCollection
}

function mySize(collection) {
    return !Array.isArray(collection) ? Object.values(collection).length : collection.length
}

function myFirst(array, n) {
    return !n ? array[0]: array.slice(0, n)
}

function myLast(array, n) {
    return !n ? array[array.length-1]: array.slice(array.length - n)
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}