import * as SQLite from "expo-sqlite";


const db = SQLite.openDatabaseAsync("subscriptions_db");

export const initDB = async() => {
    
    (await db).execAsync(
        `CREATE TABLE IF NOT EXISTS subscriptions(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        billingCycle TEXT NOT NULL,
        paymentDate TEXT NOT NULL,
        icon TEXT
        );`
    );
    
};


export const insertSubscription = async(
    name,
    price,
    billingCycle,
    paymentDate,
    icon
)=>{
    return (await db).runAsync(
        `INSERT INTO subscriptions
        (name, price, billingCycle, paymentDate, icon)
        VALUES (?, ?, ?, ?, ?);`,
        [name,price,billingCycle,paymentDate,icon]
    );
};

export const fetchSubscriptions = async() =>{
    return await (await db).getAllAsync("SELECT * FROM subscriptions;")
}

export const removeSubscription = async(id) =>{
    return (await db).runAsync(
        `DELETE FROM subscriptions WHERE id=?;`,
        [id]
    );
}

export async function resetDB() {
    const database = await db;
    await database.execAsync(`DROP TABLE IF EXISTS subscriptions;`);
  }