
//Drop down Menu items

export const serviceRadiusMenu = [
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25'
]


export const bussinessHoursMenu = [
    'All days', 'Monday - Friday', 'Saturday - Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]

export const timezoneMenu = ['Eastern Time', 'Central Time', 'Mountain Time', 'Pacific Time']

export const yearsinBussinessMenu = [
    '0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11', '12', '13',
    '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27',
    '28', '29', '30', '31', '32', '33', '34',
    '35', '36', '37', '38', '39', '40', '41',
    '42', '43', '44', '45', '46', '47', '48',
    '49', '50'
]

export const monthsinBussinessMenu = ['1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11']

export const employeeStrengthMenu = ['Solo', '2-5', '6-10', '11-20', '20-50', '50+ ']


export const tollfreeMenu = ['800', '888', '877', '866', '855', '844', '833']




export function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res == null)
        return false;

    else
        return true;
}


 export const validateEmail = (email) => {
     
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
// for (let index = 0; index < 51; index++) {
//     monthsinBussinessMenu.push(index.toString())
// }
