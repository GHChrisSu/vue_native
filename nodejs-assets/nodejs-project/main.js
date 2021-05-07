// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.

import { createRxDatabase } from 'rxdb';
createRxDatabase({
  name: 'heroesdb',           // <- name
  adapter: 'idb',          // <- storage-adapter
  password: 'myPassword',     // <- password (optional)
  multiInstance: true,         // <- multiInstance (optional, default: true)
  eventReduce: false // <- eventReduce (optional, default: true)
}).then((db) => {
  console.dir(db);
});

var rn_bridge = require('rn-bridge');

// Echo every message received from react-native.
rn_bridge.channel.on('message', (msg) => {
  rn_bridge.channel.send(msg);
});

// Inform react-native node is initialized.
rn_bridge.channel.send('Node was initialized.');
