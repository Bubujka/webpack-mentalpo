var mymodule = require('./mymodule.js');
require('./mymodule.css');

//alert('hello '+mymodule.name);
document.write(require('./hello.html'));
document.write(JSON.stringify(require('./test.yaml')));

