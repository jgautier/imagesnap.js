var spawn = require('child_process').spawn;
module.exports = function () {
	return spawn(__dirname + '/bin/imagesnap', ['-']).stdout;
}