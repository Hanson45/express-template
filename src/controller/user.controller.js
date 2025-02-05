import  {db}  from "../data/db.js";


export const getUsers = async (req, res) => {
  try {
    const {email, name, lastname} = req.query;

    const filteredUsers = db.users.filter(user => 
        (!email || user.email === email) &&
        (!name || user.name === name) &&
        (!lastname || user.lastname === lastname)
    );

    if (filteredUsers.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json( filteredUsers );

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


export const addUser = async (req, res) => {
    try {
      const newUser = req.body; 
      db.users.push(newUser);
      
      
      res.status(201).json({ newUser });
      
    } catch (error) {
      res.status(404).json({ message: error.message });
      console.error(error);
    }
}


export const deleteUser = async (req, res) => {
    try {
        const { email, name, lastname } = req.query;

        if (!email && !name && !lastname) {
            return res.status(400).json({ message: "You must provide at least one filter (email, name, or lastname)." });
        }

        const initialLength = db.users.length;

        db.users = db.users.filter(user =>
            !( (email && user.email === email) ||
               (name && user.name === name) ||
               (lastname && user.lastname === lastname) )
        );

        if (db.users.length === initialLength) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


