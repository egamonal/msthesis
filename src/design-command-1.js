var ActionCtrl = {
    goTo: function (url) {
        return "Going to " + url;
    },
    setLanguage: function (lang) {
        return "Setting language to " + lang;
    }
};

console.log(ActionCtrl.goTo('main-screen'));
console.log(ActionCtrl.setLanguage('jp'));
