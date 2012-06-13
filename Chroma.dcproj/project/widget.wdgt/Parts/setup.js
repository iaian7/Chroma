/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */
var dashcodePartSpecs = {
    "accuracy": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "name": "accuracy", "onchange": "updateAccuracy", "options": [["0.00", "2"], ["0.0000", "4", true], ["0.000000", "6"], ["0.00000000", "8"]], "rightImageWidth": 16, "view": "DC.View" },
    "accuracyText": { "text": "accuracyText", "view": "DC.Text" },
    "cancelButton": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "showMain", "rightImageWidth": 5, "text": "cancelButton", "view": "DC.View" },
    "cancelButton1": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "showMain", "rightImageWidth": 5, "text": "cancelButton", "view": "DC.View" },
    "createButton": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "createLibrary", "rightImageWidth": 5, "text": "createButton", "view": "DC.View" },
    "createText": { "text": "createText", "view": "DC.Text" },
    "doneSave": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "showFront", "rightImageWidth": 5, "text": "doneButton", "view": "DC.View" },
    "downloadButton": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "versionDownload", "rightImageWidth": 5, "text": "downloadButton", "view": "DC.View" },
    "failRepeat": { "text": "failRepeat", "view": "DC.Text" },
    "failText": { "text": "failText", "view": "DC.Text" },
    "formatHSV": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "name": "formatHSV", "onchange": "updateFormatHSV", "options": [["360, 100, 100", "degrees"], ["255, 255, 255", "integer"], ["100, 100, 100", "percent"], ["1.0, 1.0, 1.0", "float"]], "rightImageWidth": 16, "view": "DC.View" },
    "formatHSVText": { "text": "formatHSVText", "view": "DC.Text" },
    "formatRGB": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "name": "formatRGB", "onchange": "updateFormatRGB", "options": [["255, 255, 255", "integer"], ["100, 100, 100", "percent"], ["1.0, 1.0, 1.0", "float"]], "rightImageWidth": 16, "view": "DC.View" },
    "formatRGBText": { "text": "formatRGBText", "view": "DC.Text" },
    "iaian7com": { "text": "iaian7com", "view": "DC.Text" },
    "image": { "view": "DC.ImageLayout" },
    "info": { "backgroundStyle": "black", "creationFunction": "CreateInfoButton", "foregroundStyle": "white", "frontID": "front", "onclick": "showBack", "view": "DC.View" },
    "label": { "view": "DC.Text" },
    "labelHEX": { "text": "ItemHEX", "view": "DC.Text" },
    "labelHSV": { "text": "ItemHSV", "view": "DC.Text" },
    "labelRGB": { "text": "ItemRGB", "view": "DC.Text" },
    "list": { "allowsEmptySelection": true, "dataArray": ["Item 1", "Item 2", "Item 3"], "dataSourceName": "listDataSource", "labelElementId": "label", "listStyle": "List.EDGE_TO_EDGE", "sampleRows": 3, "selectionEnabled": true, "useDataSource": true, "view": "DC.List" },
    "new": { "text": "newText", "view": "DC.Text" },
    "newVersion": { "text": "newVersion", "view": "DC.Text" },
    "preferenceText": { "text": "preferenceText", "view": "DC.Text" },
    "saveAlert": { "text": "mustContain", "view": "DC.Text" },
    "saveSwatch": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "addLibrary", "rightImageWidth": 5, "text": "saveSwatch", "view": "DC.View" },
    "scrollArea": { "autoHideScrollbars": true, "bottomMargin": -2, "creationFunction": "CreateScrollArea", "scrollbarDivSize": 18, "scrollbarMargin": 6, "spacing": -18, "topMargin": -2, "view": "DC.View" },
    "setupButton": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "showBack", "rightImageWidth": 5, "text": "settingsButton", "view": "DC.View" },
    "show": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "name": "show", "onchange": "updateShow", "options": [["hsv, rgb, hex", "all"], ["name, hsv, hex", "hex"], ["name, rgb, hex", "rgb"]], "rightImageWidth": 16, "view": "DC.View" },
    "skipButton": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "versionSkip", "rightImageWidth": 5, "text": "skipButton", "view": "DC.View" },
    "sort": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "name": "sort", "onchange": "updateSort", "options": [["sort by name", "name"], ["sort by hue", "hue"], ["sort by saturation", "saturation"], ["sort by value", "value"], ["sort by date added", "date"]], "rightImageWidth": 16, "view": "DC.View" },
    "stack": { "subviewsTransitions": [{ "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }], "view": "DC.StackLayout" },
    "stack2": { "subviewsTransitions": [{ "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }], "view": "DC.StackLayout" },
    "successButton": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "showMain", "rightImageWidth": 5, "text": "doneButton", "view": "DC.View" },
    "successText": { "text": "successText", "view": "DC.Text" },
    "swatchShine": { "creationFunction": "CreateShape", "leftImageWidth": 5, "rightImageWidth": 5, "view": "DC.View" },
    "swatchShineSave": { "creationFunction": "CreateShape", "leftImageWidth": 5, "rightImageWidth": 5, "view": "DC.View" },
    "text": { "text": "copyright", "view": "DC.Text" },
    "textHEX": { "text": "textHEX\nE\nX", "view": "DC.Text" },
    "textHSV": { "text": "textHSV\nS\nV", "view": "DC.Text" },
    "textRGB": { "text": "textRGB\nG\nB", "view": "DC.Text" },
    "truncatedText": { "text": "truncatedText", "view": "DC.Text" },
    "tryButton": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "getLibrary", "rightImageWidth": 5, "text": "tryButton", "view": "DC.View" },
    "tryButton1": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "getLibrary", "rightImageWidth": 5, "text": "tryButton", "view": "DC.View" },
    "tryButton2": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "showNames2", "rightImageWidth": 5, "text": "tryButton", "view": "DC.View" }
};














