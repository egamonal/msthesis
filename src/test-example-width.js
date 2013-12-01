describe('UI directive', function () {
    ...
    describe('width', function () {
        it('should set the property to 40 for Catalan and 42 for French', function () {
            $compile('<fl:ui>' +
                '<fl:width fl:lang="ca">40</fl:width>' +
                '<fl:width fl:lang="fr">42</fl:width>' +
                '</fl:ui>')(scope); // uses ui controller
            scope.$digest();
            expect(scope.properties.default.width).toBeUndefined();
            expect(scope.properties.ca.width).toEqual(40.0);
            expect(scope.properties.fr.width).toEqual(42.0);
        });
    ...
});
