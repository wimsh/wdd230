const options={weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
let currentyear={year: 'numeric'}
document.getElementById('currentyear').textContent=new Date().toLocaleDateString('en-US', currentyear);
document.getElementById('lastmodified').textContent=new Date(document.lastModified).toLocaleDateString('en-US', options);
