# zip

## About

Gulp script for creating ZIP archive.

## Usage

gulp zip [options]

Output file: brand-1.4.0.zip or brand-1.4.0-env.zip

Where brand is variable (see option --brand=name below), version number is got from manifest.json file.
Optional env suffix is added if --env=name option has been used.

To add new directory to ZIP archive please add the entry to list at zip-build task in gulpfile.js

### Options

--brand=name  name is basename of output ZIP file and root directory inside the ZIP archive

--env=name    name is suffix for the ZIP file name
