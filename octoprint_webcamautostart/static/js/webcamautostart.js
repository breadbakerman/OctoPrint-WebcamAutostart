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

        self.onBeforeBinding = function () {
            console.log('-----------------> WEBCAM AUTOSTART');
        }
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: WebcamautostartViewModel,
        dependencies: [ 'settingsViewModel' ],
    });
});
