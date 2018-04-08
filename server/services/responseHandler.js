module.exports = (requestType, response) => {
    switch (requestType) {
        case 'get-all': {
            return {
                data: response,
                status: 200
            };
        }

        case 'get': {
            if (response.message) {
                return {
                    message: response.message,
                    status: 400
                }
            } else {
                return {
                    data: response,
                    status: 200
                };
            }
        }

        case 'delete': {
            if (response.message !== 'OK') {
                return {
                    message: response.message,
                    status: 400
                }
            } else {
                return {
                    message: response.message,
                    status: 200
                }
            }
        }

        case 'add': {
            if (response.errors) {
                return {
                    message: response.errors[0].message,
                    status: 400
                }
            } else if (response.name && response.parent) {
                return {
                    message: response.name,
                    status: 400
                }
            } else {
                return {
                    message: response.message,
                    status: 200
                }
            }
        }

        case 'update': {
            if (response.name && response.parent) {
                return {
                    message: response.name,
                    status: 400
                }
            } else {
                return {
                    message: response.message,
                    status: 200
                };
            }
        }
    }
};