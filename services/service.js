class Service {
    constructor(model) {
        this.model = model;
    }

    createDocument(item) {
        return this.model.create(item);
    }

    getAllDocuments(...populateParams) {
        return this.model.find().populate(...populateParams).lean().exec();
    }

    getAllDocumentsByField(field, ...populateParams) {
        return this.model.find(field).populate(...populateParams).lean().exec();
    }

    getDocumentById(_id, ...populateParams) {
        _id = (typeof _id) === 'string' ? _id.toObjectId() : _id;
        return this.model.findOne({ _id }).populate(...populateParams).lean().exec();
    }

    updateDocumentById(_id, patchSource, paramReturn = { new: true }) {
        _id = (typeof _id) === 'string' ? _id.toObjectId() : _id;
        return this.model.findOneAndUpdate({ _id }, { $set: patchSource }, paramReturn)
            .lean().exec();
    }

    deleteDocumentById(_id) {
        _id = (typeof _id) === 'string' ? _id.toObjectId() : _id;
        return this.model.deleteOne({ _id }).lean().exec();
    }
}

module.exports = Service;
