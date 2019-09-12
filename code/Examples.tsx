import { Override, Data } from "framer"

const data = Data({
    text: "",
})

export function Input(): Override {
    return {
        onValueChange: (value: string) => {
            data.text = value
        },
    }
}

export function Text(): Override {
    return {
        text: data.text,
    }
}
