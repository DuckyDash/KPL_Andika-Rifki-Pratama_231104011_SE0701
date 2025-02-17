import { userInfo } from "os"
import process from "process"
import readline from "readline"

const input =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("What's your name?" , (nama) => {
    userInfo.nama = nama
    input.question("What major are you?" , (major) => {
        userInfo.major = major
    input.question("Which university are you on?" , (univ) => {
            userInfo.univ = univ
        input.question("How the fuck old are ya?" , (age) => {
                userInfo.age = age
                console.info(`Name : ${nama}`)
                console.info(`Major : ${major}`)
                console.info(`Universirty ${univ}`)
                console.info(`Age :  ${age}`)
                input.close()
            })
        })
    })
})
