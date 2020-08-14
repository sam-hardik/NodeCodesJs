var user="testuser";

switch (user) {
    case "admin":
        console.log("Full Rights");
        break;
    case "subadmin":
        console.log("Selected Rights");
        break;
        case "testuser":
        console.log("Test Rights");
        break;        
    default:
    console.log("Guest User! No Rights")
        break;
}