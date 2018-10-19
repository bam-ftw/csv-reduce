module.exports = require('yargs')
.option({
	// DB
	'in': {
		describe: '',
		type: 'string',
		alias: 'i',
		demandOption: true,
	},
	'out': {
		describe: 'path to output file, if not given data will be sent to stdout',
		type: 'string',
		alias: 'o',
		demandOption: false
	},
	'fields': {
		describe: 'comma separated list of fields from the input file that should be extracted',
		type: 'string',
		alias: 'f',
		demandOption: true,
	},
	'verbose': {
		default: false,
		describe: 'comma separated list of fields that should be extracted from input file',
		type: 'boolean',
		alias: 'v',
		demandOption: false,
	},
}).argv