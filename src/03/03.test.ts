import {StudentType} from "../02/02";
import {addSkill, doesStudenLiveIn, makeStudenActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})


test("student should be made active", () => {
    expect(student.isActive).toBe(false)

    makeStudenActive(student);

    expect(student.isActive).toBe(true)

})

test("Does student lives in city?", () => {
    expect(student.isActive).toBe(false)

    let result1 = doesStudenLiveIn(student, "Moscow");
    let result2 = doesStudenLiveIn(student, "Minsk");

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})