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
    const handleEmail = (event) => {
           console.log(event.target.value);
           setEmail(event.target.value); 
    }
    return (
        <div>
          <form>
            <label>
                Email:
                <input type = 'text' value = {email} onChange = {handleEmail}/>
            </label>
          </form>
        </div>
    )
}

export default Form;