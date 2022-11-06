const config = {
    local: {
        DB: {
            HOST: "127.0.0.1",
            PORT: "27017",
            DATABASE: "localhost_01",
            MONGOOSE: {
                userunifiedtopology: true,
                useNewurlparser: true

            },
            USERNAME: "",
            PASSWORD: "",
        },
        PORTNO: 7896,
    },
        staging: {
            DB: {
                HOST: "127.0.0.1",
                PORT: "27017",
                DATABASE: "localhost_01",
                MONGOOSE: {
                    userunifiedtopology: true,
                    useNewurlparser: true

                },
                USERNAME: "",
                PASSWORD: "",

            },
            PORT:7896,
            email:{
                host:"smtp.gmail.com",
                port:465,
                user:"zalkesuyesh108@gmail.com",
                password:"nmtqccniuwpuzckm"


        },
    
   



    }
}

export const get = function get(env) {
    return config[env];
}





