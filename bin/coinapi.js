#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json')
program
.version(pkg.version)
.command('key','MANAGE API KEY -- https://www.coinapi.io/')
.command('check','Check Coin Price Info')
.parse(process.argv)