const options={weekday: 'long', day: 'numeric', year: 'numeric'}
document.getElementById('currentdate').textContent=new Date().toLocaleDateString('en-US', options);