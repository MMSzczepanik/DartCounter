import { VIEW_TYPE } from "../types/viewType"

interface StepConfig {
    header: boolean
    goBack: boolean;
    logout: boolean;
}

export const getStepConfig: Record<VIEW_TYPE, StepConfig> = {
    [VIEW_TYPE.LOGIN]: {
        header: false,
        goBack: false,
        logout: false
        
    },
    [VIEW_TYPE.TOURNAMENTS]: {
        header: true,
        goBack: false,
        logout: true
    },
    [VIEW_TYPE.MATCHES]: {
        header: true,
        goBack: true,
        logout: true
    },
    [VIEW_TYPE.COUNTER]: {
        header: true,
        goBack: true,
        logout: false
    }
}