import {expect,test} from "bun:test";
test("to slug",()=>{
    const phrase = "je suis 1 cas d'école";
    const resultat = toSlug(phrase);
    expect(resultat).toBe("je-suis-1-cas-d-ecole");
});