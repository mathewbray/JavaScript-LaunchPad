#--- Generate Current Date Variable
$date = $date.ToString('yyyy-MM-dd_HH-mm-ss')

$source = $appFolder
$destination = "$env:TEMP\LaunchPad Backup $date.zip"
$destinationFinal = "$appFolder\LaunchPad JS Backup $date.zip"

If(Test-path $destination) {Remove-item $destination}

Write-Host "Zipping..."

[Reflection.Assembly]::LoadWithPartialName( "System.IO.Compression.FileSystem" )
[System.IO.Compression.ZipFile]::CreateFromDirectory($Source, $destination) 

Copy-Item $destination $destinationFinal

$wshell = New-Object -ComObject Wscript.Shell
$wshell.Popup("Backup Completed!",0,"Done!",0x1)