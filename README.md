Based on [che-service-plugin](https://github.com/ws-skeleton/che-service-plugin).

Deployment steps:

Go to che.openshift.io and create an account, if not yet done.
Create a new workspace named something like "che-plugin-dev".
Select the "Che" stack. Add this project to the workspace.
Then open the workspace.

Use the Command Palette or Ctrl-` to open a terminal in `ws/theia-ide`.
`cd` into `/projects/che-plugin-sandbox` . `cd` into the ui directory and
run `sh build.sh`.

TODO: determine if these steps are really all necessary
Open a terminal in `ws/dev`. `cd` into `/projects/che-plugin-sandbox` .
`cd` into the `assembly` directory and run `sh build.sh`. Do
`cp che-plugin-sandbox.tar.gz ..` to copy the tarball back to the project
root. `cd .. && tar xzvf che-plugin-sandbox.tar.gz` to place the built
plugin files in the project root. `cd /projects` and then
`publish_plugin che-plugin-sandbox 1.0.0 che` to deploy the plugin to the
local plugin registry. The console output will contain a resultant URL like
`https://che-plugin-registry-aazores.8a09.starter-us-east-2.openshiftapps.com/plugins/che-plugin-sandbox/1.0.0/meta.yaml`
. Take note of this URL.

Go to the Che dashboard and stop your "che-plugin-dev" workspace.
Create a new workspace, but choose "Edit" rather than "Open" after
creation. Go to the "Config" tab and scroll down to the "plugins" key.
This is a comma-separated list of plugin identifiers and versions.
Add the local plugin registry URL to this plugin, slightly modified
so that it looks like this:
`https://che-plugin-registry-aazores.8a09.starter-us-east-2.openshiftapps.com/plugins/che-plugin-sandbox:1.0.0`
. Open the workspace. Once it has loaded, open the Command Palette and type "Sandbox".
This plugin's backend Sandbox command should appear in the command list.
Press "Enter" to select it and a Hello World message should appear, served
by the implementation in this plugin's "service" directory.
