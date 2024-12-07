/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const container = document.getElementById("keyContainer");
container.innerHTML = generateHTML("-","-","-");

window.addEventListener("keydown", (e) =>{

    container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
});

function generateHTML(key,code,keyCode){

    return `
    <div class="key-container">
        <h4>Key</h4>
        <div class = "key-content">${key === " "? "Space" : key}
        </div>    
    </div>

    <div class="key-container">
        <h4>Code</h4>
        <div class = "key-content">${code}
        </div>    
    </div>

    <div class="key-container">
        <h4>Key Code</h4>
        <div class = "key-content">${keyCode}
        </div>    
    </div>
    
    
    `;
}

