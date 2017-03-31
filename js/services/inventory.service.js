angular.module('inventory').service('InvService', function(localStorageService) {
    var items = [{
        "id": 89274,
        "name": "golf club",
        "price": 98,
        "quantity": 10,
        "color": "black",
        "discount": 0
    }, {
        "id": 64,
        "name": "iPhone",
        "price": 499,
        "quantity": 2,
        "color": "white",
        "discount": 0
    }, {
        "id": 87363,
        "name": "bonzai tree",
        "price": 76,
        "quantity": 2,
        "color": "green",
        "discount": 0
    }, {
        "id": 1736,
        "name": "towel",
        "price": 55,
        "quantity": 30,
        "color": "brown",
        "discount": 10
    }, {
        "id": 4836,
        "name": "dog bed",
        "price": 99,
        "quantity": 10,
        "color": "beige",
        "discount": 50
    }, {
        "id": 829,
        "name": "waste basket",
        "price": 15,
        "quantity": 40,
        "color": "silver",
        "discount": 0
    }, {
        "id": 46,
        "name": "guitar",
        "price": 899,
        "quantity": 0,
        "color": "blue",
        "discount": 150
    }, {
        "id": 17456,
        "name": "matcha tea",
        "price": 42,
        "quantity": 4,
        "color": "green",
        "discount": 11
    }, {
        "id": 533,
        "name": "eggs",
        "price": 5,
        "quantity": 12,
        "color": "brown",
        "discount": 1
    }, ];


    function getInventory() {
        var itemsToReturn = localStorageService.get('items');
        if (!itemsToReturn) {
            itemsToReturn = items;
        }
        return itemsToReturn;
    }

    function setInventory(items) {
        localStorageService.set('items', items);
    }

    function updateInventory(item) {
      var itemsInStorage = localStorageService.get('items');
        for (var i = 0; i < itemsInStorage.length; i++) {
          if (itemsInStorage[i].id === item.id) {
            itemsInStorage[i].quantity = item.quantity;
          }
        }
        localStorageService.set('items', itemsInStorage);
    }


    return {
        get: getInventory,
        set: setInventory,
        update: updateInventory
    };
});
