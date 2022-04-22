let str = 'String1@';

if (typeof(str)== 'string') {
    if ((str.length >= 5) && (str.length <= 64)) {
        if (/[a-zA-Z]/.test(str)) {
            if (/[A-Z]/.test(str)) {
                if (/[0-9]/.test(str)) {
                    if (/@/.test(str)) {
                        console.log ('the string meets all the requirements')
                    } else console.log ('the string must contain at least one "@" symbol')
                } else console.log('the string must contain at least one number')
            } else console.log('the string must contain at least one uppercase letter')
        } else console.log('the string must contain letters')
    } else console.log('The string must contain at least 5 and no more than 64 characters')
} else console.log('please enter some string');