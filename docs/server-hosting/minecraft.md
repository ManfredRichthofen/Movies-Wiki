---
sidebar_label: 'Setting up a Minecraft Server'
title: 'Setting up a Minecraft Server'
description: Guide to setting up and running a minecraft server.
tags:
  - Server
  - Games
  - Panel
---

## Minecraft 1.16.5

### Uploading Files

Upload the a zip then extract.

Make sure the files are in the root folder. For example all the files should be visible and not in another folder

### Choosing Java Version

In the server panel go to the startup tab and under docker image chose the correct **_Java Version_** for the Minecraft version you are playing on.

### Creating the Start Script

Create a file called start.sh

Make sure you change _INSTALL_JAR_ and _SERVER_JAR_ to the correct jar name

```sh title='start.sh'
#!/bin/sh

# Set Ram and Minecraft Jar names

INSTALL_JAR=forge-1.16.5-36.2.35-installer.jar
SERVER_JAR=forge-1.16.5-36.2.35.jar
MIN_RAM=1024M
MAX_RAM=4096M
JAVA_PARAMETERS=-XX:+UseG1GC -Dsun.rmi.dgc.server.gcInterval=2147483646 -XX:+UnlockExperimentalVMOptions -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M -Dfml.readTimeout=180

# Installs Forge

install_files() {
    java -jar ${INSTALL_JAR} --installServer > /dev/null 2>&1
}

echo "Installing Forge and required jars."
install_files
echo "Done!"

# Start the server.
start_server() {
    java -server -Xms${MIN_RAM} -Xmx${MAX_RAM} ${JAVA_PARAMETERS} -jar ${SERVER_JAR} nogui
}

echo "Starting Server..."
start_server

```
