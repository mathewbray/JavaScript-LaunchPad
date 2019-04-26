var mode = process.env.mode; // 'PRODUCTION', for example
appdirectory = process.env.LAUNCHPADPATH;
comspec = process.env.ComSpec;

//////////////////////////////////////////////////////////
//// SSH WHEN ENTER IS PRESSED
function IsEnterSSH(e) {
	if (e.keyCode === 13) {
		sshSecureCRT();
	}
	return false;
}

//////////////////////////////////////////////////////////
//// SSH
function sshSecureCRT() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;

	hostname = document.getElementById('item-Hostname');

	//// GO TO LOG FUNCTION IF SWITCH TURNED ON 
	if (document.getElementById('sshLogToDesktopSwitch').checked) {
		sshSecureCRTlog();
		return;
	}

	//// CHECK FOR USERNAME - USE IT IF ENTERED
	/*username = document.getElementById('item-Username');
	if ( (username.value="") ) {
			COMMAND = appdirectory & "\bin\SecureCRT803\SecureCRT.exe" & " /T " & _
	"/SSH2 /ACCEPTHOSTKEYS " & host.value
	objShell.Run COMMAND, 1
		Exit Sub
	End If*/

	var output = exec(appdirectory + "\\bin\\SecureCRT803\\SecureCRT.exe /T /SSH2 /ACCEPTHOSTKEYS " + hostname.value);
	console.log(output);
}

//////////////////////////////////////////////////////////
//// SSH WITH LOG
function sshSecureCRTlog() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;

	//// Create Time Variable
	/*Set fso = CreateObject("Scripting.FileSystemObject")
	Const ForReading = 1, ForWriting = 2, ForAppending = 8
	strYear = Year(Date)
	strMonth = Month(Date) : If Len(m)=1 Then m = "0" & m : End If
	strDay = Day(Date) : If Len(d)=1 Then d = "0" & d : End If
	strHour = Hour(Time) : If Len(h)=1 Then h = "0" & h : End If
	strMinute = Minute(Time) : If Len(n)=1 Then : n = "0" & n : End If
	strSecond = Second(Time) : If Len(s)=1 Then : s = "0" & s : End If
	strMyDate = strYear & "." & strMonth & "." & strDay
	strMytime = strHour & "." & strMinute & "." & strSecond
	*/


	hostname = document.getElementById('item-Hostname');
	var output = exec(appdirectory + "\\bin\\SecureCRT803\\SecureCRT.exe /T /SSH2 /ACCEPTHOSTKEYS " + hostname.value);
	console.log(output);
}

//////////////////////////////////////////////////////////
//// 2FA
function sshSecureCRT2FA() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;

	hostname = document.getElementById('item-Hostname');
	var output = exec(appdirectory + "\\bin\\SecureCRT803\\SecureCRT.exe /T /SSH2 /ACCEPTHOSTKEYS /AUTH publickey " + hostname.value);
	console.log(output);
}

//////////////////////////////////////////////////////////
//// SCP
function scpSecureFX() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;


	hostname = document.getElementById('item-Hostname');
	var output = exec(appdirectory + "\\bin\\SecureCRT803\\SecureFX.exe  " + hostname.value);
	console.log(output);
}

//////////////////////////////////////////////////////////
//// SFTP
function sftpSecureFX() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;


	hostname = document.getElementById('item-Hostname');
	var output = exec(appdirectory + "\\bin\\SecureCRT803\\SecureFX.exe  " + hostname.value);
	console.log(output);

}

//////////////////////////////////////////////////////////
//// FTP
function ftpSecureFX() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;


	var donotcontinue = prompt("TL;DR: DO NOT USE FTP.\n\nFTP sends your username AND PASSWORD in PLAIN TEXT.\nOnly use this for security testing purposes (with fake or temp credentials).\nEnter the following to continue:\nI understand the risks and hate network security.", "");
	if (donotcontinue != null) {
		if (donotcontinue == "I understand the risks and hate network security.") {
			if (confirm("4chan will sniff your username and password if you click OK.\nPlease click CANCEL.") == true) {
				hostname = document.getElementById('item-Hostname');
				var output = exec(appdirectory + "\\bin\\SecureCRT803\\SecureCRT.exe /T /TELNET " + hostname.value);
				console.log(output);
			}
		}
	}
}

//////////////////////////////////////////////////////////
//// TELNET
function telnetSecureCRT() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;


	var donotcontinue = prompt("TL;DR: DO NOT USE TELNET.\n\nTelnet sends your username AND PASSWORD in PLAIN TEXT.\nOnly use this for security testing purposes (with fake or temp credentials).\nEnter the following to continue:\nI understand the risks and hate network security.", "");
	if (donotcontinue != null) {
		if (donotcontinue == "I understand the risks and hate network security.") {
			if (confirm("4chan will sniff your username and password if you click OK.\nPlease click CANCEL.") == true) {
				hostname = document.getElementById('item-Hostname');
				var output = exec(appdirectory + "\\bin\\SecureCRT803\\SecureCRT.exe /T /TELNET " + hostname.value);
				console.log(output);
			}
		}
	}
}

//////////////////////////////////////////////////////////
//// CONSOLE
function consoleSecureCRT() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;

	comport = document.getElementById('item-comPort');
	baud = document.getElementById('item-baud');
	var output = exec(appdirectory + "\\bin\\SecureCRT803\\SecureCRT.exe /SERIAL com" + comport.value + " /BAUD " + baud.value);
	console.log(output);
}


//////////////////////////////////////////////////////////
//// Ping!!
function pingPong() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;

 //// if(DNS is checked){ go to DNS 
   if (document.getElementById('pingDNS').checked){
   pingWithDNS();
   return;
   }

	var pingip = document.getElementById('item-pingHostname');

	// INITIAL (HIDDEN) CMD THAT TRIGGERS VISIBLE CMD
	var trigger = comspec + " /c start " + comspec + " /c " 
	// RUN COMMAND
	var output = exec(trigger + "ping -t " + pingip.value);
	console.log(output);
}

//////////////////////////////////////////////////////////
//// Run Ping when Enter is pressed
function IsEnterPing(e) {
 if (e.keyCode === 13){
  ping();
 }
 return false;
}

//////////////////////////////////////////////////////////
//// Ping with DNS!!
function pingWithDNS() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;
var output = execSync(appdirectory + "ping -t -a " + pingip.value);
	console.log(output);
}


//////////////////////////////////////////////////////////
//// Trace Route!!
function traceroute() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;

 //// if(DNS is checked){ go to DNS 
   if (document.getElementById('dnscheckbox').checked){
   tracerouteWithDNS();
   return;
   }

var output = execSync(appdirectory + "tracert.exe -d " + pingip.value);
	console.log(output);
}

//////////////////////////////////////////////////////////
//// Trace Route DNS - RESOLVE IP TO HOSTNAME !!
function tracerouteWithDNS() {

	var gui = require('nw.gui')
		, nwShell = gui.Shell
		, child_process = require('child_process')
		, exec = child_process.exec
		, execSync = child_process.execSync
		, execFile = child_process.execFile
		, execFileSync = child_process.execFileSync
		;

var output = execSync(appdirectory + "tracert.exe " + pingip.value);
	console.log(output);
}
