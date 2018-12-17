import * as theia from '@theia/plugin';
import * as request from 'request-promise-native';

export function start () {
  theia.commands.registerCommand(
    {
      id: 'che-plugin-sandbox-ui',
      label: 'Sandbox Plugin: Hello World'
    },
    async function () {
      var options = {
        method: 'GET',
        uri: 'http://test:8080/test'
      }
      try {
        var data = JSON.parse(await request(options));
        theia.window.showInformationMessage(data);
      } catch (error) {
        theia.window.showErrorMessage('Unable to invoke service request');
        console.error(error);
      }
    }
  );
}
