'use strict';

class Service {

    constructor(model) {
        this.model = model;
    }

    async createDocument(item) {
        return this.model.create(item);
    }

    async getAllDocuments() {
        return this.model.find().lean().exec();
    }

    async getDocumentById(_id) {
        return this.model.findOne({_id}).lean().exec();
    }

    async updateDocumentById(_id, patchSource) {
        return this.model.findOneAndUpdate({_id}, {$set: patchSource}, {new: true});
    }

    async deleteDocumentById(_id) {
        return this.model.deleteOne({_id});
    }

}

module.exports = Service;
