const app= document.getElementById("app")
let inputMsg = "";
const model = {
    app: {
        currentPage: "createUserPageView",
        loggedInUser: "Kjell Arnt"
    },
    input: {
        createUserPage: {
            fullName: "",
            username: "",
            password: "",
            address: "",
            email: "",
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
                color: "purple",
                bicycleModel: "super 1200",
                location: "Revetal",
                pricePerHour: 100,
                img: "sykkel1.jpg",
            },
            {
                bicycleId: 1,
                color: "red and black",
                bicycleModel: "super 1400",
                location: "Moss",
                pricePerHour: 150,
                img: "sykkel2.jpg",
            },
        ],
        users: [
            {
                userId: 0,
                fullName: "Kåre",
                username: "heipådeg",
                password: "1234",
                address: "Lia 12",
                timesRented: 0,
            }
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
            
            },
        selectedBikeId: -1,
        
    },
}