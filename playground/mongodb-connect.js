const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Impossible de se connecter a mongodb',err);
  }
  console.log('Connection réussie');

  db.collection('Todos').find({'liste.item2':false}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Impossible de récuperer todos', err);
  })

  // db.collection('Todos').insertOne({
  //   text:'victor',
  //   age: 25,
  //   liste: {
  //     item1: true,
  //     item2: false
  //   }
  // },(err,result) => {
  //   if (err) {
  //     return console.log('Impossible d`insérer');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
