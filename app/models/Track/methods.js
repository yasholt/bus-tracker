module.exports = (Track, Point) => {

    Track.createTrack = async (trackData) => {

        const {track, pointsArray} = trackData;

        try {
            const trackCreateResponse = await Track.build(track).save();
            console.log('Created new track model instance successful', trackCreateResponse.dataValues);

            pointsArray.forEach(point => {
                point.trackID = trackCreateResponse.id;
            });

            try {
                const pointsCreateResponse = await Point.bulkCreate(pointsArray);
                console.log('Track and points created successful');

                return {
                    trackCreateResponse,
                    pointsCreateResponse
                }
            } catch (error) {
                console.error('Create new points error:', error);
                return error;
            }
        } catch (error) {
            console.error('Create new track error:', error);
            return error;
        }
    };

    Track.getAllTracks = async () => {
        try {
            const data = await Track.findAll({
                include: [{
                    model: User
                }]
            });
            console.log('Got all tracks with users successful');
            return data;
        } catch (error) {
            console.error('Get all tracks with users error:', error);
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
            console.log('Got track with points successful');
            return data;
        } catch (error) {
            console.error('Get track with all points error:', error);
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

            console.log('pointDeleteResponse', pointDeleteResponse);

            if (pointDeleteResponse !== 0) {
                console.log('Points deleted successful');

                try {
                    const trackDeleteResponse = await Track.destroy({
                        where: {
                            id: trackID
                        }
                    });
                    console.log('Delete track with points successful', trackDeleteResponse);

                    return {
                        pointDeleteResponse,
                        trackDeleteResponse
                    }
                } catch (error) {
                    console.error('Delete track with all points error:', error);
                    return error;
                }
            } else {
                throw new Error('No points with such trackID');
            }
        } catch (error) {
            console.error('Delete track with all points error:', error);
            return error;
        }
    };

    Track.updateTrack = async (trackID, trackData) => {

        const {track, pointsArray} = trackData;

        try {
            const trackUpdateResponse = await Track.update(track, {
                where: {
                    id: trackID
                }
            });
            console.log('Updated track model instance successful', trackUpdateResponse);

            pointsArray.forEach(point => {
                point.trackID = trackID;
            });

            try {
                const data = await Point.destroy({
                    where: {
                        trackID: trackID
                    }
                });
                console.log('Old points deleted successfully', data);

                try {
                    const pointsUpdateResponse = await Point.bulkCreate(pointsArray);
                    console.log('Track and points updated successfully');

                    return {
                        pointsUpdateResponse,
                        trackUpdateResponse
                    }
                } catch (error) {
                    console.error('Create new points error:', error);
                    return error;
                }
            } catch (error) {
                console.error('Delete old points error:', error);
                return error;
            }
        } catch (error) {
            console.error('Update track error:', error);
            return error;
        }
    };
};