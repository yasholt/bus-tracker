const TrackModel = require('../models').Track;

exports.getAllTracks = async () => {
    return await TrackModel.getAllTracks();
};

exports.createTrack = async (req) => {
    return await TrackModel.createTrack(req.body);
};

exports.getTrack = async (req) => {
    return await TrackModel.getTrack(req.params.id);
};

exports.updateTrack = async (req) => {
    return await TrackModel.updateTrack(req.params.id, req.body);
};

exports.deleteTrack = async (req) => {
    return await TrackModel.deleteTrack(req.params.id);
};

exports.getUserTracks = async (req) => {
    return await TrackModel.getTracksByUserID(req.params.id);
};