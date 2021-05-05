import React, { useEffect, useState} from "react";
import api from "../utils/api";

function Profile() {
    const [user, setUser] = useState({});
    
    useEffect(() => {
        api.currentUser()
          .then((user) => {
              setUser(user.data);
          })
      }, []);

    return (
        <div>

            <div>
                Welcome {user.firstName}
            </div>
            <div>
                {user.email}

            </div>
        </div>
    )
}

export default Profile;