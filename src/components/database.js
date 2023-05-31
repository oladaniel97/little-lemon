// import SQLite from 'react-native-sqlite-storage';


// const db = SQLite.openDatabase('little-lemon');
// console.log('db :',db)

//  export const createTable = () => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, description TEXT,image TEXT, category TEXT)',
//         [],
//         () => {
//           console.log('Table created successfully');
//         },
//         (error) => {
//           console.log('Error creating table:', error);
//         }
//       );
//     });
//   };

// export  const insertItems = () => {
//     db.transaction((tx) => {
//       items.forEach((item) => {
//         tx.executeSql(
//           'INSERT INTO items (name, price, description,image, category) VALUES (?, ?, ?, ?, ?)',
//           [item.name, item.price, item.description,item.image, item.category],
//           () => {
//             console.log('Item inserted successfully');
//           },
//           (error) => {
//             console.log('Error inserting item:', error);
//           }
//         );
//       });
//     });
//   };
  