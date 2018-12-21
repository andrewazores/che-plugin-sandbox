#!/bin/sh
set -e
set -u

if [ -f che-plugin-sandbox.tar.gz ]; then
    rm che-plugin-sandbox.tar.gz
fi

if [ ! -f ../ui/che_plugin_sandbox.theia ]; then
    echo "Theia plug-in does not exist. Please compile Theia plug-in first"
    echo "in ../ui directory"
    exit 1
fi

echo "Creating tar"
tar cvf che-plugin-sandbox.tar -C ../ui che_plugin_sandbox.theia
cd etc
tar uvf ../che-plugin-sandbox.tar .
cd ..
gzip che-plugin-sandbox.tar
