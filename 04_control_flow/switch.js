// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1: //"jan"
        console.log("January");
        break;
    case 2: //"feb"
        console.log("Febuary");
        break;
    case 3: //"mar"
        console.log("March");
        break;
    case 4: //"apr"
        console.log("April");
        break;

    default:
        console.log("months not match"); // after match value all cases execute except default
        break;
}