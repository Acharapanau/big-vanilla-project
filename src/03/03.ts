import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";


export const addSkill = (st:StudentType, skill:string) => {
    st.technologies.push({
        id: new Date().getTime(),
    title:skill
    })
}

export function makeStudenActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudenLiveIn = (s:StudentType, cityName:string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
building.staffCount -= staffCountToFire;
}

export const toHireStaff = (buildings: GovernmentBuildingType, staffCountToHire: number) => {
buildings.staffCount += staffCountToHire;
}


export const createMessage = (city: CityType) => {
    return  `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber}men.`
}