

export const LOGIN="LOGIN";
export const CHECKANWER="CHECKANWER";

export const CHECKQUESTION="CHECKQUESTION";

export const NEXTPAGE="NEXTPAGE";

export const FINISH="FINISH";
export const COREANWSER="COREANWSER";

export const loginform = (email,password) => {
    return {
        type: 'LOGIN',
        email,password
    }

}
export const checkquestion = (id) => {
    return {
        type: 'CHECKQUESTION',
        id
    }

}
export const finish = (value) => {
    return {
        type: 'FINISH',
        value
    }

}
export const checkanwer = (value) => {
    return {
        type: 'CHECKANWER',
        value
    }

}
export const nextpage = (value) => {
    return {
        type: 'NEXTPAGE',
        value
    }

}
export const coreanwser = (value) => {
    return {
        type: 'COREANWSER',
        value
    }

}