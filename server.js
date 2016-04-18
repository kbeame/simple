var syrvup = require('simple-syrvup');

syrvup.port = 3000;

syrvup.server.listen(syrvup.port, () => {
  process.stdout.write('Server in UUUUUP\n');
});

var getArray = [
  { url: '/turtle', content: 'mooose'},
  { url: '/monkey', content: function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('yay');
    res.end();
  }}
];

syrvup.getEndpoints(getArray);
