import axios from 'axios';

export default function BasicUserTable({users, currentUser, userCount, setUserCount}) {
    const updateUsername = (user, id) =>{
        const username = document.getElementById(id).value;
        user.username = username;
        if (username){
            updateUser(user);
        }
    }
    const updateEmail = (user, id) => {
        const email = document.getElementById(id).value;
        user.email = email;
        if (email){
            updateUser(user);
        }
    }
    const updateRole = (user, id) => {
        const role = document.getElementById(id).value;
        role.toLowerCase();

        if ((role === "busser") || (role === "server") || (role === "host") || (role === 'admin')){
            if (role === 'admin'){
                user.isAdmin = true;
            }
            user.role = role;
            updateUser(user);
        }
    }
    const updateUser = (user) => {
        try {
            axios.put(`http://localhost:5000/api/user/${user._id}`, { 
                username: user.username,
                email: user.email,
                password: user.password,
                role: user.role,
                secPassword: user.secPassword,
                profilePic: user.profilePic,
                isAdmin: user.isAdmin
            }, {
                user: {
                    username: currentUser.username,
                    email: currentUser.email,
                    password: currentUser.password,
                    role: currentUser.role,
                    secPassword: currentUser.secPassword,
                    profilePic: currentUser.profilePic,
                    isAdmin: currentUser.isAdmin
                },
                headers: {
                    token: `Bearer ${currentUser.accessToken}`
                },
            })
            .then((res) => {
                if (res.status !== 200) {
                    throw Error("Could not fetch the data for that resource.");
                }
                return res.data;
                })
            .catch((error) => {
                console.log(error);
            })
        } catch (errors) {
            console.error(errors);
        }
        setUserCount(userCount + 1);
    }
    const deleteUser = (user) =>{
        try {
            axios.delete(`http://localhost:5000/api/user/${user._id}`, {
                user: {
                    username: currentUser.username,
                    email: currentUser.email,
                    password: currentUser.password,
                    role: currentUser.role,
                    secPassword: currentUser.secPassword,
                    profilePic: currentUser.profilePic,
                    isAdmin: currentUser.isAdmin
                },
                headers: {
                    token: `Bearer ${currentUser.accessToken}`
                },
            })
            .then((res) => {
                if (res.status !== 200) {
                    throw Error("Could not fetch the data for that resource.");
                }
                return res.data;
                })
            .catch((error) => {
                console.log(error);
            })
        } catch (errors) {
            console.error(errors);
        }
        setUserCount(userCount + 1);
    }

    return(
        <div>
            {users.map((user) => (
            <div key={user.username} className="user">
                <div className="username">
                    <p>username:</p>
                    <p style={{fontWeight: 'bold'}}>{user.username}</p>
                    <input type="text" id={`userId-${user._id}`} />
                    <button type="button" onClick={() => updateUsername(user, `userId-${user._id}`)}>Update</button>
                </div>
                <div className="email">
                    <p>email:</p>
                    <p style={{fontWeight: 'bold'}}>{user.email}</p>
                    <input type="text" id={`userEmail-${user.email}`}/>
                    <button type="button" onClick={() => updateEmail(user, `userEmail-${user.email}`)}>Update</button>
                </div>
                <div className="role">
                    <p>role:</p>
                    <p style={{fontWeight: 'bold'}}>{user.role}</p>
                    <input type="text" id={`${user.role}-${user._id}`}/>
                    <button type="button" onClick={() => updateRole(user, `${user.role}-${user._id}`)}>Update</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <button type="button" style={{backgroundColor: 'red', border: 'none', fontSize: '15px', fontWeight: 'bold'}} onClick={() => deleteUser(user)}>Delete User</button>
                </div>
            </div>
        ))}
        </div>
    );


}