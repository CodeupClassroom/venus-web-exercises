(function() {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    // Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
    // TODO Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    users.filter(function (user){
        if(user.languages.length >= 3) {
            return true;
        } else {
            return false;
        }
        // same thing as this simpler version:
        // return user.languages.length >=3;
    })

    // TODO Use .map to create an array of strings where each element is a user's email address
    users.map(function (user){
        return user.email;
    })

    // TODO Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    var totalYears = users.reduce(function (total, user){
        console.log("Total is " + total);
        return total + user.yearsOfExperience;
    }, 0)

    var averageYears = totalYears/users.length;
    console.log(averageYears);

    // 5
    // TODO Use .reduce to get the longest email from the list of users.
    const longestEmail = users.reduce(function(longestEmailSoFar, user) {
        console.log("longest email so far: " + longestEmailSoFar);

        if(user.email.length >= longestEmailSoFar.length) {
            return user.email;
        }
        return longestEmailSoFar;
    }, "");
    console.log(longestEmail);

    // 6
    // TODO Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    // let allUserNames = users.reduce(function (allUserNamesSoFar, user) {
    //     console.log("all user names so far: "  + allUserNamesSoFar);
    //
    //     return allUserNamesSoFar + user.name + ", ";
    // }, "");
    // // we ended up with last user's name having `, ` after it so trim that off
    // allUserNames = allUserNames.substr(0, allUserNames.length - 2);

    // let allUserNames = users.reduce(function(allUserNamesSoFar, user) {
    //     return allUserNamesSoFar.push(user.name);
    // }, []);
    let allUserNames = users.map(function (user) {
        return user.name;
    })
    console.log(allUserNames.join(", "));

    // bonus
    // note: a Set is a neat and useful data structure.
    // it is like an array but only stores UNIQUE elements
    // https://en.wikipedia.org/wiki/Set_(abstract_data_type)

    let uniqueLanguages = users.reduce(function(setOfUniqueLanguagesSoFar, user) {
        for(let language of user.languages) {
            setOfUniqueLanguagesSoFar.add(language)
        }
        return setOfUniqueLanguagesSoFar;
    }, new Set());
    console.log(uniqueLanguages);

    console.log("**************** FOREACH version of reduce ");
    // let instructors = "";
    // for (let i = 0; i < users.length; i++) {
    //     // const user = users[i];
    //     // console.log(user);
    //
    //     // concat all user names
    //     if(users[i] != "") {
    //         instructors += ", " + users[i].name;
    //     }
    // }
    // console.log(instructors);

    const allNames = users.reduce(function(instructors, user) {
        return instructors + ", " + user.name;
    }, "")
    // console.log(allNames);
})()