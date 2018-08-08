/*
 * View model for OctoPrint-WebcamAutostart
 *
 * Author: Breadbakerman
 * License: AGPLv3
 */
$(function() {
    function WebcamautostartViewModel(parameters) {
        var self = this;
        self.settings = parameters[0];
        
        self.enableWebcam = function () {
            var autostartWebcam = parseInt(self.settings.settings.plugins.webcamautostart.autostartWebcam());
            if (!autostartWebcam) {
                return
            }
            console.log('Automatically starting webcam...');
            OctoPrint.system.executeCommand('custom', 'webcamstart');
        }
        
        self.disableWebcam = function () {
            var autostopWebcam = parseInt(self.settings.settings.plugins.webcamautostart.autostopWebcam());
            if (!autostopWebcam) {
                return
            }
            console.log('Automatically stopping webcam...');
            OctoPrint.system.executeCommand('custom', 'webcamstop');
        }
        
        self.onEventPrintStarted = self.enableWebcam;
        self.onEventPrintDone = self.disableWebcam;
        self.onEventPrintFailed = self.disableWebcam;
    }
    
    OCTOPRINT_VIEWMODELS.push({
        construct: WebcamautostartViewModel,
        dependencies: [ 'settingsViewModel' ],
    });
});