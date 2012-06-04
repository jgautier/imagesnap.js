var exec = require('child_process').exec;
module.exports = function (callback) {
	exec('./bin/imagesnap -', function(err, stdout, stderr) {
		callback(stdout);
	});
}