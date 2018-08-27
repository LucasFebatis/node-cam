const config = require('../config');
const execa = require('execa');
const os = require('os');
const execSync  = require('child_process').execSync;

class CameraBusiness {
  
  constructor() { }

  async snap(pictureName) {

	if(os.type() == "Windows_NT") {
		//Windows
		//List devices typing in cmd ffmpeg -list_devices true -f dshow -i dummy
		return await execa('bin/ffmpeg.exe -f dshow -i video="Integrated Webcam" -vframes 1 ' + ('photos/' + pictureName));
	} else{
		//For Raspbian
		//List devices typing in terminal v4l2-ctl --list-devices
		return await execSync('ffmpeg -f v4l2 -i /dev/video0 -vframes 1 ' + ('photos/' + pictureName));
	}
  
	//Original
    //return await execa('bin/ffmpeg.exe -f dshow -i video="Integrated Camera" -vframes 1 ' + ('photos/' + pictureName));
  }
}

module.exports = CameraBusiness;
