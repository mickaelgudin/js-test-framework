function getMois() {
    return [ 'janvier',
             'fevrier',
             'mars',
             'avril',
             'mai',
            'juin',
            'juillet',
            'aout',
            'septembre',
            'octobre',
            'novembre',
            'decembre',
            ];
}

function getMoisByIndex(index) {
    if(isNaN(index) ||  index < 1 || index > 12) {
        return "error";
    }

    let mois = getMois();

    return mois[index-1];
}


it("month should exclude index < 1 and index > 12 ",function() {
        expect(getMoisByIndex(0)).toBeDefined();
        //should throw an error
        expect(getMoisByIndex(0)).toEqual("12");
        expect(getMoisByIndex(13)).toBeDefined();
        expect(getMoisByIndex(13)).toEqual("error");
 });
