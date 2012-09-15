// raises toolbox and docks of GIMP when GIMP picture window is activated

function raiseGimpWindows (raise) {
  var clients = workspace.clientList()
  for (var i=0; i<clients.length; i++) {
  // raise GIMP toolbox and docks
    if (clients[i].windowRole == "gimp-toolbox" || 
        clients[i].windowRole == "gimp-dock")  {
      clients[i].keepAbove = raise;
    }
  }
}


workspace.clientActivated.connect(function(client) {
  if (!client) {
      return;
  }
  if (client.windowRole == "gimp-image-window") {
  // a GIMP image window is activated
    raiseGimpWindows(true);
  }
  else {
    raiseGimpWindows(false);
  }
});

