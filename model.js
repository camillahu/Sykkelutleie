const app= document.getElementById("app")
let inputMsg = "";
const model = {
    app: {
        page: 'bicycles',
        loggedInUser: null,
        isAdmin: false,
        currentBike: null,
    },
    input: {
        createUserPage: {
            fullName: "",
            username: "",
            password: "",
            address: "",
            email: "",
        },
        logIn: {
            username: "",
            password:"",
        },
        ownerInput: {
            bicycleId: null,
            color: "",
            bicycleModel: "",
            location: "",
            pricePerHour: "",
        },
        userRentPage: {
            bicycleId: null,
            rentStartTime: "21/03/2024 10.30",
        },
        userEndRentPage: {
            location: "", //vet ikke om jeg trenger denne? 
            paymentMethodId: null,
            paymentMethod: ["Visa", "MasterCard", "PayPal" ], //trengs denne?
            confirmedPayment: false,
        },
    },
    data: {
        bicycles: [
            {
                bicycleId: 0,
                color: "Purple",
                bicycleModel: "Super 1200",
                location: "Revetal",
                pricePerHour: 100,
                img: "sykkel1.jpg",
            },
            {
                bicycleId: 1,
                color: "Red and black",
                bicycleModel: "Super 1400",
                location: "Moss",
                pricePerHour: 150,
                img: "sykkel2.jpg",
            },
        ],
        users: [
            {
                userId: 0,
                fullName: "Kåre Arnt Bernard Fjodåsen",
                username: "admin",
                password: "password",
                address: "Lia 27",
                timesRented: 0,
            },
            {
                userId: 1,
                fullName: "Kåre Kåresen",
                username: "kåre",
                password: "password",
                address: "Lia 12",
                timesRented: 3,
            },
            {
                userId: 2,
                fullName: "Bernt Berntsen",
                username: "bernt",
                password: "password",
                address: "Lia 13",
                timesRented: 1,
            },
                
        ],
        rentEvents: [
            {
                userId: 0,
                bicycleId: 0,
                rentStartTime: "",
                rentStopTime: "",
            }
        ],
        messages: 
            {rentMessage:  "",
            logInErrorMessage: "",
            },
        
    },
}