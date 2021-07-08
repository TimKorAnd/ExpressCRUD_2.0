'use strict';

class Service {

    constructor(model) {
        this.model = model;
    }

    createDocument(item) {
        return this.model.create(item);
    }

    getAllDocuments() {
        return this.model.find().lean().exec();
    }

    getAllDocumentsByField(field) {
        console.log(field)
        return this.model.find(field).lean().exec();
    }

    getDocumentById(_id) {
        _id = (typeof _id) === 'string' ? _id.toObjectId() : _id;
        return this.model.findOne({_id}).lean().exec();
    }

    updateDocumentById(_id, patchSource, paramReturn = {new: true} ) {
        _id = (typeof _id) === 'string' ? _id.toObjectId() : _id;
        return this.model.findOneAndUpdate({_id}, {$set: patchSource}, paramReturn).lean().exec();
    }

    deleteDocumentById(_id) {
        _id = (typeof _id) === 'string' ? _id.toObjectId() : _id;
        return this.model.deleteOne({_id}).lean().exec();
    }



}

module.exports = Service;
