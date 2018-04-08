const getPaginatedArray = require('../../services/paginationHelper');

module.exports = (Track, Point, User) => {

    Track.createTrack = async (trackData) => {
        const {track, pointsArray} = trackData;

        try {
            const trackCreateResponse = await Track.build(track).save();

            pointsArray.forEach(point => {
                point.trackID = trackCreateResponse.id;
            });

            try {
                await Point.bulkCreate(pointsArray);
                console.log('Track and points created successfully');

                return {
                    message: 'OK'
                }
            } catch (error) {
                console.error('Create new points error', error);
                return error;
            }
        } catch (error) {
            console.error('Create new track error', error);
            return error;
        }
    };

    Track.getAllTracks = async (page, size) => {
        try {
            const data = await Track.findAll({
                include: [{
                    model: User
                }]
            });
            console.log('Get all tracks with users successfully');

            if (page && size) {
                return {
                    amount: data.length,
                    tracks: getPaginatedArray(data, +page, +size)
                }
            } else {
                return {
                    amount: data.length,
                    tracks: data
                }
            }
        } catch (error) {
            console.error('Get all tracks with users error', error);
            return error;
        }
    };

    Track.getTrack = async (trackID) => {
        try {
            const data = await Track.findOne({
                where: {
                    id: trackID
                },
                include: {
                    model: Point
                }
            });
            if (data) {
                console.log('Get track with points successfully');
                return data;
            } else {
                throw new Error('No track with such trackID');
            }
        } catch (error) {
            console.error('Get track with all points error', error);
            return error;
        }
    };

    Track.deleteTrack = async (trackID) => {
        try {
            const pointDeleteResponse = await Point.destroy({
                where: {
                    trackID
                }
            });

            if (pointDeleteResponse !== 0) {
                try {
                    await Track.destroy({
                        where: {
                            id: trackID
                        }
                    });
                    console.log('Delete track with points successfully');

                    return {
                        message: 'OK'
                    }
                } catch (error) {
                    console.error('Delete track with all points error', error);
                    return error;
                }
            } else {
                throw new Error('No points with such trackID');
            }
        } catch (error) {
            console.error('Delete track with all points error', error);
            return error;
        }
    };

    Track.updateTrack = async (trackID, trackData) => {
        const {track, pointsArray} = trackData;

        try {
            await Track.update(track, {
                where: {
                    id: trackID
                }
            });

            pointsArray.forEach(point => {
                point.trackID = trackID;
            });

            try {
                await Point.destroy({
                    where: {
                        trackID
                    }
                });

                try {
                    await Point.bulkCreate(pointsArray);
                    console.log('Track and points updated successfully');

                    return {
                        message: 'OK'
                    }
                } catch (error) {
                    console.error('Create new points error', error);
                    return error;
                }
            } catch (error) {
                console.error('Delete old points error', error);
                return error;
            }
        } catch (error) {
            console.error('Update track error', error);
            return error;
        }
    };

    Track.getTracksByUserID = async (userID, page, size) => {
        try {
            const data = await Track.findAll({
                where: {
                    userID
                }
            });
            if (data) {
                console.log('Get tracks by userID successfully');
                if (page && size) {
                    return {
                        amount: data.length,
                        tracks: getPaginatedArray(data, +page, +size)
                    }
                } else {
                    return {
                        amount: data.length,
                        tracks: data
                    }
                }
            } else {
                throw new Error('No tracks with such userID');
            }
        } catch (error) {
            console.error('Get tracks by userID error', error);
            return error;
        }
    };
};