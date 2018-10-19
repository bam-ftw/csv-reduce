# csv-reduce

Application for generating CSV data with subset of columns from a CSV file.

# Installation

```sh
npm i -g csv-reduce
```

# Arguments

`--in`, `-i` __(required)__ path to input file

`--fields`, `-f` __(required)__ comma separated list of fields from the input
file that should be extracted

`--out`, `-o` path to output file, if not given data will be sent to stdout

`--verbose` whether to print verbose info

# Example

Input file: `in.csv`
```csv
a,b,c
1,2,3
4,5,6
```

```sh
csv-reduce --in ./in.csv --fields a,c --out ./out.csv
```

Output file: `out.csv`
```csv
a,c
1,3
4,6
```
