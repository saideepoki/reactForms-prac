// Copyright 2024 Saideep
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {useState} from 'react';

function Form () {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = (event) => {
           setEmail(event.target.value);
    }
    const handleUsername = (event) => {
        setUsername(event.target.value);
     }
   const handlePassword = (event) => {
       setPassword(event.target.value);
     }
    
     const handleSubmit = (event) => {
        event.preventDefault();
     }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type = 'text' value = {email} onChange = {handleEmail}/>
            </label>
            <label>
                username:
                <input type = 'text' value = {username} onChange = {handleUsername}/>
            </label>
            <label>
                password:
                <input type = 'password' value = {password} onChange = {handlePassword}/>
            </label>
            <button type = 'submit'>Submit</button>
          </form>
        </div>
    )
}

export default Form;