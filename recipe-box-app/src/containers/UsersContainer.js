import React, {Componenent} from 'react' 

class UsersContainer extends Componenent {

    render(){
        return(
            <div>
                <p>UsersContainer</p>
                <Signup/>
                <Login/>
            </div>
        )
    }
}

export default UsersContainer