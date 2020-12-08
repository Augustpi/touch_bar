const vscode = require("vscode");
const { exec } = require("child_process");

exports.activate = (context) => {
  context.subscriptions.push(
    vscode.commands.registercommand("touchbar.forward", () => {
      vscode.commands.executecommand("workbench.action.navigateForward");
    }),
    vscode.commands.registercommand("touchbar.back", () => {
      vscode.commands.executecommand("workbench.action.navigateBack");
    })
  );
};

exports.deactivate = () => { };
