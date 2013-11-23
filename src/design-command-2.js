var ActionCtrl = {
    goTo: function (url) {
        return "Going to " + url;
    },
    setLanguage: function (lang) {
        return "Setting language to " + lang;
    },
    
    // new method
    execute: function (name) {
        return ActionCtrl[name] && ActionCtrl[name].apply(ActionCtrl, [].slice.call(arguments, 1));
    }
};
   
console.log(ActionCtrl.execute("setLanguage", "af"));
console.log(ActionCtrl.execute("goTo", "another-screen"));
