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
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });
    const handleFormData = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (event) => {
         event.preventDefault();
         console.log(formData);
    }
    return (
        <div>
          <form onSubmit = {handleSubmit}>
            <label>
                Email:
                <input type = 'text' name = 'email' value = {formData.email} onChange = {handleFormData}/>
            </label>
            <label>
                username:
                <input type = 'text' name = 'username' value = {formData.username} onChange = {handleFormData}/>
            </label>
            <label>
                password:
                <input type = 'password' name = 'password' value = {formData.password} onChange = {handleFormData}/>
            </label>
            <button type = 'submit'>Submit</button>
          </form>
        </div>
    )
}

export default Form;