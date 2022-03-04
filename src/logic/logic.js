export function switchResponse(response) {
    switch (response.status) {
        case 200:
            return response.data
        case 429:
            return response.error_msg = "error_msg_429"
        default:
            return response.error_msg = "error_msg_default"
    }
}