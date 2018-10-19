module.exports = require('yargs')
.option({
	// DB
	'in': {
		default: '',
		describe: '',
		type: 'string',
		alias: 'i'
	},
	'out': {
		default: 'path to input file',
		describe: 'path to output file, if not given data will be sent to stdout',
		type: 'string',
		alias: 'o'
	},
	'fields': {
		default: '',
		describe: 'comma separated list of fields from the input file that should be extracted',
		type: 'string',
		alias: 'f'
	},
	'verbose': {
		default: '',
		describe: 'comma separated list of fields that should be extracted from input file',
		type: 'string',
		alias: 'v'
	},
}).argv