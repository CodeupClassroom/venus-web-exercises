(async function() {


    // let quote = "";
    // fetch("https://animechan.vercel.app/api/random")
    //     .then(function(response) {
    //         console.log("fetch finally finished!")
    //         // can we start using the data at this point?
    //         // console.log(response); // using the response directly is no good
    //         // except for check the response code
    //         if(response.status !== 200) {
    //             console.log("OMG RUN FOR THE HILLS!");
    //         } else {
    //             return response.json();
    //         }
    //     }).then(function(data) {
    //         // finally we get our data
    //         console.log(data);
    //         console.log(data.quote);
    //
    //         // quote is only available in here!
    //
    //     });
    //
    // // 1. wait for fetch to finish and get is response
    // const response = await fetch("https://animechan.vercel.app/api/random");
    //
    // // 2. tell response to produce json data and wait for it to finish
    // quote = await response.json();
    //
    // // want the quote available here
    //
    // console.log(quote);
    //
    // // --------------------------------------
    // // alternate way of trying to make the 2-step fetch process easier to understand
    //
    // quote = await fetch("https://animechan.vercel.app/api/randomx")
    //     .then(async function(response) {
    //         if(response.status !== 200) {
    //             console.log("OMG RUN FOR THE HILLS!");
    //             return "";
    //         } else
    //             return await response.json();
    //     });
    // console.log(quote);
    //
    // // read in the exercise inventory.json and spit out array to console
    // const tools = await fetch("../data/inventory.json")
    //     .then(async function(response) {
    //         if(response.status !== 200) {
    //             console.log("cannot read tools file");
    //             return "";
    //         } else
    //             return await response.json();
    //     });
    // // console.log(tools);
    //
    // // now what???
    // for (let i = 0; i < tools.length; i++) {
    //     console.log(tools[i]);
    // }

    async function fetchToolsData() {
        const tools = await fetch("../data/inventory.json")
            .then(async function(response) {
                if(response.status !== 200) {
                    console.log("cannot read tools file");
                    return "";
                } else
                    return await response.json();
            });
        return tools;
        // // console.log(tools);
    }

    console.log(await  fetchToolsData());

}())