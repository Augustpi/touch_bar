# Vscode Touchbar Extension for macbook

## When editor focus
![screenshot](https://raw.githubusercontent.com/Augustpi/touch_bar/master/doc-images/screenshot.png)

## When Terminal focus
![screenshot](https://raw.githubusercontent.com/Augustpi/touch_bar/master/doc-images/screenshot1.png)

### When editor focus

```
→ƒ      -> go to defination
→Ref    -> go to referance
⬓       -> Toggle terminal
>_      -> Show commands
/* */   -> Block comment / Comment out selected code
✎_      -> Rename
◧       -> Toggle sidebar
☰↓      -> Copy lines down
```

### When terminal focus
```
←◧→     -> Switch terminal window if splitted
close   -> hide terminal
Max-Min -> Maximize-Minimize internal terminal
```
### Disable VSCode default Touchbar commands

![disable-vscode-default-touchbar](https://raw.githubusercontent.com/Augustpi/touch_bar/master/doc-images/config.png)

```
  "keyboard.touchbar.ignored": [
    "workbench.action.debug.start",
    "workbench.action.debug.run",
    "workbench.action.debug.restart",
    "workbench.action.debug.stepOver",
    "workbench.action.debug.stepInto",
    "workbench.action.debug.stepOut",
    "workbench.action.debug.pause",
    "workbench.action.debug.disconnect",
    "workbench.action.debug.stop",
    "workbench.action.debug.restartFrame",
    "workbench.action.debug.continue",
    "workbench.action.newWindow",
    "workbench.action.navigateBack",
    "workbench.action.navigateForward"
  ],
```

# Install

Install link <https://marketplace.visualstudio.com/items?itemName=AvniOnurPehlivan.vscode-touch-bar>
