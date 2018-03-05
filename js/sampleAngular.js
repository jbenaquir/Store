(function () {
  var fruits =
    [{ id: 1, name: 'Apple', description: 'An apple is a sweet, edible fruit produced by an apple tree (Malus pumila).', price: 900, soldOut: false, images: ['images/apple.jpg', 'images/apple1.jpg'] },
    { id: 2, name: 'Pear', description: 'The pear is any of several tree and shrub species of genus Pyrus /ˈpaɪrəs/, in the family Rosaceae.', price: 800, soldOut: true, images: ['images/pear.jpg'] },
    { id: 3, name: 'Pineapple', description: 'The pineapple (Ananas comosus) is a tropical plant with an edible multiple fruit consisting of coalesced berries, also called pineapples, and the most economically significant plant in the Bromeliaceae family.', price: 1500, soldOut: false, images: ['images/pineapple.jpg'] },
    { id: 4, name: 'Orange', description: 'The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. ', price: 700, soldOut: false, images: ['images/orange.jpg', 'images/oranges.jpg'] },
    { id: 5, name: 'Banana', description: 'Bananas are a staple starch for many tropical populations. Depending upon cultivar and ripeness, the flesh can vary in taste from starchy to sweet, and texture from firm to mushy. ', price: 400, soldOut: false, images: ['images/banana.jpg', 'images/bananas.jpg'] }];


  var app = angular.module('fruitStore', []);

  app.controller('StoreController', function () {
    this.products = fruits;
  });

  app.controller('TabController', function () {
    
  });
})();