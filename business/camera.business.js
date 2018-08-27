const config = require('../config');
const execa = require('execa');
const os = require('os');

class CameraBusiness {
  
  constructor() { }

  async snap(pictureName) {

	if(os.type() == "Windows_NT") {
		//Windows
		//List devices typing in cmd ffmpeg -list_devices true -f dshow -i dummy
		return await execa('bin/ffmpeg.exe -f dshow -i video="Integrated Webcam" -vframes 1 ' + ('photos/' + pictureName));
	} else{
		//Linux
		//List devices typing in terminal v4l2-ctl --list-devices
	}
  
	//Original
    //return await execa('bin/ffmpeg.exe -f dshow -i video="Integrated Camera" -vframes 1 ' + ('photos/' + pictureName));
  }
}

module.exports = CameraBusiness;
