module.exports = async function (context, myTimer) {
    const timeStamp = new Date().toISOString();
    let gitHubAPI = "https://api.github.com/users/aplusandminus/repos";

    try {
        const data = JSON.stringify(gitHubAPI);
        if (data) {
            context.log('GitHub entries received and returned at: ', timeStamp);
            return data;
        }
    } catch {
        context.log('Error occurred at: ', timeStamp);
        context.log('Error: ', error);
    }
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};