var $compile, palProperties, palSettings;

beforeEach(module('reemi.ui'));
beforeEach(module('reemi.mocks.palSettings'));
...
beforeEach(inject(function(_$compile_, _palProperties_, _palSettings_) {
    $compile = _$compile_;
    ...
    palProperties = _palProperties_;
    palSettings = _palSettings_;
    ...
});
