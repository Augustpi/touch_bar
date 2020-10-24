const vscode = require("vscode");
const { exec } = require("child_process");

exports.activate = (context) => {
  context.subscriptions.push(
    vscode.commands.registercommand("ssen.touchbar.run", () => {
      vscode.commands.executecommand("workbench.action.debug.run");
    }),
    vscode.commands.registercommand("ssen.touchbar.debug", () => {
      vscode.commands.executecommand("workbench.action.debug.start");
    })
  );
};

exports.deactivate = () => {};
