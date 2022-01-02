// Sample Analytics TS Compiler // excluded by tsconfig.json
let logged;

function sendAnalytics(data: string) {
    console.log(data);
    logged = true;
    logged = "Max"
}

sendAnalytics("The Data");