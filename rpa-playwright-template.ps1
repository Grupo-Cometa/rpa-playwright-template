# rpa-playwright-template.ps1

$scriptDir = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
$cliPath = Join-Path -Path $scriptDir -ChildPath "cli.js"

node $cliPath $args
