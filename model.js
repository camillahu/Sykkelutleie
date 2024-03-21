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
            location: "",
            paymentMethodId: 1,
            confirmedPayment: false,
        },
    },
    data: {
        bicycles: [
            {
                bicycleId: 0,
                color: "red",
                bicycleModel: "super 1200",
                location: "Revetal",
                pricePerHour: 100,
            },
            {
                bicycleId: 1,
                color: "blue",
                bicycleModel: "super 1400",
                location: "Moss",
                pricePerHour: 150,
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
            },
        ],
    },
}