const process = require('process')
const readline = require('readline')
const fs = require('fs')
const config = require('./config')

const lineReader = readline.createInterface({
  input: fs.createReadStream(config.i)
})

const writeStream = config.o ? fs.createWriteStream(config.o) : process.stdout

let indexes = null
let lineNum = 0

lineReader.on('line', line => {
	if (indexes === null) {
		const header = line.toString().split(',')
		indexes = config.f.split(',').map(el => header.indexOf(el)).filter(el => el != -1)
		const headerFiltered = indexes.map(idx => header[idx])
		const newHeaderLine = headerFiltered.join(',')

		writeLine(newHeaderLine)
	} else {
		const parts = line.toString().split(',')
		const newLine = indexes.map(idx => parts[idx]).join(',')

		writeLine(newLine)

		if (config.v && ++lineNum % 10000 == 0) {
			console.error(`${lineNum} lines parsed`)
		}
	}
})

function writeLine(line) {
	if (writeStream) {
		writeStream.write(`${line}\n`)
	} else {
		console.log(line)
	}
}
