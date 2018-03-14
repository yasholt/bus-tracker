module.exports = (requestType, response) => {
    switch (requestType) {
        case 'get-user': {
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

        case 'delete-user': {
            if (response.message) {
                return {
                    message: response.message,
                    status: 400
                }
            } else {
                return {
                    message: 'OK',
                    status: 200
                }
            }
        }

        case 'add-user': {
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
                    message: 'OK',
                    status: 200
                }
            }
        }
    }
};