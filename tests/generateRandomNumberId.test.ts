import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";
import {expect,test} from "bun:test";
test("generer un nombre a 6 chiffres",()=>{
    const id=generateRandomNumberId;
    expect(id).toBeGreaterThanOrEqual(100000);
    expect(id).toBeLessThanOrEqual(999999);
})