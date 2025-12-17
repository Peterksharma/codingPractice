import { Names } from "./data.js"

const renderNames = () => {
    Names.map((data) => {
        return (
            console.log(data)
        )
    })
}

renderNames()